import React from "react";

interface PerformanceData {
  year: string;
  return: string;
  profit: string;
  loss: string;
  bestMonth: string;
  worstMonth: string;
  totalTrades: string;
  tradingVolume: string;
}

const PerformanceReport: React.FC = () => {
  const data: PerformanceData[] = [
    {
      year: "2024",
      return: "₹2,85,000",
      profit: "85%",
      loss: "-15%",
      bestMonth: "Jan (₹ 45,527)",
      worstMonth: "Sep (₹ 22,301)",
      totalTrades: "240",
      tradingVolume: "₹48,00,000",
    },
    {
      year: "2023",
      return: "₹2,50,000",
      profit: "75%",
      loss: "-20%",
      bestMonth: "Jan (₹ 40,000)",
      worstMonth: "Sep (₹ 20,000)",
      totalTrades: "200",
      tradingVolume: "₹45,00,000",
    },
    {
      year: "2022",
      return: "₹3,50,000",
      profit: "90%",
      loss: "-10%",
      bestMonth: "Jan (₹ 50,000)",
      worstMonth: "Sep (₹ 25,000)",
      totalTrades: "300",
      tradingVolume: "₹60,00,000",
    },
    {
      year: "2021",
      return: "₹1,50,000",
      profit: "60%",
      loss: "-30%",
      bestMonth: "Dec (₹ 20,000)",
      worstMonth: "Aug (₹ 10,000)",
      totalTrades: "150",
      tradingVolume: "₹30,00,000",
    },
  ];

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-xl text-gray-800">
          Performance report for{" "}
          <span className="font-medium text-emerald-500">BANKNIFTY</span> Index
          - <span className="font-medium text-emerald-500">All</span> year
        </h1>
        <button className="flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-white transition-colors hover:bg-emerald-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21.1679 8C19.6247 4.46819 16.1006 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C16.1006 22 19.6247 19.5318 21.1679 16" />
            <path d="M17 8L21.4 8L21.4 3.6" />
          </svg>
          Change
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px] border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-4 py-4 text-left font-medium text-gray-600">
                Year
              </th>
              <th className="px-4 py-4 text-left font-medium text-gray-600">
                Return
              </th>
              <th className="px-4 py-4 text-left font-medium text-gray-600">
                Profit %
              </th>
              <th className="px-4 py-4 text-left font-medium text-gray-600">
                Loss %
              </th>
              <th className="px-4 py-4 text-left font-medium text-gray-600">
                Best Month
              </th>
              <th className="px-4 py-4 text-left font-medium text-gray-600">
                Worst Month
              </th>
              <th className="px-4 py-4 text-left font-medium text-gray-600">
                Total Trades
              </th>
              <th className="px-4 py-4 text-left font-medium text-gray-600">
                Trading Volume
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr
                key={row.year}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="px-4 py-4 text-gray-800">{row.year}</td>
                <td className="px-4 py-4 font-medium text-gray-800">
                  {row.return}
                </td>
                <td className="px-4 py-4 text-emerald-500">{row.profit}</td>
                <td className="px-4 py-4 text-red-500">{row.loss}</td>
                <td className="px-4 py-4 text-gray-800">{row.bestMonth}</td>
                <td className="px-4 py-4 text-gray-800">{row.worstMonth}</td>
                <td className="px-4 py-4 text-gray-800">{row.totalTrades}</td>
                <td className="px-4 py-4 text-gray-800">{row.tradingVolume}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PerformanceReport;
