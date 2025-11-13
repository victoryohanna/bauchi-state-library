import { Users, BookOpen, Clock, Calendar } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: BookOpen,
      number: "22,000+",
      label: "Books Available",
      description: "Extensive collection covering all genres",
    },
    {
      icon: Users,
      number: "15,000+",
      label: "Active Members",
      description: "Growing community of readers",
    },
    {
      icon: Clock,
      number: "40+",
      label: "Years Serving",
      description: "Trusted institution since 1976",
    },
    {
      icon: Calendar,
      number: "7",
      label: "Days a Week",
      description: "Always open for you",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-bright from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Why Choose Our Library?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Experience excellence in library services with our comprehensive
            resources and dedicated community support
          </p>
        </div> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:transform hover:-translate-y-2"
            >
              <div className="bg-gradient-to-bright from-primary to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="h-8 w-8 text-white" />
              </div>

              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                {stat.number}
              </div>

              <div className="text-lg font-semibold text-primary mb-3">
                {stat.label}
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Call-to-Action */}
        {/* <div className="text-center mt-12">
          <button className="bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl">
            Learn More About Our Services
          </button>
        </div> */}
      </div>
    </section>
  );
}
