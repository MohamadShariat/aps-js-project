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
    displayProducts(products);
  } catch (err) {
    console.error(err);
  }
};

getProducts();
endLoading();

// hamburger menu
menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('is-active');
  mobileMenu.classList.toggle('is-active');
});

// make UI
const displayProducts = products => {
  const htmlString = products
    .map(product => {
      return `
      <div class='card'>
       <img class='card-image' src=${product.image} loading='lazy'></img>
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

// loader
function endLoading() {
  window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');

    loader.classList.add('loader-hidden');

    // loader.addEventListener('transitionend', () => {
    //   document.body.removeChild(loader);
    // });
  });
}

// Get the current year for footer
const year = document.querySelector('#currentYear');
year.innerHTML = new Date().getFullYear();
