function createChart(xValues, yValues, currency, coinName) {
    const ctx = document.getElementById("myChart").getContext("2d");

    new Chart(ctx, {
        type: "line",
        data: {
            labels: xValues.map(value => `${currency}${value.toFixed(2)}`), 
            datasets: [{
                label: coinName,
                fill: false,
                borderColor: "rgba(0,255,0,1)", 
                borderWidth: 1,
                pointBackgroundColor: "rgba(0,255,0,1)",
                pointRadius: 3,
                data: yValues
            }]
        },
    });
}