const productNumbers = document.querySelector(".number_of_products");
const addNumber = document.querySelector(".addProduct");
const subtractNumber = document.querySelector(".subtractProduct");

addNumber.addEventListener("click", () => {

    let currentValue = Number(productNumbers.textContent);
    productNumbers.textContent = currentValue + 1;
    
});


subtractNumber.addEventListener("click", () => {
    
    let currentValue = Number(productNumbers.textContent);
    currentValue > 0 ? productNumbers.textContent = currentValue - 1 : productNumbers.textContent = 0;
   

});


