const BASE_URL = 'https://fakestoreapi.com/products';
let products = [];

// getting products
const getProducts = async () => {
  try {
    const res = await fetch(BASE_URL);
    products = await res.json();
    console.log(products);
  } catch (err) {
    console.error(err);
  }
};

getProducts();
