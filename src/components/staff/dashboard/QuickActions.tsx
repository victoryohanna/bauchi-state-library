// components/staff/dashboard/QuickActions.tsx
import Link from "next/link";

export default function QuickActions() {
  const actions = [
    {
      title: "Check Out Book",
      description: "Issue books to members",
      icon: "📚",
      href: "/staff/circulation",
      color: "bg-blue-50 border-blue-200 text-blue-700",
    },
    {
      title: "Check In Book",
      description: "Process book returns",
      icon: "↩️",
      href: "/staff/circulation",
      color: "bg-green-50 border-green-200 text-green-700",
    },
    {
      title: "Add New Book",
      description: "Add books to catalog",
      icon: "📖",
      href: "/staff/catalog",
      color: "bg-purple-50 border-purple-200 text-purple-700",
    },
    {
      title: "Register Member",
      description: "Add new library members",
      icon: "👤",
      href: "/staff/members",
      color: "bg-orange-50 border-orange-200 text-orange-700",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Quick Actions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {actions.map((action, index) => (
          <Link
            key={index}
            href={action.href}
            className={`
              p-4 rounded-xl border-2 transition-all duration-200 hover:scale-105 hover:shadow-md
              ${action.color}
            `}
          >
            <div className="text-2xl mb-2">{action.icon}</div>
            <h3 className="font-semibold mb-1">{action.title}</h3>
            <p className="text-sm opacity-80">{action.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
