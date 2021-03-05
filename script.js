const url =
  "http://data.fixer.io/api/latest?access_key=e04b439a466cdeba023062a660b20917";

const selectCurrency = document.querySelector("#currency-type");
const selectCurrency2 = document.querySelector("#currency-type-2");
const inputOne = document.querySelector('#input-1');
const inputTwo = document.querySelector('#input-2');
const select = document.querySelector('select');

fetch(url)
  .then((res) => res.json())
  .then((res) => {
    let keys = Object.keys(res.rates);
    let values = Object.values(res.rates);
    let rates = res.rates;

    
    
    keys.map(key=>{
        selectCurrency.innerHTML += `<option value=${key}>${key}</option>`
        selectCurrency2.innerHTML += `<option value=${key}>${key}</option>`
    });

    inputOne.addEventListener('keyup',(e)=>{
        inputTwo.value = inputOne.value * (rates[selectCurrency2.value]/ rates[selectCurrency.value]);
        
        
    })
    inputTwo.addEventListener('keyup',(e)=>{
        inputOne.value = inputTwo.value * (rates[selectCurrency.value]/ rates[selectCurrency2.value]);
        
    })
    



    
  });
