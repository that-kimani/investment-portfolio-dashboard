// Mock up data.
const portfolio_overview_mockData = {
  daily: {
    labels: ["2025-09-01", "2025-09-02", "2025-09-03", "2025-09-04", "2025-09-05", "2025-09-08", "2025-09-09"],
    data: [100000, 100012, 100015, 100026, 100032, 100030, 100035],
  },
  weekly: {
    labels: ["Aug Wk4", "Sep Wk1", "Sep Wk2", "Sep Wk3", "Sep Wk4"],
    data: [99500, 100000, 99980, 100120, 100092],
  },
  monthly: {
    labels: ["Jun", "Jul", "Aug", "Sep"],
    data: [98000, 99050, 100125, 100095],
  },
  yearly: {
    labels: ["2021", "2022", "2023", "2024", "2025"],
    data: [92000, 94000, 96000, 97900, 101500],
  },
  all: {
    labels: ["2021-Q1", "2021-Q4", "2022-Q3", "2023-Q2", "2024-Q1", "2024-Q4", "2025-Q3"],
    data: [90000, 93000, 94500, 96500, 97500, 99400, 101200],
  }
};



// Chart settings and functionality.
// Get the canvas context where the chart will be drawn
let portfolio_overview_ctx = document.getElementById("portfolioChart").getContext("2d");


// Initialize Chart.js line chart
let chart = new Chart(portfolio_overview_ctx, {
  type: "line",

  
  data: {
    labels: portfolio_overview_mockData.daily.labels,
    datasets: [{
      label: "Portfolio Balance",
      data: portfolio_overview_mockData.daily.data,
      borderColor: "white",
      fill: false,
      tension: 0.3
    }]
  },


  options: {
    responsive: true,
    maintainAspectratio: false,


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
                color: "rgba(255, 255, 255, 0.14)",
                drawBorder: false
        }
      }
    }
  }
});


// Track portfolio value and display value and day's profit.
// Get HTML elements
const portfolioValueEl = document.querySelector(".portfolio-overview h1");
const profitEl = document.querySelector(".portfolio-overview p");

// Function to update portfolio overview based on selected view
function updatePortfolioOverview(view) {
  const balances = portfolio_overview_mockData[view].data;
  const lastBalance = balances[balances.length - 1];
  const prevBalance = balances[balances.length - 2] || lastBalance; // fallback for safety

  // Calculate profit (difference)
  const profit = lastBalance - prevBalance;

  // Update HTML
  portfolioValueEl.textContent = `$${lastBalance.toLocaleString()}`;
  profitEl.textContent = `Your ${view} profit is $${profit.toLocaleString()}`;
}

// Run once at page load (default = daily)
updatePortfolioOverview("daily");

// Call this whenever chart updates
function updateChart(view) {
  chart.data.labels = portfolio_overview_mockData[view].labels;
  chart.data.datasets[0].data = portfolio_overview_mockData[view].data;
  chart.update();

  // also update overview text
  updatePortfolioOverview(view);
}
