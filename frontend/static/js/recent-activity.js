// === Mock Data ===
const mockActivity = [
  { type: "BUY", asset: "AAPL", price: 195, timeAgo: "1h ago" },
  { type: "SELL", asset: "TSLA", price: 250, timeAgo: "3h ago" },
  { type: "BUY", asset: "ETH", price: 1620, timeAgo: "6h ago" },
  { type: "BUY", asset: "GOOGL", price: 2800, timeAgo: "1d ago" },
];

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("activity-container");

  setTimeout(() => {
    container.innerHTML = "";

    // Add header row
    const header = document.createElement("div");
    header.classList.add("activity-item");
    header.innerHTML = `
      <div class="activity-column">Asset</div>
      <div class="activity-column">Type</div>
      <div class="activity-column activity-price">Price</div>
      <div class="activity-column activity-time">Time</div>
    `;
    container.appendChild(header);

    // Add activity rows
    mockActivity.forEach((item) => {
      const row = document.createElement("div");
      row.classList.add("activity-item");

      const typeClass = item.type === "BUY" ? "activity-buy" : "activity-sell";

      row.innerHTML = `
        <div class="activity-column">${item.asset}</div>
        <div class="activity-column ${typeClass}">${item.type}</div>
        <div class="activity-column activity-price">$${item.price}</div>
        <div class="activity-column activity-time">${item.timeAgo}</div>
      `;

      container.appendChild(row);
    });
  }, 500);
});
