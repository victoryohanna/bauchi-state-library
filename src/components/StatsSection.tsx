import { Users, BookOpen, Clock, Calendar } from "lucide-react";
import Link from "next/link";

export default function StatsSection() {
  const stats = [
    {
      icon: BookOpen,
      number: "22,000+",
      label: "Books Available",
      description: "Extensive collection covering all genres",
      bgColor: "from-blue-50 to-indigo-100",
      iconColor: "from-blue-500 to-blue-700",
      href: "/books", 
      hoverColor: "hover:from-blue-100 hover:to-indigo-200",
    },
    {
      icon: Users,
      number: "15,000+",
      label: "Active Members",
      description: "Growing community of readers",
      bgColor: "from-emerald-50 to-teal-100",
      iconColor: "from-emerald-500 to-teal-700",
      href: "#", 
      hoverColor: "hover:from-emerald-100 hover:to-teal-200",
    },
    {
      icon: Clock,
      number: "40+",
      label: "Years Serving",
      description: "Trusted institution since 1976",
      bgColor: "from-amber-50 to-orange-100",
      iconColor: "from-amber-500 to-orange-700",
      href: "#",
      hoverColor: "hover:from-amber-100 hover:to-orange-200",
    },
    {
      icon: Calendar,
      number: "7",
      label: "Days a Week",
      description: "Always open for you",
      bgColor: "from-violet-50 to-purple-100",
      iconColor: "from-violet-500 to-purple-700",
      href: "#", 
      hoverColor: "hover:from-violet-100 hover:to-purple-200",
    },
  ];

  return (
    <section className="py-16 bg-linear-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <Link
              key={index}
              href={stat.href}
              className={`bg-linear-to-br ${stat.bgColor} ${stat.hoverColor} rounded-2xl p-6 sm:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 group hover:transform hover:-translate-y-2 cursor-pointer block`}
            >
              <div
                className={`bg-linear-to-br ${stat.iconColor} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}
              >
                <stat.icon className="h-8 w-8 text-white" />
              </div>

              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                {stat.number}
              </div>

              <div className="text-lg font-semibold text-gray-700 mb-3">
                {stat.label}
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
                {stat.description}
              </p>

              {/* Optional: Add a subtle arrow indicator */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-6 h-6 bg-white/50 rounded-full flex items-center justify-center mx-auto">
                  <svg
                    className="w-3 h-3 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
