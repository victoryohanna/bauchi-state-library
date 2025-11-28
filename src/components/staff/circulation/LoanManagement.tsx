// components/staff/circulation/LoanManagement.tsx
"use client";

export default function LoanManagement() {
  // Mock data
  const loans = [
    {
      id: "1",
      bookTitle: "Things Fall Apart",
      memberName: "Ahmed Musa",
      memberId: "BSL2024001",
      issueDate: "2024-01-15",
      dueDate: "2024-01-29",
      status: "active",
    },
    {
      id: "2",
      bookTitle: "Half of a Yellow Sun",
      memberName: "Fatima Bello",
      memberId: "BSL2024002",
      issueDate: "2024-01-10",
      dueDate: "2024-01-24",
      status: "overdue",
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Manage Active Loans
      </h2>

      <div className="space-y-4">
        {loans.map((loan) => (
          <div
            key={loan.id}
            className="bg-gray-50 rounded-lg p-4 border border-gray-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900">{loan.bookTitle}</h3>
                <p className="text-sm text-gray-600">
                  Loaned to: {loan.memberName} ({loan.memberId})
                </p>
                <p className="text-sm text-gray-500">
                  Issued: {loan.issueDate} • Due: {loan.dueDate}
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <span
                  className={`px-3 py-1 text-sm font-medium rounded-full ${
                    loan.status === "active"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {loan.status === "active" ? "Active" : "Overdue"}
                </span>

                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Renew
                </button>

                <button className="text-green-600 hover:text-green-800 text-sm font-medium">
                  Check In
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
