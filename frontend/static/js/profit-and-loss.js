// Mock up data.
const profit_and_loss_mockData = {
  daily_profit: {
    labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
    data: [0, 12, 15,26, 32, 30, 35]
  }}



// Profit and Loss component functionality.
// Get the canvas context where the chart will be drawn
let profit_and_loss_ctx = document.getElementById("profitChart").getContext("2d");


// Initialize Chart.js line chart
let profit_chart = new Chart(profit_and_loss_ctx, {
  type: "line",

  
  data: {
    labels: profit_and_loss_mockData.daily_profit.labels,
    datasets: [{
      data: profit_and_loss_mockData.daily_profit.data,
      borderColor: "white",
      fill: false,
      tension: 0.3
    }]
  },


  options: {
    responsive: true,

    plugins: {
      tooltip: {
        mode: "index",
        intersect: false,
      },
    //   Hide the legend/key
      legend: {
        display:false
      }
    },

    scales: {
      x: { display: true },
      y: { display: true },

      x: {
        ticks: {
            color: "aliceblue",
            font: {
                size:9,
                weight: 100,
            },
      }
     },

      y: {
        ticks: {
                color: "aliceblue",
                font: {
                    size:9,
                    weight: 100,
                },
                maxTicksLimit: 5, // 👈 limits to about 5 markings
                callback: (val) => "$" + val.toLocaleString()
        },
        grid: {
                color: "rgba(255, 255, 255, 0.1)",
                drawBorder: false
        }
      }
    }
  }
});