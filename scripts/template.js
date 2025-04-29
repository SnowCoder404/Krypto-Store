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
                        <span>${coinData.current_price.toFixed(2)}${currency}</span>
                    </div>  
                    <div class="coin-price">
                        <span>Market cap:</span>
                        <span>${coinData.market_cap.toFixed(2)}${currency}</span>
                    </div>  
                    <div class="coin-price">
                        <span>Total supply:</span>
                        <span>${coinData.total_supply.toFixed(2)}${currency}</span>
                    </div>  
                    <div class="coin-price">
                        <span>ATH:</span>
                        <span>${coinData.ath.toFixed(2)}${currency}</span>
                    </div>  
                    <div class="coin-price">
                        <span>ATL:</span>
                        <span>${coinData.atl.toFixed(2)}${currency}</span>
                    </div>
                </div>
                <div class="d_flex_j_c g_24" style="padding: 24px 0;">
                    <div class="percent">
                        <span>Low 24H:</span>
                        <span>${coinData.low_24h.toFixed(2)}${currency}</span>
                    </div>  
                    <div class="percent">
                        <span>24H:</span>
                        <span>${coinData.price_change_percentage_24h.toFixed(2)}%</span>
                    </div> 
                    <div class="percent">
                        <span>High 24H:</span>
                        <span>${coinData.high_24h.toFixed(2)}${currency}</span>
                    </div>  
                </div>
                <div class="calculate-container">
                    <div class="d_flex_c g_6">
                        <input id="amount" onchange="calculatePrice(${coinData.current_price.toFixed(2)});" type="number" value="1">
                        <span class"f_s_22">${coinData.symbol.toLocaleUpperCase()}</span>
                        <span class="mobile-hide">=</span>
                    </div>
                    <div class="d_flex_c g_6">
                        <input id="coin-price" type="number" value="${coinData.current_price.toFixed(2)}">
                        <span class"f_s_22">${currency}</span>                    
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
                <span class="bold">${coinData.current_price.toFixed(2)}${currency}</span>
            </div>`;
}

function priceInfoTemplate(coinData, currency) {
    return `<div class="coin-price">
                <span>Price:</span>
                <span>${coinData.current_price.toFixed(2)}${currency}</span>
            </div>  
            <div class="coin-price">
                <span>Market cap:</span>
                <span>${coinData.market_cap.toFixed(2)}${currency}</span>
            </div>  
            <div class="coin-price">
                <span>Total supply:</span>
                <span>${coinData.total_supply.toFixed(2)}${currency}</span>
            </div>  
            <div class="coin-price">
                <span>ATH:</span>
                <span>${coinData.ath.toFixed(2)}${currency}</span>
            </div>  
            <div class="coin-price">
                <span>ATL:</span>
                <span>${coinData.atl.toFixed(2)}${currency}</span>
            </div>`;
}

function athInfoTemplate() {
    return `<canvas id="myChart"></canvas>`;
}

function moreInfoTemplate(coinData, currency) {
    return `<div class="coin-price">
                <span>Total Volume:</span>
                <span>${coinData.total_volume.toFixed(2)}${currency}</span>
            </div>
            <div class="coin-price">
                <span>Total Supply:</span>
                <span>${coinData.total_supply.toFixed(2)}${currency}</span>
            </div>
            <div class="coin-price">
                <span>Market cap:</span>
                <span>${coinData.market_cap.toFixed(2)}${currency}</span>
            </div>  
            <div class="coin-price">
                <span>Market cap change:</span>
                <span>${coinData.market_cap_change_24h.toFixed(2)}${currency}</span>
            </div>  
            <div class="coin-price">
                <span>Price:</span>
                <span>${coinData.current_price.toFixed(2)}${currency}</span>
            </div>`;
}