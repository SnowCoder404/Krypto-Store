function coinFullTemplate(coinData, currency = "$") {
    return `<div class="coin">
                    <button onclick="logData()">X</button>
                    <h2>${coinData.name}</h2>            
                    <img class="big-image" src="${coinData.image}" alt="${coinData.name}">
                    <div class="coin-price">
                        <span>Price:</span>
                        <span>${coinData.current_price}${currency}</span>
                    </div>  
                    <div class="coin-price">
                        <span>Market cap:</span>
                        <span>${coinData.market_cap}${currency}</span>
                    </div>  
                    <div class="coin-price">
                        <span>ATH:</span>
                        <span>${coinData.ath}${currency}</span>
                    </div>  
                    <div class="coin-price">
                        <span>ATL:</span>
                        <span>${coinData.atl}${currency}</span>
                    </div>
                    <div class="percent">
                        <span>24H:</span>
                        <span>${coinData.price_change_percentage_24h}%</span>
                    </div>  
                </div>
            </div>`;
}

function coinTemplate(coinData, currency = "$") {
    return `<div class="more-information">
                <img onclick="moreInfo('${coinData.name}')" src="${coinData.image}" alt="${coinData.name}">            
                <h2>${coinData.name}</h2>      
                <span>${coinData.current_price}${currency}</span>
            </div>`;
}