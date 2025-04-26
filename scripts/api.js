const API_URL = 'https://api.coingecko.com/api/v3/coins/markets?';
const coins = [ "bitcoin", "ethereum", "litecoin", "dogecoin", "stellar", "ripple", "monero", "dash", "tron", "tether", "cardano", "polkadot", "solana", "avalanche-2", "chainlink", "uniswap", "bitcoin-cash", "litecoin", "binancecoin" ];
let coinTemplateData = [];

async function logData(currency = "usd") {
    const activeCurrency = document.querySelector(".active").id;
    if (coinTemplateData.length <= 0 || activeCurrency != currency) {
        coinTemplateData = await loadData(coins, currency);
        setCurrencyActive(currency);
    }
    searchInLocalData(currency);
}

function searchInLocalData(currency = "usd") {
    const container = document.getElementById('coin-container');
    container.innerHTML = "";
    coinTemplateData.forEach(coin => {
        if (currency === "usd") {
            currency = "$";
        } else if (currency === "eur") {
            currency = "€";
        } else if (currency === "chf") {
            currency = "CHF";
        }
        container.innerHTML += coinTemplate(coin, currency);
    });
}

function setCurrencyActive(currency) {
    document.querySelectorAll(".active").forEach(element => {
        element.classList.remove("active");
    });
    document.getElementById(currency).classList.add("active");
}

function currencyChange(currency) {
    if (currency === "$") {
        return "usd";
    } else if (currency === "€") {
        return "eur";
    } else if (currency === "CHF") {
        return "chf";
    }    
}

async function loadData(coin, currency = "usd") {
    try {
        const response = await fetch(API_URL + "vs_currency=" + currency + "&ids=" + coin);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

function moreInfo(coinData, currency = "$") {
    const container = document.getElementById('coin-container');
    coinTemplateData.filter(coin => {
        if (coin.name === coinData) {
            container.innerHTML = coinFullTemplate(coin, currency);
        };
    });
}

function calculatePrice(price)  {
    let coinPrice = document.getElementById("coin-price"); 
    let amount = document.getElementById("amount").value;
    coinPrice.value = (amount * price).toFixed(2);
}

function stopEventPropagation(event) {
    event.stopPropagation();
}