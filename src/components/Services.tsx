import {
  Book,
  Users,
  Laptop,
  GraduationCap,
  Search,
  Heart,
} from "lucide-react";

const services = [
  {
    icon: Book,
    title: "Book Lending",
    description:
      "Borrow from our extensive collection of fiction, non-fiction, and academic books",
  },
  {
    icon: Laptop,
    title: "Digital Resources",
    description: "Access e-books, online journals, and digital databases",
  },
  {
    icon: Users,
    title: "Study Spaces",
    description: "Quiet study areas and group discussion rooms available",
  },
  {
    icon: GraduationCap,
    title: "Research Support",
    description: "Get help with academic research and reference services",
  },
  {
    icon: Search,
    title: "Online Catalog",
    description: "Search our entire collection from anywhere",
  },
  {
    icon: Heart,
    title: "Community Programs",
    description: "Join book clubs, workshops, and cultural events",
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive library services designed to meet the needs of
            students, researchers, and the general public
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100"
            >
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
