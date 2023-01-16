const BASE_URL = 'https://fakestoreapi.com/products';
let products = [];
const mainContainer = document.querySelector('.main-container');
const menuButton = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-nav');

// getting products
const getProducts = async () => {
  try {
    const res = await fetch(BASE_URL);
    products = await res.json();
    console.log(products);
    displayProducts(products);
  } catch (err) {
    console.error(err);
  }
};

getProducts();

// hamburger menu
menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('is-active');
  mobileMenu.classList.toggle('is-active');
});

// make UI
const displayProducts = products => {
  const htmlString = products
    .map(product => {
      console.log(product);
      return `
      <div class='card'>
       <img class='card-image' src=${product.image}></img>
       <div class='card-description'>
        <h4>${product.title}</h4>
        <p>Category: ${product.category}</p>
        <p>Descriptions: ${product.description.slice(0, 50)}...</p>
        <h4 class='card-price'>Price: ${product.price}$</h4>
        <button class='card-button'>Buy Now</button>
       </div>
     </div>
    `;
    })
    .join('');
  mainContainer.innerHTML = htmlString;
};

// Get the current year for footer
const year = document.querySelector('#currentYear');
year.innerHTML = new Date().getFullYear();
