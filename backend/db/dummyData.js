const CategoriesDummyData = [
  { category_name: "Engine" },
  { category_name: "Transmission" },
  { category_name: "Suspension" },
  { category_name: "Brakes" },
  { category_name: "Exhaust" },
  { category_name: "Wheels" },
  { category_name: "Tires" },
  { category_name: "Interior" },
  { category_name: "Exterior" },
  { category_name: "Electronics" },
  { category_name: "Accessories" },
];

const ProductsDummyData = [
  {
    category_id: 1,
    product_name: "Engine",
    product_description: "Engine",
    product_price: 1000,
    product_image: "https://via.placeholder.com/150",
  },
  {
    category_id: 2,
    product_name: "Transmission",
    product_description: "Transmission",
    product_price: 1000,
    product_image: "https://via.placeholder.com/150",
  },
  {
    category_id: 3,
    product_name: "Suspension",
    product_description: "Suspension",
    product_price: 1000,
    product_image: "https://via.placeholder.com/150",
  },
  {
    category_id: 4,
    product_name: "Brakes",
    product_description: "Brakes",
    product_price: 1000,
    product_image: "https://via.placeholder.com/150",
  },
  {
    category_id: 5,
    product_name: "Exhaust",
    product_description: "Exhaust",
    product_price: 1000,
    product_image: "https://via.placeholder.com/150",
  },
  {
    category_id: 6,
    product_name: "Wheels",
    product_description: "Wheels",
    product_price: 1000,
    product_image: "https://via.placeholder.com/150",
  },
  {
    category_id: 7,
    product_name: "Tires",
    product_description: "Tires",
    product_price: 1000,
    product_image: "https://via.placeholder.com/150",
  },
  {
    category_id: 8,
    product_name: "Interior",
    product_description: "Interior",
    product_price: 1000,
    product_image: "https://via.placeholder.com/150",
  },
  {
    category_id: 9,
    product_name: "Exterior",
    product_description: "Exterior",
    product_price: 1000,
    product_image: "https://via.placeholder.com/150",
  },
  {
    category_id: 10,
    product_name: "Electronics",
    product_description: "Electronics",
    product_price: 1000,
    product_image: "https://via.placeholder.com/150",
  },
  {
    category_id: 11,
    product_name: "Accessories",
    product_description: "Accessories",
    product_price: 1000,
    product_image: "https://via.placeholder.com/150",
  },
];

const CustomersDummyData = [
  {
    first_name: "John",
    last_name: "Doe",
    email: "johndoe@real.com",
    password: "password",
    phone_number: "1234567890",
    address: "123 Main St",
    city: "New York",
    state: "NY",
    zip_code: "12345",
    country: "USA",
  },
  {
    first_name: "Jane",
    last_name: "Doe",
    email: "janedoe@real.com",
    password: "password",
    phone_number: "1234567890",
    address: "123 Main St",
    city: "New York",
    state: "NY",
    zip_code: "12345",
    country: "USA",
  },
];

const OrdersDummyData = [
  {
    customer_id: 1,
    order_date: "2021-01-01",
    order_total: 1000,
  },
  {
    customer_id: 2,
    order_date: "2021-01-01",
    order_total: 1000,
  },
];

const OrderItemsDummyData = [
  {
    order_id: 1,
    product_id: 1,
    quantity: 1,
  },
  {
    order_id: 2,
    product_id: 2,
    quantity: 1,
  },
];

const exs = [
  CategoriesDummyData,
  ProductsDummyData,
  CustomersDummyData,
  OrdersDummyData,
  OrderItemsDummyData,
];
export default exs;
