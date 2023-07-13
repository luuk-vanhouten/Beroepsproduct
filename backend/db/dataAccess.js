import Database from "better-sqlite3";

const { selectQueries, deleteQueries } = Queries;
const selectQueriesNames = Object.keys(selectQueries);
const deleteQueriesNames = Object.keys(deleteQueries);

function Query(query) {
  return dataAcces.db.prepare(query);
}

function initializeDatabase(fileName) {
  dataAcces.db = new Database("./db/database.sqlite");
  CreateInitialData();
}

function deleteAllData() {
  dropTablesNames.forEach((queryName) => {
    const query = dropTables[queryName];
    const stmt = Query(query);
    stmt.run();
  });
}

const selectAllQuery = (queryName) => {
  try {
    const query = selectQueries[queryName];
    const stmt = Query(query);
    const result = stmt.all();
    return result;
  } catch (error) {
    console.error("An error occurred while executing the select query:", error);
    return null;
  }
};

const selectQuery = (queryName, param) => {
  try {
    const query = selectQueries[queryName];
    const stmt = Query(query);
    const result = stmt.all(param);
    return result;
  } catch (error) {
    console.error("An error occurred while executing the select query:", error);
    return null;
  }
};

const dataAcces = {
  initializeDatabase: initializeDatabase,
  db: null,
  selectAllQuery: selectAllQuery,
  selectQuery: selectQuery,
  deleteAllData: deleteAllData,
};

export default dataAcces;
