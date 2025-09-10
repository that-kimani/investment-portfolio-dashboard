// Mock up data.
const asset_allocation_mockData = {
  assets: {
    labels: ["MMF", "Bonds", "Stocks", "ETFs", "Cash"],
    values: [60 , 20 , 10 , 7, 3]
  }}


const asset_allocation_ctx = document.getElementById("asset-allocation-donut").getContext("2d");

new Chart(asset_allocation_ctx, {
  type: "doughnut",
  data: {
    labels: asset_allocation_mockData.assets.labels,
    datasets: [{
      data: asset_allocation_mockData.assets.values,
      backgroundColor: ["#4cafef", "#f4c542", "#8bc34a","#d38f30ff", "#ce262eff"], // custom colors
      borderWidth: 0
    }]
  },

  options: {
    responsive: true,
    maintainAspectRatio: false,

    layout: {
        padding: {
            top: 0,  // moves donut UP (negative = raise, positive = lower)
            bottom: 60,
            left: 0,
            right: 60
        },
        boxWidth:50,
    },

    cutout: "85%", // controls the size of the hole (donut thickness)
    radius: "70%",

    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
            color: "aliceblue",
            padding: 10,
            boxWidth: 14,
        }
      },
      
      tooltip: {
        callbacks: {
          label: (context) => {
            return `${context.label}: ${context.parsed}%`; // custom tooltip
          }
        }
      }
    }
  }
});
