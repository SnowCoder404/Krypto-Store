const API_URL = 'https://api.coingecko.com/api/v3/coins/markets?';
const coins = [ "bitcoin", "ethereum", "litecoin", "dogecoin", "stellar", "ripple", "monero", "dash", "tron", "tether", "cardano", "polkadot", "solana", "avalanche-2", "chainlink", "uniswap", "bitcoin-cash", "litecoin", "binancecoin" ];
const search = document.getElementById("search");
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
            currency = " CHF";
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

function currencyChangeTheOtherWay(currency) {
    if (currency === "usd" | currency === "$") {
        return currency = "$";
    } else if (currency === "eur" | currency === "€") {
        return currency = "€";
    } else if (currency === "chf" | currency === " CHF") {
        return currency = " CHF";
    }
}

function currencyChange(currency) {
    if (currency === "$") {
        return "usd";
    } else if (currency === "€") {
        return "eur";
    } else if (currency === " CHF") {
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
    }
}

function moreInfo(coinData, currency = "$", coinDataFull) {
    const container = document.getElementById('coin-container');
    coinTemplateData.filter((coin, index) => {
        if (coin.name === coinData) {
            container.innerHTML = coinFullTemplate(coin, currency, coinDataFull, index);
        };
    });
    document.querySelector("body").onclick = () => {
        logData(currencyChange(currency));
    };
}

function nextInfo(index, currency) {
    const container = document.getElementById('coin-container');;
    if (index >= coinTemplateData.length - 1) {
        index = 0;
    } else {
        index++;
    }
    container.innerHTML = coinFullTemplate(coinTemplateData[index], currency, coinTemplateData, index);
}
 
function lastInfo(index, currency) {
    const container = document.getElementById('coin-container');
    if (index <= 0) {
        index = coinTemplateData.length - 1;
    } else {
        index = index - 1;
    }
    container.innerHTML = coinFullTemplate(coinTemplateData[index], currency, coinTemplateData, index);
}

function calculatePrice(price)  {
    let coinPrice = document.getElementById("coin-price"); 
    let amount = document.getElementById("amount").value;
    coinPrice.innerText = (amount * price).toFixed(2);
}

function stopEventPropagation(event) {
    event.stopPropagation();
}

function priceInfoShow(index, currency) {
    const priceInfo = document.getElementById("more-info");
    priceInfo.innerHTML = priceInfoTemplate(coinTemplateData[index], currency);
    document.querySelector(".calculate-container").style = "";
}

function athInfoShow(index, currency) {
    const priceInfo = document.getElementById("more-info");
    priceInfo.innerHTML = athInfoTemplate(coinTemplateData[index], currency);
    const [xValues, yValues] = loadCartData(index);
    loadCartData(index);
    createChart(xValues, yValues, currency, coinTemplateData[index].symbol.toUpperCase());
    document.querySelector(".calculate-container").style = "display: none";
}

function loadCartData(index) {
    const xValues = [];
    const yValues = [];
    pushData(xValues, index);
    pushData(yValues, index)
    return [xValues, yValues];
}

function pushData(values, index) {
    values.push(coinTemplateData[index].atl);
    values.push(coinTemplateData[index].ath);
    values.push(coinTemplateData[index].low_24h);
    values.push(coinTemplateData[index].high_24h);
    values.push(coinTemplateData[index].current_price);
};

function formatBigNumbers(number) {
    if (number > 1000 | number < -1000) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    } else {
        return number;
    }
}

function moreInfoShow(index, currency) {
    const priceInfo = document.getElementById("more-info");
    priceInfo.innerHTML = moreInfoTemplate(coinTemplateData[index], currency);
    document.querySelector(".calculate-container").style = "";
}

function onSubmit() {
    let coinContainer = document.getElementById("coin-container");
    let currency = document.querySelector(".active").id;
    coinContainer.innerHTML = "";
    const filteredCoins = coinTemplateData.filter((coin, ) => {        
       return coin.id.includes(search.value);
    });
    filteredCoins.forEach(coin => {
        coinContainer.innerHTML += coinTemplate(coin, currency);
    });
}

search.addEventListener("onChange", () => {
    onSubmit();
});