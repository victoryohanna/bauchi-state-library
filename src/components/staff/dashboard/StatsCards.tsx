// components/staff/dashboard/StatsCards.tsx
interface StatsCardsProps {
  stats: {
    totalBooks: number;
    activeMembers: number;
    booksOnLoan: number;
    overdueBooks: number;
  };
}

export default function StatsCards({ stats }: StatsCardsProps) {
  const statsData = [
    {
      label: "Total Books",
      value: stats.totalBooks.toLocaleString(),
      change: "+2.3%",
      trend: "up",
    },
    {
      label: "Active Members",
      value: stats.activeMembers.toLocaleString(),
      change: "+5.1%",
      trend: "up",
    },
    {
      label: "Books on Loan",
      value: stats.booksOnLoan.toLocaleString(),
      change: "-1.2%",
      trend: "down",
    },
    {
      label: "Overdue Books",
      value: stats.overdueBooks.toLocaleString(),
      change: "-8.7%",
      trend: "down",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statsData.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">
                {stat.value}
              </p>
            </div>
            <div
              className={`
              px-2 py-1 rounded-full text-xs font-medium
              ${
                stat.trend === "up"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }
            `}
            >
              {stat.change}
            </div>
          </div>
          <div className="mt-4">
            <div className={`w-full bg-gray-200 rounded-full h-2`}>
              <div
                className={`
                  h-2 rounded-full
                  ${stat.trend === "up" ? "bg-green-500" : "bg-red-500"}
                `}
                style={{ width: stat.trend === "up" ? "75%" : "25%" }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
