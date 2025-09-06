const mockData = {
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


let ctx = document.getElementById("portfolioChart").getContext("2d");

let chart = new Chart(ctx, {
  type: "line",
  data: {
    labels: mockData.daily.labels,
    datasets: [{
      label: "Portfolio Balance",
      data: mockData.daily.data,
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
      }
    },
    scales: {
      x: { display: true },
      y: { display: true }
    }
  }
});

function updateChart(view) {
  chart.data.labels = mockData[view].labels;
  chart.data.datasets[0].data = mockData[view].data;
  chart.update();
}
