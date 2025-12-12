"use client";

import { useState, useEffect } from "react";
import StatsCards from "../../components/staff/dashboard/StatsCards";
import QuickActions from "../../components/staff/dashboard/QuickActions";
import { useAuth } from "../../contexts/AuthContext";
import { Activity, Stats } from "../../types/library";

export default function StaffDashboard() {
  const { user } = useAuth();
  const [stats, setStats] = useState<Stats>({
    totalBooks: 0,
    totalMembers: 0,
    activeLoans: 0,
    overdueLoans: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      // In a real app, you would call your dashboard API
      // const data = await dashboardApi.getStats();

      // For now, we'll simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Mock data - replace with actual API call
      setStats({
        totalBooks: 22341,
        totalMembers: 15000,
        activeLoans: 492,
        overdueLoans: 34,
      });
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Map Stats interface to StatsCardsProps format
  const statsForCards = {
    totalBooks: stats.totalBooks,
    activeMembers: stats.totalMembers, // Map totalMembers to activeMembers
    booksOnLoan: stats.activeLoans,    // Map activeLoans to booksOnLoan
    overdueBooks: stats.overdueLoans,  // Map overdueLoans to overdueBooks
  };

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-linear-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">
          Welcome back, {user?.firstName} {user?.lastName}!
        </h1>
        <p className="text-blue-100 text-lg">
          Here&apos;s what&apos;s happening at Bauchi State Library today
        </p>
      </div>

      {/* Stats Overview */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6"
            >
              <div className="animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                <div className="h-8 bg-gray-200 rounded w-3/4"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <StatsCards stats={statsForCards} />
      )}

      {/* Quick Actions */}
      <QuickActions />

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Recent Activity
        </h2>
        <RecentActivity />
      </div>
    </div>
  );
}

// Recent Activity Component with proper typing
function RecentActivity() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecentActivity();
  }, []);

  const fetchRecentActivity = async () => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Mock data with proper typing
      const mockActivities: Activity[] = [
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
      ];

      setActivities(mockActivities);
    } catch (error) {
      console.error("Error fetching recent activity:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg animate-pulse"
          >
            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="h-3 bg-gray-200 rounded w-1/3"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  const getActivityIcon = (type: Activity["type"]) => {
    switch (type) {
      case "checkout":
        return "📚";
      case "return":
        return "↩️";
      case "member":
        return "👤";
      case "catalog":
        return "📖";
      default:
        return "📝";
    }
  };

  const getActivityColor = (type: Activity["type"]) => {
    switch (type) {
      case "checkout":
        return "bg-green-500";
      case "return":
        return "bg-blue-500";
      case "member":
        return "bg-purple-500";
      case "catalog":
        return "bg-orange-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="space-y-4">
      {activities.map((activity, index) => (
        <div
          key={index}
          className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
        >
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${getActivityColor(
              activity.type
            )}`}
          >
            {getActivityIcon(activity.type)}
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
  );
}