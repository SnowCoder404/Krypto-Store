const API_URL = 'https://api.coingecko.com/api/v3/coins/markets?';
const coins = [ "bitcoin", "ethereum", "litecoin", "dogecoin", "stellar", "ripple", "monero", "dash", "tron", "tether", "cardano", "polkadot", "solana", "avalanche-2", "chainlink", "uniswap", "bitcoin-cash", "litecoin", "binancecoin" ];
let coinTemplateData = [];

async function logData(currency = "usd") {
    const container = document.getElementById('coin-container');
    container.innerHTML = "";
    coinTemplateData = await loadData(coins, currency);
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

function moreInfo(coinData) {
    const container = document.getElementById('coin-container');
    coinTemplateData.filter(coin => {
        if (coin.name === coinData) {
            container.innerHTML = coinFullTemplate(coin);
        };
    });
}