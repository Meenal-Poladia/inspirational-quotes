"use strict"
const quotation = document.querySelector(".quotation");
const newQuoteBtn = document.querySelector(".btn-new-quote");
const quoteContainer = document.querySelector(".quote-container");

const showButton = () => {
    newQuoteBtn.style.display = "block";
}

const displayQuote = () => {
      fetch(`https://secret-ocean-49799.herokuapp.com/https://inspiration.goprogram.ai/`)
        .then(response => {
            if(!response.ok) {
                throw new Error(`No quote to display.`)
            }
            return response.json()
        })
        .then(data => {
            const newData = ({...data});
           quotation.textContent = newData.quote;
           quoteContainer.classList.remove("hidden");
        })
        .catch(err => console.log(`${err}`))
}
displayQuote();

newQuoteBtn.addEventListener("click", displayQuote);