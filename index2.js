const productNumbers = document.querySelector(".number_of_products");
const addNumber = document.querySelector(".addProduct");
const subtractNumber = document.querySelector(".subtractProduct");
const priceOfProduct = document.querySelector("#price-money");
const price = Number(priceOfProduct.textContent.replace("$", ""));


addNumber.addEventListener("click", () => {

    let currentValue = Number(productNumbers.textContent);
    let value = currentValue + 1;
    productNumbers.textContent = value;
    
    addPrice(value);
    
});


subtractNumber.addEventListener("click", () => {
    
    let currentValue = Number(productNumbers.textContent);
    let value = currentValue - 1;
    currentValue > 0 ? productNumbers.textContent = value : productNumbers.textContent = 0;
   
    addPrice(value);
});


let addPrice = (value) => {
    
    let currentPrice;
    value > 0 ? currentPrice = price * value : currentPrice = 0;

    priceOfProduct.textContent = `$${currentPrice}`
}
