const form = document.getElementById('conversion-form');
const sourceCurrencySelect = document.getElementById('source-currency');
const destinationCurrencySelect = document.getElementById('destination-currency');
const amountInput = document.getElementById('amount');
const convertButton = document.getElementById('convert-button');
const resultParagraph = document.getElementById('result');

const apiEndpoint = 'https://api.exchangerate-api.com/v4/latest/';

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const sourceCurrency = sourceCurrencySelect.value;
    const destinationCurrency = destinationCurrencySelect.value;
    const amount = amountInput.value;

    fetch(`${apiEndpoint}${sourceCurrency}`)
        .then((response) => response.json())
        .then((data) => {
            const exchangeRate = data.rates[destinationCurrency];
            const result = amount * exchangeRate;
            resultParagraph.textContent = `${amount} ${sourceCurrency} is equal to ${result} ${destinationCurrency}`;
        })
        .catch((error) => {
            console.error(error);
            resultParagraph.textContent = 'Error: Unable to retrieve exchange rate.';
        });
});