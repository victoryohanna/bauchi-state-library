// app/staff/circulation/page.tsx
"use client";

import { useState } from "react";
import CheckoutForm from "../../../components/staff/circulation/CheckoutForm";
import CheckinForm from "../../../components/staff/circulation/CheckinForm";
import LoanManagement from "../../../components/staff/circulation/LoanManagement";

type CirculationView = "checkout" | "checkin" | "manage";

export default function CirculationPage() {
  const [activeView, setActiveView] = useState<CirculationView>("checkout");

  const tabs = [
    { id: "checkout" as CirculationView, name: "Check Out", icon: "📚" },
    { id: "checkin" as CirculationView, name: "Check In", icon: "↩️" },
    { id: "manage" as CirculationView, name: "Manage Loans", icon: "🔄" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Circulation Desk</h1>
          <p className="mt-2 text-gray-600">Manage book loans and returns</p>
        </div>

        <div className="mt-4 sm:mt-0 bg-white rounded-lg border border-gray-200 p-1">
          <div className="flex space-x-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveView(tab.id)}
                className={`
                  flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-md transition-all duration-200
                  ${
                    activeView === tab.id
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-500 hover:text-gray-700"
                  }
                `}
              >
                <span>{tab.icon}</span>
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        {activeView === "checkout" && <CheckoutForm />}
        {activeView === "checkin" && <CheckinForm />}
        {activeView === "manage" && <LoanManagement />}
      </div>
    </div>
  );
}
