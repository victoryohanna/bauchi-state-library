"use client";

import { useState, useEffect, useCallback } from "react";
import CheckoutForm from "../../../components/staff/circulation/CheckoutForm";
import CheckinForm from "../../../components/staff/circulation/CheckinForm";
import LoanManagement from "../../../components/staff/circulation/LoanManagement";
import { circulationApi } from "../../../utils/api";
import { CheckoutData, CheckinData, Activity } from "../../../types/library";

type CirculationView = "checkout" | "checkin" | "manage";

export default function CirculationPage() {
  const [activeView, setActiveView] = useState<CirculationView>("checkout");
  const [recentActivity, setRecentActivity] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(false);

  // Define fetchRecentActivity first using useCallback
  const fetchRecentActivity = useCallback(async () => {
    try {
      setLoading(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Mock data - in real app, use: const response = await circulationApi.getRecentActivity();
      const mockActivities: Activity[] = [
        {
          action: "Book Checkout",
          user: "Ahmed Musa",
          book: "Things Fall Apart",
          time: "10 mins ago",
          type: "checkout",
        },
        {
          action: "Book Return",
          user: "Fatima Bello",
          book: "Half of a Yellow Sun",
          time: "30 mins ago",
          type: "return",
        },
        {
          action: "Overdue Alert",
          user: "Chinedu Okoro",
          book: "There Was a Country",
          time: "2 hours ago",
          type: "system",
        },
      ];

      setRecentActivity(mockActivities);
    } catch (error) {
      console.error("Error fetching recent activity:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Then use it in useEffect
  useEffect(() => {
    fetchRecentActivity();
  }, [activeView, fetchRecentActivity]);

  const tabs: { id: CirculationView; name: string; icon: string }[] = [
    { id: "checkout", name: "Check Out", icon: "📚" },
    { id: "checkin", name: "Check In", icon: "↩️" },
    { id: "manage", name: "Manage Loans", icon: "🔄" },
  ];

  const handleCheckout = async (data: CheckoutData) => {
    try {
      // Uncomment for real API call:
      // await circulationApi.checkoutBook(data);

      // Simulate success
      console.log("Checkout successful:", data);

      // Refresh recent activity
      await fetchRecentActivity();

      alert("Book checked out successfully!");
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to checkout book";
      alert(errorMessage);
    }
  };

  const handleCheckin = async (data: CheckinData) => {
    try {
      // Uncomment for real API call:
      // await circulationApi.checkinBook(data);

      // Simulate success
      console.log("Checkin successful:", data);

      // Refresh recent activity
      await fetchRecentActivity();

      alert("Book checked in successfully!");
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to checkin book";
      alert(errorMessage);
    }
  };

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

      {/* Recent Activity Section */}
      {!loading && recentActivity.length > 0 && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-medium text-blue-900 mb-2">Recent Activity</h3>
          <div className="space-y-2">
            {recentActivity.slice(0, 3).map((activity, index) => (
              <div key={index} className="text-sm text-blue-800">
                <span className="font-medium">{activity.action}</span>
                {activity.user && ` - ${activity.user}`}
                {activity.book && ` (${activity.book})`}
                <span className="text-blue-600 ml-2">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Content */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        {activeView === "checkout" && (
          <CheckoutForm onSubmit={handleCheckout} />
        )}
        {activeView === "checkin" && <CheckinForm onSubmit={handleCheckin} />}
        {activeView === "manage" && <LoanManagement />}
      </div>
    </div>
  );
}