function coinFullTemplate(coinData, currency = "$", coinDataFull, index) {
    return `<div class="coin" onclick="stopEventPropagation(event)">
                <div class="button-container">
                    <h2>${coinData.name}</h2>
                </div>
                <img class="big-image" src="${coinData.image}" alt="${coinData.name}">
                <div class="d_flex menu-bar">
                    <div onclick="priceInfoShow('${index}', '${currency}');">Price info</div> 
                    <div onclick="athInfoShow('${index}', '${currency}');">ATH/ATL</div> 
                    <div onclick="moreInfoShow('${index}', '${currency}');">More info</div>    
                </div>
                <div id="more-info">
                    <div class="coin-price">
                        <span>Price:</span>
                        <span>${formatBigNumbers(coinData.current_price.toFixed(2))}${currencyChangeTheOtherWay(currency)}</span>
                    </div>  
                    <div class="coin-price">
                        <span>Market cap:</span>
                        <span>${formatBigNumbers(coinData.market_cap.toFixed(2))}${currencyChangeTheOtherWay(currency)}</span>
                    </div>  
                    <div class="coin-price">
                        <span>Total supply:</span>
                        <span>${formatBigNumbers(coinData.total_supply.toFixed(2))}${currencyChangeTheOtherWay(currency)}</span>
                    </div>  
                    <div class="coin-price">
                        <span>ATH:</span>
                        <span>${formatBigNumbers(coinData.ath.toFixed(2))}${currencyChangeTheOtherWay(currency)}</span>
                    </div>  
                    <div class="coin-price">
                        <span>ATL:</span>
                        <span>${formatBigNumbers(coinData.atl.toFixed(2))}${currencyChangeTheOtherWay(currency)}</span>
                    </div>
                </div>
                <div class="d_flex_j_c g_24" style="padding: 24px 0;">
                    <div class="percent">
                        <span>Low 24H:</span>
                        <span>${formatBigNumbers(coinData.low_24h.toFixed(2))}${currencyChangeTheOtherWay(currency)}</span>
                    </div>  
                    <div class="percent">
                        <span>24H:</span>
                        <span>${formatBigNumbers(coinData.price_change_percentage_24h.toFixed(2))}%</span>
                    </div> 
                    <div class="percent">
                        <span>High 24H:</span>
                        <span>${formatBigNumbers(coinData.high_24h.toFixed(2))}${currencyChangeTheOtherWay(currency)}</span>
                    </div>  
                </div>
                <div class="calculate-container">
                    <div class="d_flex_c g_6">
                        <input id="amount" onchange="calculatePrice(${coinData.current_price.toFixed(2)});" type="number" value="1">
                        <span class"f_s_22">${coinData.symbol.toLocaleUpperCase()}</span>
                        <span class="mobile-hide">=</span>
                    </div>
                    <div class="d_flex_c g_6 coin-price-container">
                        <span id="coin-price">${coinData.current_price.toFixed(2)}</span>
                        <span class"f_s_22">${currencyChangeTheOtherWay(currency)}</span>                    
                    </div>
                </div>
                <div class="button-div">
                    <button onclick="lastInfo('${index}', '${currency}')"><</button>
                    <button onclick="nextInfo('${index}', '${currency}')">></button>
                </div>
            </div>`;
}

function coinTemplate(coinData, currency = "$") {
    return `<div class="more-information" onclick="stopEventPropagation(event)">
                <img class="coins-image" onclick="moreInfo('${coinData.name}', '${currency}', '${coinData}')" src="${coinData.image}" alt="${coinData.name}">            
                <h2 class="center">${coinData.name}</h2>      
                <span class="bold">${formatBigNumbers(coinData.current_price.toFixed(2))}${currencyChangeTheOtherWay(currency)}</span>
            </div>`;
}

function priceInfoTemplate(coinData, currency) {
    return `<div class="coin-price">
                <span>Price:</span>
                <span>${formatBigNumbers(coinData.current_price.toFixed(2))}${currencyChangeTheOtherWay(currency)}</span>
            </div>  
            <div class="coin-price">
                <span>Market cap:</span>
                <span>${formatBigNumbers(coinData.market_cap.toFixed(2))}${currencyChangeTheOtherWay(currency)}</span>
            </div>  
            <div class="coin-price">
                <span>Total supply:</span>
                <span>${formatBigNumbers(coinData.total_supply.toFixed(2))}${currencyChangeTheOtherWay(currency)}</span>
            </div>  
            <div class="coin-price">
                <span>ATH:</span>
                <span>${formatBigNumbers(coinData.ath.toFixed(2))}${currencyChangeTheOtherWay(currency)}</span>
            </div>  
            <div class="coin-price">
                <span>ATL:</span>
                <span>${formatBigNumbers(coinData.atl.toFixed(2))}${currencyChangeTheOtherWay(currency)}</span>
            </div>`;
}

function athInfoTemplate() {
    return `<canvas id="myChart"></canvas>`;
}

function moreInfoTemplate(coinData, currency) {
    return `<div class="coin-price">
                <span>Total Volume:</span>
                <span>${formatBigNumbers(coinData.total_volume.toFixed(2))}${currencyChangeTheOtherWay(currency)}</span>
            </div>
            <div class="coin-price">
                <span>Total Supply:</span>
                <span>${formatBigNumbers(coinData.total_supply.toFixed(2))}${currencyChangeTheOtherWay(currency)}</span>
            </div>
            <div class="coin-price">
                <span>Market cap:</span>
                <span>${formatBigNumbers(coinData.market_cap.toFixed(2))}${currencyChangeTheOtherWay(currency)}</span>
            </div>  
            <div class="coin-price">
                <span>Market cap change:</span>
                <span>${formatBigNumbers(coinData.market_cap_change_24h.toFixed(2))}${currencyChangeTheOtherWay(currency)}</span>
            </div>  
            <div class="coin-price">
                <span>Price:</span>
                <span>${formatBigNumbers(coinData.current_price.toFixed(2))}${currencyChangeTheOtherWay(currency)}</span>
            </div>`;
}