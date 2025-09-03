import React from "react";
import x8479691 from "./847969-1.png";
import line1 from "./line-1.svg";
import line2 from "./line-2.svg";
import line3 from "./line-3.svg";
import line4 from "./line-4.svg";
import line52 from "./line-5-2.svg";
import line5 from "./line-5.svg";
import line62 from "./line-6-2.svg";
import line6 from "./line-6.svg";
import line72 from "./line-7-2.svg";
import line7 from "./line-7.svg";
import line82 from "./line-8-2.svg";
import line8 from "./line-8.svg";
import line9 from "./line-9.svg";
import line10 from "./line-10.svg";
import rectangle23 from "./rectangle-2-3.svg";
import rectangle2 from "./rectangle-2.svg";
import rectangle3 from "./rectangle-3.svg";
import rectangle10 from "./rectangle-10.svg";
import vector1 from "./vector-1.svg";
import vector3 from "./vector-3.svg";

const navigationItems = [
  { name: "Dashboard", active: true },
  { name: "Transactions", active: false },
  { name: "Wallet", active: false },
  { name: "Settings", active: false },
];

const assetData = [
  {
    name: "Apple Inc.",
    ticker: "AAPL",
    price: "$200.50",
    change: "+0.56%",
    changeType: "positive",
    holding: "100",
    value: "$19,050",
  },
  {
    name: "Facebook",
    ticker: "META",
    price: "$180.80",
    change: "-0.66%",
    changeType: "negative",
    holding: "100",
    value: "$19,050",
  },
  {
    name: "Google",
    ticker: "GOOG",
    price: "$2700.50",
    change: "+0.55%",
    changeType: "positive",
    holding: "10",
    value: "$27,000",
  },
  {
    name: "NVIDIA Corp",
    ticker: "NVDA",
    price: "$400.50",
    change: "-0.32%",
    changeType: "negative",
    holding: "50",
    value: "$19,050",
  },
];

const transactionData = [
  {
    ticker: "AAPL",
    type: "Buy",
    quantity: "10",
    price: "$200.50",
    totalValue: "$2000.00",
    dateTime: "Today 12:20",
  },
  {
    ticker: "GOOG",
    type: "Sell",
    quantity: "10",
    price: "$418.00",
    totalValue: "$6270.00",
    dateTime: "Yest 12:00",
  },
  {
    ticker: "TSLA",
    type: "Buy",
    quantity: "2",
    price: "$4500.50",
    totalValue: "$9000.00",
    dateTime: "2025-05-08",
  },
  {
    ticker: "MSFT",
    type: "Sell",
    quantity: "10",
    price: "$2740.00",
    totalValue: "$5480.00",
    dateTime: "2025-06-12",
  },
];

const newsData = [
  {
    source: "Bloomberg",
    headline: "Tech Giants Lead Market Surge After Strong Earnings Reports",
    description:
      "Major tech companies like Apple and Microsoft exceeded earnings expectations driving a significant market rally. Inves",
  },
  {
    source: "CoinDesk",
    headline: "Bitcoin Volatility Continues Amid Regulatory Uncertainty",
    description:
      "Bitcoin's price experienced another sharp swing as regulatory concerns in several countries intensified. Analytics are advising.",
  },
  {
    source: "Bloomberg",
    headline: "Tech Giants Lead Market Surge After Strong Earnings Reports",
    description:
      "Major tech companies like Apple and Microsoft exceeded earnings expectations driving a significant market rally. Inves",
  },
  {
    source: "Bloomberg",
    headline: "Record Investment in Renewable Energy Sector",
    description: "Major tech companies like Apple and Microsoft exceeded",
  },
];

const allocationData = [
  { label: "Stocks", color: "#d9d9d9" },
  { label: "Cryptocurrency", color: "#d9d9d9" },
  { label: "Bonds", color: "#d9d9d9" },
  { label: "Real Estate", color: "#d9d9d9" },
  { label: "Cash", color: "#d9d9d9" },
];

const chartYAxisLabels = ["8k", "6k", "4k", "2k", "0k"];
const chartXAxisLabels = [
  "Aug 26",
  "Aug 27",
  "Aug 28",
  "Aug 29",
  "Aug 30",
  "Aug 31",
];
const timeFrameOptions = ["1D", "1W", "1M", "1Y", "All"];

