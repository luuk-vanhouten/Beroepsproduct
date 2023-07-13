let data;

async function getData(inputValue) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/item/${inputValue}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("An error occurred:", error);
    throw error;
  }
}

async function postData(inputValue) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/item/${inputValue}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("An error occurred:", error);
    throw error;
  }
}

async function printData(inputValue) {
  removeData();
  data = await getData(inputValue);
  data.forEach((element) => {
    const shopitem = new shop_item(element);
    document.querySelector("#shop").appendChild(shopitem);
  });
}

async function removeData() {
  const shop = document.querySelector("#shop");
  while (shop.firstChild) {
    shop.removeChild(shop.firstChild);
  }
}
