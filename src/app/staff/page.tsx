// app/staff/page.tsx
"use client";

import StatsCards from "../../components/staff/dashboard/StatsCards";
import QuickActions from "../../components/staff/dashboard/QuickActions";
import { useAuth } from "../../contexts/AuthContext";

export default function StaffDashboard() {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-linear-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">
          Welcome back, {user?.username}! 
        </h1>
        <p className="text-blue-100 text-lg">
          Here&apos;s what&apos;s happening at Bauchi State Library today
        </p>
      </div>

      {/* Stats Overview */}
      <StatsCards />

      {/* Quick Actions */}
      <QuickActions />

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Recent Activity
        </h2>
        <div className="space-y-4">
          {[
            {
              action: "Book Checkout",
              user: "Ahmed Musa",
              book: "Things Fall Apart",
              time: "2 mins ago",
              type: "checkout",
            },
            {
              action: "Book Return",
              user: "Fatima Bello",
              book: "The Secret Lives of Baba Segi's Wives",
              time: "15 mins ago",
              type: "return",
            },
            {
              action: "New Member",
              user: "Chinedu Okoro",
              time: "1 hour ago",
              type: "member",
            },
            {
              action: "Book Added",
              book: "Half of a Yellow Sun",
              time: "2 hours ago",
              type: "catalog",
            },
          ].map((activity, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
            >
              <div
                className={`
                w-10 h-10 rounded-full flex items-center justify-center text-white
                ${activity.type === "checkout" ? "bg-green-500" : ""}
                ${activity.type === "return" ? "bg-blue-500" : ""}
                ${activity.type === "member" ? "bg-purple-500" : ""}
                ${activity.type === "catalog" ? "bg-orange-500" : ""}
              `}
              >
                {activity.type === "checkout" && "📚"}
                {activity.type === "return" && "↩️"}
                {activity.type === "member" && "👤"}
                {activity.type === "catalog" && "📖"}
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">{activity.action}</p>
                <p className="text-sm text-gray-600">
                  {activity.user && `${activity.user} - `}
                  {activity.book}
                </p>
              </div>
              <span className="text-sm text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
