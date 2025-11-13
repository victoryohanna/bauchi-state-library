import { Users, BookOpen, Clock, Calendar } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: BookOpen,
      number: "22,000+",
      label: "Books Available",
      description: "Extensive collection covering all genres",
      bgColor: "from-blue-50 to-indigo-100",
      iconColor: "from-blue-500 to-blue-700",
    },
    {
      icon: Users,
      number: "15,000+",
      label: "Active Members",
      description: "Growing community of readers",
      bgColor: "from-emerald-50 to-teal-100",
      iconColor: "from-emerald-500 to-teal-700",
    },
    {
      icon: Clock,
      number: "40+",
      label: "Years Serving",
      description: "Trusted institution since 1976",
      bgColor: "from-amber-50 to-orange-100",
      iconColor: "from-amber-500 to-orange-700",
    },
    {
      icon: Calendar,
      number: "7",
      label: "Days a Week",
      description: "Always open for you",
      bgColor: "from-violet-50 to-purple-100",
      iconColor: "from-violet-500 to-purple-700",
    },
  ];

  return (
    <section className="py-16 bg-linear-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-linear-to-br ${stat.bgColor} rounded-2xl p-6 sm:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 group hover:transform hover:-translate-y-2`}
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
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

