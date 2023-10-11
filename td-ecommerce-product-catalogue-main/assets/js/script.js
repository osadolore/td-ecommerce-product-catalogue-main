const link = document.querySelector('.link')
const humbugger = document.querySelector('.hamburger')
const innerlink = document.querySelector('.center_link')
const productTab = document.querySelectorAll('input[name="tabset"]')
const catalogue = document.querySelectorAll('.catalogue')
const error = document.querySelector('.error')
const search = document.querySelector('.search_product')



// ==================================

// 1. Toggle humbugger menu;
// By default, the .link tag should 
// display none.
// ==================================
humbugger.onclick = () =>{
  innerlink.classList.toggle('hide')
  
}








// ==================================
// 2. Display products based on 
// All, Men or Female categories.
// ==================================
const displayCategory = (values) =>{
    catalogue.forEach(element =>{  
      error.style.display = "none"
const category = element.querySelector('.tag').textContent.toUpperCase(); 

let DisplayProduct = false;

    if (values === "ALL") {
    
      DisplayProduct= true;
    } 
    
    else if (category === values) {
      DisplayProduct = true;
    }
   
    element.style.display = DisplayProduct ? "block" : "none";
    });

    if (values === "BABIES"){
error.style.display = "block"
error.textContent = "NO BABIES PRODUCT"
    }
    
};


productTab.forEach(input => {
    input.addEventListener('change', (e) => {
      displayCategory(e.target.value.toUpperCase());
    });
  });








// ==================================
// 3. Display products based on 
// search keywords in the input fields.
// =============================
const Search_Product = (input) => {
    let seenProduct = false; 
  
    catalogue.forEach(element => {
      element.style.display = "none";
  
      const productName = element.querySelector('p').textContent.toUpperCase();
  
      if (productName.includes(input)) {
        element.style.display = 'block';
        seenProduct = true; 
      }
    });
  
    
    if (seenProduct === false) {
      error.style.display = "block";
      error.textContent = "PRODUCT NOT FOUND";
    } else {
      error.style.display = "none";
    }
  }
  
  
  search.addEventListener('input', (e) => {
    Search_Product(e.target.value.toUpperCase());
  });
  
