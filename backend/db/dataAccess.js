import Database from "better-sqlite3";
import Queries from "./queries.js";
import Data from "./dummyData.js";

const { createQueries, insertQueries, selectQueries, deleteQueries } = Queries;
const createQueriesNames = Object.keys(createQueries);
const insertQueriesNames = Object.keys(insertQueries);
const selectQueriesNames = Object.keys(selectQueries);
const deleteQueriesNames = Object.keys(deleteQueries);

const { Categories: CategoriesDummyData, Products: ProductsDummyData } = Data;

function initializeDatabase(fileName) {
  // initialize database
  dataAcces.db = new Database("./db/database.sqlite");
  CreateInitialData();
}

//delete all tables
function DeleteAllData() {
  dropTablesNames.forEach((queryName) => {
    const query = dropTables[queryName];
    const stmt = Query(query);
    stmt.run();
  });
}

// create tables
function CreateInitialData() {
  let dataPresent;
  try {
    console.log(dataAcces.db.prepare("SELECT COUNT(*) FROM item"));
    dataPresent = true;
  } catch (error) {
    dataPresent = false;
  }
  if (dataPresent) {
    return;
  }

  createQueriesNames.forEach((queryName) => {
    const query = createQueries[queryName];
    const stmt = Query(query);
    stmt.run();
  });

  insertQueriesNames.forEach((queryName) => {
    console.log(queryName);
    const query = insertQueries[queryName];
    const stmt = Query(query);
    switch (queryName) {
      case "CATEGORY":
        console.log("CATEGORY");
        let categoryPresent;
        try {
          Query("SELECT COUNT(*) FROM category");
          categoryPresent = true;
        } catch (error) {
          console.error(error);
          categoryPresent = false;
        }
        if (categoryPresent) {
          break;
        } else {
          CategoriesDummyData.forEach((category) => {
            stmt.run(category.category_name);
            console.log(`A row has been inserted`);
          });
        }
        break;
      case "PRODUCT":
        let itemPresent;
        try {
          Query("SELECT COUNT(*) FROM product");
          itemPresent = true;
        } catch (error) {
          console.error(error);
          itemPresent = false;
        }
        if (itemPresent) {
          break;
        } else {
          ProductsDummyData.forEach((product) => {
            stmt.run(
              product.category_id,
              product.product_name,
              product.product_price,
              product.product_description,
              product.product_image
            );
          });
        }
        break;
      default:
        break;
    }
  });
}

// write queries to make the tables
function Query(query) {
  return dataAcces.db.prepare(query);
}

const selectQuery = (queryName, param) => {
  console.log(queryName);
  const query = selectQueries[queryName];
  console.log(query);
  const stmt = Query(query);
  console.log(stmt);
  const result = stmt.all(param);
  console.log(result);
  return result;
};

const dataAcces = {
  initializeDatabase: initializeDatabase,
  db: null,
  selectQuery: selectQuery,
};

export default dataAcces;