export const Frame = () => {
  return (
    <div className="bg-black grid justify-items-center [align-items:start] w-screen">
      <div className="bg-black w-[4433px] h-[3449px] relative">
        {/* Navigation Header */}
        <nav
          className="absolute w-[1449px] h-[161px] top-[98px] left-[1543px]"
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="absolute w-[1449px] h-40 top-0 left-0 bg-[#ffffff26] rounded-[50px] opacity-80" />

          <img
            className="absolute w-[357px] h-[161px] top-0 left-0"
            alt=""
            src={rectangle10}
          />

          {navigationItems.map((item, index) => (
            <button
              key={item.name}
              className={`absolute top-[42px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[56px] tracking-[0] leading-[normal] ${
                index === 0
                  ? "w-[321px] left-[30px]"
                  : index === 1
                    ? "w-[365px] left-[420px]"
                    : index === 2
                      ? "w-[365px] left-[870px]"
                      : "w-56 left-[1151px]"
              }`}
              aria-current={item.active ? "page" : undefined}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Portfolio Value Chart Section */}
        <section
          className="absolute w-[2211px] h-[1077px] top-[364px] left-[179px] bg-[url(/rectangle-1.svg)] bg-[100%_100%]"
          aria-labelledby="portfolio-heading"
        >
          <header className="absolute w-[1026px] h-[268px] top-[84px] left-[95px]">
            <h1
              id="portfolio-heading"
              className="absolute w-[872px] top-0 left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[46px] tracking-[0] leading-[normal]"
            >
              Portfolio Value
            </h1>

            <p className="absolute w-[1026px] top-[183px] left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-transparent text-4xl tracking-[0] leading-[normal]">
              <span className="text-white">Your monthly profit is </span>
              <span className="text-[#06a500]">+$5,200</span>
            </p>

            <div className="absolute w-[872px] top-[81px] left-3.5 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[62px] tracking-[0] leading-[normal]">
              $1,250,500
            </div>

            <div className="absolute w-[155px] h-[66px] top-[170px] left-[534px] bg-[#06a000] rounded-xl opacity-50" />

            <div className="w-[121px] top-[182px] left-[551px] text-[32px] whitespace-nowrap absolute [font-family:'Inter-Regular',Helvetica] font-normal text-white tracking-[0] leading-[normal]">
              +0.42%
            </div>
          </header>

          {/* Chart Area */}
          <div className="absolute w-[1968px] h-[444px] top-[414px] left-28">
            {chartYAxisLabels.map((label, index) => (
              <div
                key={label}
                className={`absolute w-[152px] left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-white text-3xl tracking-[0] leading-[normal] ${
                  index === 0
                    ? "top-0"
                    : index === 1
                      ? "top-[119px]"
                      : index === 2
                        ? "top-60"
                        : "top-[359px]"
                }`}
              >
                {label}
              </div>
            ))}

            <img
              className="absolute w-[1865px] h-[368px] top-[60px] left-[104px]"
              alt="Portfolio performance chart"
              src={vector1}
            />
          </div>

          <div className="absolute w-[351px] h-[140px] top-[894px] left-28">
            <div className="absolute w-[152px] top-0 left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-white text-3xl tracking-[0] leading-[normal]">
              0k
            </div>

            <div className="w-[210px] top-[55px] left-[141px] absolute [font-family:'Inter-Regular',Helvetica] font-normal text-white text-3xl tracking-[0] leading-[normal]">
              Aug 26
            </div>
          </div>

          {chartXAxisLabels.slice(4).map((label, index) => (
            <div
              key={label}
              className={`absolute [font-family:'Inter-Regular',Helvetica] font-normal text-white text-3xl tracking-[0] leading-[normal] ${
                index === 0
                  ? "w-[205px] top-[948px] left-[1577px]"
                  : index === 1
                    ? "w-[219px] top-[949px] left-[1910px]"
                    : ""
              }`}
            >
              {label}
            </div>
          ))}

          {chartXAxisLabels.slice(1, 4).map((label, index) => (
            <div
              key={label}
              className={`absolute [font-family:'Inter-Regular',Helvetica] font-normal text-white text-3xl tracking-[0] leading-[normal] ${
                index === 0
                  ? "w-[202px] top-[949px] left-[1247px]"
                  : index === 1
                    ? "w-[206px] top-[949px] left-[915px]"
                    : "w-[222px] top-[949px] left-[584px]"
              }`}
            >
              {label}
            </div>
          ))}

          {/* Time Frame Selector */}
          <div
            className="absolute w-[687px] h-[95px] top-[78px] left-[1449px] rounded-[50px]"
            role="tablist"
            aria-label="Chart time frame"
          >
            {timeFrameOptions.map((option, index) => (
              <button
                key={option}
                role="tab"
                aria-selected={option === "1M"}
                className={`absolute top-6 [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[34px] tracking-[0] leading-[normal] ${
                  index === 0
                    ? "w-[99px] top-[27px] left-[53px]"
                    : index === 1
                      ? "w-[103px] left-[170px]"
                      : index === 2
                        ? "w-[103px] left-[303px]"
                        : index === 3
                          ? "w-[101px] left-[440px]"
                          : "w-[101px] top-[23px] left-[558px]"
                }`}
              >
                {option}
              </button>
            ))}

            <div className="absolute w-[687px] h-[95px] top-0 left-0 rounded-[50px] border-2 border-solid border-white opacity-30" />
            <div className="absolute w-[100px] h-[94px] top-0 left-[277px] bg-[#ffffff80] rounded-[58px] opacity-50" />
          </div>
        </section>

        {/* Asset Performance Section */}
        <section
          className="absolute w-[1766px] h-[1077px] top-[364px] left-[2513px] bg-[url(/image.svg)] bg-[100%_100%]"
          aria-labelledby="asset-performance-heading"
        >
          <h2
            id="asset-performance-heading"
            className="w-[589px] top-[35px] left-[75px] text-[46px] absolute [font-family:'Inter-Regular',Helvetica] font-normal text-white tracking-[0] leading-[normal]"
          >
            Asset Performance
          </h2>

          {/* Table Headers */}
          <div className="absolute w-[629px] h-[69px] top-[175px] left-[111px]">
            <div className="w-[629px] top-0 left-0 text-4xl absolute [font-family:'Inter-Regular',Helvetica] font-normal text-white tracking-[0] leading-[normal]">
              Name/Ticker
            </div>

            <div className="absolute w-[158px] top-0 left-[443px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-4xl tracking-[0] leading-[normal]">
              Price
            </div>
          </div>

          <div className="absolute w-[213px] top-[175px] left-[804px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-4xl tracking-[0] leading-[normal]">
            Change
          </div>

          <div className="absolute w-[212px] top-[175px] left-[1060px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-4xl tracking-[0] leading-[normal]">
            Holding
          </div>

          <div className="absolute w-[372px] top-[175px] left-[1283px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-4xl tracking-[0] leading-[normal]">
            Value of Holding
          </div>

          {/* Asset Data Rows */}
          {assetData.map((asset, index) => {
            const topPositions = [284, 458, 639, 821];
            const priceTopPositions = [299, 480, 645, 841];
            const holdingTopPositions = [304, 480, 645, 837];
            const valueTopPositions = [299, 480, 645, 841];
            const changeTopPositions = [304, 479, 646, 842];

            return (
              <div key={asset.ticker}>
                {/* Company Name and Ticker */}
                <div
                  className={`absolute w-[258px] left-[195px] ${index === 0 ? "h-[102px] top-[284px]" : index === 2 ? "h-[101px] top-[639px]" : index === 3 ? "h-[101px] top-[821px]" : ""}`}
                >
                  {index !== 1 && (
                    <>
                      <div className="absolute w-[258px] top-0 left-0 [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[32px] tracking-[0] leading-[normal]">
                        {asset.name}
                      </div>
                      <div
                        className={`absolute left-0.5 [font-family:'Inter-Light',Helvetica] font-light text-white text-[28px] tracking-[0] leading-[normal] ${index === 0 ? "w-[107px] top-[59px]" : index === 2 ? "w-[107px] top-[59px]" : "w-[107px] top-[59px] left-[5px]"}`}
                      >
                        {asset.ticker}
                      </div>
                    </>
                  )}
                </div>

                {/* Facebook special case */}
                {index === 1 && (
                  <>
                    <div className="absolute w-[258px] top-[458px] left-[195px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[32px] tracking-[0] leading-[normal]">
                      {asset.name}
                    </div>
                    <div className="absolute w-[107px] top-[517px] left-[197px] [font-family:'Inter-Light',Helvetica] font-light text-white text-[28px] tracking-[0] leading-[normal]">
                      {asset.ticker}
                    </div>
                  </>
                )}

                {/* Price */}
                <div
                  className={`absolute w-[227px] left-[513px] [font-family:'Inter-Regular',Helvetica] font-normal text-[40px] text-white tracking-[0] leading-[normal] ${
                    index === 0
                      ? "top-[299px]"
                      : index === 1
                        ? "top-[480px]"
                        : index === 2
                          ? "top-[645px] w-[259px] left-[497px]"
                          : "top-[841px]"
                  }`}
                >
                  {asset.price}
                </div>

                {/* Holdings */}
                <div
                  className={`absolute [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[40px] tracking-[0] leading-[normal] ${
                    index === 0
                      ? "w-[109px] top-[304px] left-[1098px]"
                      : index === 1
                        ? "w-[108px] top-[480px] left-[1099px]"
                        : index === 2
                          ? "w-[88px] top-[645px] left-[1112px]"
                          : "w-[66px] top-[837px] left-[1112px]"
                  }`}
                >
                  {asset.holding}
                </div>

                {/* Value */}
                <div
                  className={`absolute w-[227px] left-[1371px] [font-family:'Inter-Regular',Helvetica] font-normal text-[40px] text-white tracking-[0] leading-[normal] ${
                    index === 0
                      ? "top-[299px]"
                      : index === 1
                        ? "top-[480px]"
                        : index === 2
                          ? "top-[645px] w-[259px]"
                          : "top-[841px]"
                  }`}
                >
                  {asset.value}
                </div>

                {/* Change Indicator */}
                <div
                  className={`absolute left-[813px] ${
                    index === 0
                      ? "w-[149px] h-[54px] top-[304px]"
                      : index === 1
                        ? "w-[150px] h-[54px] top-[479px]"
                        : index === 2
                          ? "w-[151px] h-[54px] top-[646px] left-[812px]"
                          : "w-[156px] h-[54px] top-[842px] left-[812px]"
                  }`}
                >
                  <div
                    className={`absolute w-[123px] h-[54px] top-0 left-0 rounded-[10px] opacity-50 ${
                      asset.changeType === "positive"
                        ? "bg-[#06a000]"
                        : "bg-[#a00000]"
                    } ${index === 2 || index === 3 ? "w-[124px]" : ""}`}
                  />
                  <div
                    className={`absolute [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[26px] tracking-[0] leading-[normal] ${
                      index === 0
                        ? "w-[137px] top-2.5 left-3"
                        : index === 1
                          ? "w-[137px] top-[11px] left-[13px]"
                          : index === 2
                            ? "w-[138px] top-[11px] left-[13px]"
                            : "w-[137px] top-[9px] left-[19px]"
                    }`}
                  >
                    {asset.change}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Table Divider Lines */}
          <img
            className="w-[1580px] top-[252px] left-[75px] absolute h-px object-cover"
            alt=""
            src={line1}
          />
          <img
            className="w-[1579px] top-[416px] left-[75px] absolute h-px object-cover"
            alt=""
            src={line2}
          />
          <img
            className="w-[1579px] top-[603px] left-[75px] absolute h-px object-cover"
            alt=""
            src={line3}
          />
          <img
            className="w-[1579px] top-[791px] left-[75px] absolute h-px object-cover"
            alt=""
            src={line4}
          />
          <img
            className="w-[1580px] top-[964px] left-[75px] absolute h-px object-cover"
            alt=""
            src={line5}
          />
        </section>

        {/* Transactions Section */}
        <section
          className="absolute w-[2201px] h-[858px] top-[2411px] left-[179px] bg-[url(/rectangle-2-2.svg)] bg-[100%_100%]"
          aria-labelledby="transactions-heading"
        >
          <h2
            id="transactions-heading"
            className="absolute w-[734px] top-[65px] left-[99px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[46px] tracking-[0] leading-[normal]"
          >
            Transactions
          </h2>

          {/* Transaction Table Headers */}
          <div className="absolute w-[1971px] h-[68px] top-[195px] left-[99px]">
            <div className="absolute w-[898px] h-[57px] top-0 left-11">
              <div className="absolute w-[198px] top-0 left-[393px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-4xl tracking-[0] leading-[normal]">
                Type
              </div>

              <div className="absolute w-[265px] top-0 left-[633px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-4xl tracking-[0] leading-[normal]">
                Quantity
              </div>

              <div className="w-[785px] top-[3px] left-0 text-4xl absolute [font-family:'Inter-Regular',Helvetica] font-normal text-white tracking-[0] leading-[normal]">
                Asset/Ticker
              </div>
            </div>

            <div className="absolute w-[1971px] h-[68px] top-0 left-0">
              <div className="absolute w-[153px] top-0 left-[1047px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-4xl tracking-[0] leading-[normal]">
                Price
              </div>

              <div className="w-[188px] top-px left-[1330px] text-4xl absolute [font-family:'Inter-Regular',Helvetica] font-normal text-white tracking-[0] leading-[normal]">
                Total Value
              </div>

              <div className="w-[187px] top-px left-[1696px] text-4xl absolute [font-family:'Inter-Regular',Helvetica] font-normal text-white tracking-[0] leading-[normal]">
                Date/Time
              </div>

              <img
                className="w-[1971px] top-[63px] left-0 absolute h-px object-cover"
                alt=""
                src={line6}
              />
            </div>
          </div>

          {/* Transaction Data Rows */}
          {transactionData.map((transaction, index) => {
            const rowTops = [290, 417, 548, 690];
            const lineTops = [372, 497, 637, 777];
            const lineImages = [line7, line8, line9, line10];

            return (
              <div key={`${transaction.ticker}-${index}`}>
                {/* Ticker */}
                <div
                  className={`absolute w-[129px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[40px] tracking-[0] leading-[normal] ${
                    index === 0
                      ? "top-[290px] left-[184px]"
                      : index === 1
                        ? "top-[417px] left-[183px]"
                        : index === 2
                          ? "top-[548px] left-[183px]"
                          : "top-[690px] left-[177px]"
                  }`}
                >
                  {transaction.ticker}
                </div>

                {/* Type */}
                <div
                  className={`absolute w-[110px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[40px] tracking-[0] leading-[normal] ${
                    index === 0
                      ? "top-[295px] left-[544px]"
                      : index === 1
                        ? "top-[411px] left-[544px]"
                        : index === 2
                          ? "top-[545px] left-[544px]"
                          : "top-[686px] left-[538px]"
                  }`}
                >
                  {transaction.type}
                </div>

                {/* Quantity */}
                <div
                  className={`absolute [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[40px] tracking-[0] leading-[normal] ${
                    index === 0
                      ? "w-[52px] top-[295px] left-[823px]"
                      : index === 1
                        ? "w-[52px] top-[411px] left-[823px]"
                        : index === 2
                          ? "w-[53px] top-[545px] left-[834px]"
                          : "w-[52px] top-[686px] left-[817px]"
                  }`}
                >
                  {transaction.quantity}
                </div>

                {/* Price */}
                <div
                  className={`absolute [font-family:'Inter-Regular',Helvetica] font-normal text-[40px] text-white tracking-[0] leading-[normal] ${
                    index === 0
                      ? "w-[220px] top-[293px] left-[1113px]"
                      : index === 1
                        ? "w-[220px] top-[424px] left-[1113px]"
                        : index === 2
                          ? "w-[251px] top-[549px] left-[1103px]"
                          : "w-[220px] top-[686px] left-[1098px]"
                  }`}
                >
                  {transaction.price}
                </div>

                {/* Total Value */}
                <div
                  className={`absolute [font-family:'Inter-Regular',Helvetica] font-normal text-[40px] text-white tracking-[0] leading-[normal] ${
                    index === 0
                      ? "w-[220px] top-[290px] left-[1439px]"
                      : index === 1
                        ? "w-[220px] top-[421px] left-[1439px]"
                        : index === 2
                          ? "w-[191px] top-[546px] left-[1439px]"
                          : "w-[220px] top-[683px] left-[1433px]"
                  }`}
                >
                  {transaction.totalValue}
                </div>

                {/* Date/Time */}
                <div
                  className={`absolute w-[242px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[40px] tracking-[0] leading-[normal] ${
                    index === 0
                      ? "top-[290px] left-[1774px]"
                      : index === 1
                        ? "top-[421px] left-[1787px]"
                        : index === 2
                          ? "top-[546px] left-[1774px]"
                          : "top-[688px] left-[1774px]"
                  }`}
                >
                  {transaction.dateTime}
                </div>

                {/* Row Divider Line */}
                {index < transactionData.length - 1 && (
                  <img
                    className={`absolute h-px object-cover ${
                      index === 0
                        ? "w-[1969px] top-[372px] left-[99px]"
                        : index === 1
                          ? "w-[1969px] top-[497px] left-[99px]"
                          : index === 2
                            ? "w-[1969px] top-[637px] left-[99px]"
                            : "w-[1970px] top-[777px] left-[94px]"
                    }`}
                    alt=""
                    src={lineImages[index]}
                  />
                )}
              </div>
            );
          })}

          {/* Final divider line */}
          <img
            className="w-[1970px] top-[777px] left-[94px] absolute h-px object-cover"
            alt=""
            src={line10}
          />
        </section>

        {/* P&L and Investment Allocation Section */}
        <section className="absolute w-[2211px] h-[729px] top-[1515px] left-[179px]">
          {/* Investment Allocation */}
          <div className="w-[1038px] h-[725px] left-[1173px] absolute top-0">
            <img
              className="w-[1038px] h-[725px] left-0 absolute top-0"
              alt=""
              src={rectangle2}
            />

            <h3 className="absolute w-[511px] top-[47px] left-[56px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[46px] tracking-[0] leading-[normal] whitespace-nowrap">
              Investment Allocation
            </h3>

            <div className="absolute w-[371px] h-[375px] top-[175px] left-[67px] rounded-[185.5px/187.5px] border-[35px] border-solid border-[#d2d2d2]" />

            {allocationData.map((item, index) => {
              const topPositions = [188, 271, 359, 453, 542];
              const circleTopPositions = [192, 277, 366, 459, 547];

              return (
                <div key={item.label}>
                  <div
                    className={`absolute w-[335px] left-[676px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[40px] tracking-[0] leading-[normal] top-[${topPositions[index]}px]`}
                  >
                    {item.label}
                  </div>

                  <div
                    className={`absolute w-[35px] left-[615px] bg-[${item.color}] ${
                      index === 0
                        ? "h-[38px] top-48 rounded-[17.5px/19px]"
                        : index === 1
                          ? "h-[35px] top-[277px] rounded-[17.5px]"
                          : index === 2
                            ? "h-[34px] top-[366px] rounded-[17.5px/17px]"
                            : index === 3
                              ? "h-[35px] top-[459px] rounded-[17.5px]"
                              : "h-[37px] top-[547px] rounded-[17.5px/18.5px]"
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* P&L Section */}
          <div className="absolute w-[1093px] h-[729px] top-0 left-0">
            <img
              className="absolute w-[1093px] h-[729px] top-0 left-0"
              alt=""
              src={rectangle3}
            />

            <div className="absolute w-[486px] top-[59px] left-[53px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[40px] tracking-[0] leading-[normal]">
              Today's P&L
            </div>

            <div className="w-[486px] top-[59px] left-[723px] text-[40px] absolute [font-family:'Inter-Regular',Helvetica] font-normal text-white tracking-[0] leading-[normal]">
              Total P&L
            </div>

            <div className="w-[486px] top-[127px] left-[68px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[46px] absolute text-white tracking-[0] leading-[normal]">
              $1,250.75
            </div>

            <div className="w-[322px] top-[127px] left-[720px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[46px] absolute text-white tracking-[0] leading-[normal]">
              $150,250.50
            </div>

            <div className="absolute w-[120px] h-[46px] top-[131px] left-[307px] bg-[#06a000] rounded-[10px] opacity-50" />

            <div className="w-[114px] top-[138px] left-80 text-[26px] absolute [font-family:'Inter-Regular',Helvetica] font-normal text-white tracking-[0] leading-[normal]">
              +0.42%
            </div>

            {/* P&L Chart Y-Axis Labels */}
            {["8k", "6k", "4k", "2k", "0k"].map((label, index) => (
              <div
                key={label}
                className={`absolute w-[71px] left-[63px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-3xl tracking-[0] leading-[normal] ${
                  index === 0
                    ? "top-[242px]"
                    : index === 1
                      ? "top-[326px]"
                      : index === 2
                        ? "top-[411px]"
                        : index === 3
                          ? "top-[495px]"
                          : "top-[580px]"
                }`}
              >
                {label}
              </div>
            ))}

            <img
              className="absolute w-[855px] h-[221px] top-[351px] left-[121px]"
              alt="P&L performance chart"
              src={vector3}
            />

            {/* P&L Chart X-Axis Labels */}
            {chartXAxisLabels.map((label, index) => (
              <div
                key={label}
                className={`absolute [font-family:'Inter-Regular',Helvetica] font-normal text-white text-3xl tracking-[0] leading-[normal] ${
                  index === 0
                    ? "w-[131px] top-[618px] left-32"
                    : index === 1
                      ? "w-[129px] top-[618px] left-72"
                      : index === 2
                        ? "w-[127px] top-[618px] left-[445px]"
                        : index === 3
                          ? "w-[115px] top-[618px] left-[605px]"
                          : index === 4
                            ? "w-[135px] top-[617px] left-[760px]"
                            : "w-[122px] top-[618px] left-[920px]"
                }`}
              >
                {label}
              </div>
            ))}
          </div>
        </section>

        {/* Market News Section */}
        <section
          className="absolute w-[1798px] h-[1767px] top-[1515px] left-[2513px]"
          aria-labelledby="market-news-heading"
        >
          <img
            className="w-[1766px] h-[1754px] left-0 absolute top-0"
            alt=""
            src={rectangle23}
          />

          <div className="flex justify-between items-center absolute w-full top-[97px] left-[75px] right-[75px]">
            <h2
              id="market-news-heading"
              className="w-[336px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[46px] tracking-[0] leading-[normal]"
            >
              Market News
            </h2>

            <button className="w-[336px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[46px] tracking-[0] leading-[normal]">
              View All
            </button>
          </div>

          {/* News Articles */}
          {newsData.map((article, index) => {
            const sourceTopPositions = [281, 692, 1094, 1495];
            const headlineTopPositions = [348, 759, 1161, 1562];
            const descriptionTopPositions = [478, 889, 1291, 1651];
            const lineTopPositions = [241, 643, 1054, 1456];
            const lineImages = [line52, line62, line72, line82];
            const leftPositions = [96, 96, 117, 106];
            const sourceLeftPositions = [96, 96, 107, 96];

            return (
              <article key={index}>
                {/* Divider Line */}
                {index < newsData.length && (
                  <img
                    className={`absolute h-px object-cover ${
                      index === 0
                        ? "w-[1580px] top-[241px] left-[57px]"
                        : index === 1
                          ? "w-[1579px] top-[643px] left-[75px]"
                          : index === 2
                            ? "w-[1579px] top-[1054px] left-[75px]"
                            : "w-[1579px] top-[1456px] left-[86px]"
                    }`}
                    alt=""
                    src={lineImages[index]}
                  />
                )}

                {/* Source */}
                <div
                  className={`absolute w-[258px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[40px] tracking-[0] leading-[normal] ${
                    index === 0
                      ? "top-[281px] left-24"
                      : index === 1
                        ? "top-[692px] left-24"
                        : index === 2
                          ? "top-[1094px] left-[107px]"
                          : "top-[1495px] left-24"
                  }`}
                >
                  {article.source}
                </div>

                {/* Headline */}
                <h3
                  className={`absolute [font-family:'Inter-Bold',Helvetica] font-bold text-white text-5xl tracking-[0] leading-[normal] ${
                    index === 0
                      ? "w-[1087px] top-[348px] left-[106px]"
                      : index === 1
                        ? "w-[1087px] top-[759px] left-[106px]"
                        : index === 2
                          ? "w-[1087px] top-[1161px] left-[117px]"
                          : "w-[1163px] top-[1562px] left-[106px]"
                  }`}
                >
                  {article.headline}
                </h3>

                {/* Description */}
                <p
                  className={`absolute [font-family:'Inter-Regular',Helvetica] font-normal text-white text-5xl tracking-[0] leading-[normal] ${
                    index === 0
                      ? "w-[1457px] top-[478px] left-[94px]"
                      : index === 1
                        ? "w-[1457px] top-[889px] left-[94px]"
                        : index === 2
                          ? "w-[1457px] top-[1291px] left-[105px]"
                          : "w-[1457px] top-[1651px] left-[94px] blur-[2px]"
                  }`}
                >
                  {article.description}
                </p>
              </article>
            );
          })}
        </section>

        {/* User Profile */}
        <div className="w-[286px] top-[134px] left-[3823px] text-[62px] absolute [font-family:'Inter-Regular',Helvetica] font-normal text-white tracking-[0] leading-[normal]">
          Jacob M.
        </div>

        <img
          className="absolute w-[156px] h-[156px] top-[91px] left-[4123px] aspect-[1] object-cover"
          alt="User profile picture"
          src={x8479691}
        />
      </div>
    </div>
  );
};