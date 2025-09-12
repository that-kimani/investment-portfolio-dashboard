// === Mock Data (Simulating API Response) ===
const mockNews = [
  {
    headline: "Apple Unveils New iPhone 15 Pro Max with AI Features",
    source: "TechCrunch",
    url: "https://example.com/news1",
    timeAgo: "2h ago",
  },
  {
    headline: "Tesla Reports Record Deliveries in Q3",
    source: "Bloomberg",
    url: "https://example.com/news2",
    timeAgo: "5h ago",
  },
  {
    headline: "Ethereum Upgrade Slashes Gas Fees by 30%",
    source: "CoinDesk",
    url: "https://example.com/news3",
    timeAgo: "8h ago",
  },
  {
    headline: "Kenya Shilling Gains Against Dollar After CBK Intervention",
    source: "Business Daily",
    url: "https://example.com/news4",
    timeAgo: "12h ago",
  },
];


// === DOM Manipulation ===
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("news-container");

  // Simulate loading delay
  setTimeout(() => {
    container.innerHTML = ""; // clear loading message if any

    mockNews.forEach((item) => {
      const newsDiv = document.createElement("a");
      newsDiv.classList.add("news-item");
      newsDiv.href = item.url;
      newsDiv.target = "_blank";
      newsDiv.rel = "noopener noreferrer";

      // Build inner HTML
      newsDiv.innerHTML = `
        <p class="news-headline">${item.headline}</p>
        <div class="news-meta">
          <span>${item.source}</span>
          <span>${item.timeAgo}</span>
        </div>
      `;

      container.appendChild(newsDiv);
    });
  }, 500);
});
