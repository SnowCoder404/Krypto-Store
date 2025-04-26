function coinFullTemplate(coinData, currency = "$") {
    return `<div class="coin" onclick="stopEventPropagation(event)">
                <div class="button-container">
                    <h2>${coinData.name}</h2>
                </div>
                <img class="big-image" src="${coinData.image}" alt="${coinData.name}">
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
                <div class="d_flex g_24" style="padding: 24px 0;">
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

                <div>
            </div>`;
}

function coinTemplate(coinData, currency = "$") {
    return `<div class="more-information" onclick="stopEventPropagation(event)">
                <img class="coins-image" onclick="moreInfo('${coinData.name}', '${currency}')" src="${coinData.image}" alt="${coinData.name}">            
                <h2 class="center">${coinData.name}</h2>      
                <span class="bold">${coinData.current_price.toFixed(2)}${currency}</span>
            </div>`;
}