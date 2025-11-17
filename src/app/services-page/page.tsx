import {
  Users,
  Building,
  Library,
  GraduationCap,
  Laptop,
  UserCheck,
  BookOpen,
  HelpCircle,
  Users2,
  School,
  BookMarked,
  Shield,
} from "lucide-react";

export default function Services() {
  const directorates = [
    {
      name: "Administrative Department",
      icon: Building,
      description:
        "Responsible for planning, organizing and supervision of all activities in the library. Headed by State Librarian and assisted by Deputy State Librarian.",
      services: [
        "Strategic Planning",
        "Staff Supervision",
        "Resource Management",
        "Policy Implementation",
      ],
    },
    {
      name: "Readers Service Department",
      icon: Users,
      description:
        "The main center for information resources provision in the library. Provides various reader services including shelving, user statistics, and query handling.",
      services: [
        "Circulation Services",
        "Reference Assistance",
        "Children's Programs",
        "Special Needs Support",
        "Reader Advisory",
        "Information Desk",
      ],
    },
    {
      name: "Technical Department",
      icon: Library,
      description:
        "Handles technical activities including cataloguing, acquisition, and maintenance of library materials.",
      services: [
        "Cataloguing & Classification",
        "Acquisition of Materials",
        "Book Binding & Repair",
        "Collection Development",
        "Reprographic Services",
      ],
    },
    {
      name: "School Library Services Department",
      icon: GraduationCap,
      description:
        "Responsible for creating, acquiring, staffing and supervising Libraries in both Primary and Secondary Schools in Bauchi State.",
      services: [
        "School Library Setup",
        "Staff Training",
        "Resource Provision",
        "Educational Support",
      ],
    },
    {
      name: "Information and Communication Technology Department",
      icon: Laptop,
      description:
        "Manages all ICT facilities including e-library and library automation systems.",
      services: [
        "E-Library Services",
        "Library Automation",
        "ICT Maintenance",
        "Digital Literacy Training",
      ],
    },
    {
      name: "Training and Extension Department",
      icon: UserCheck,
      description:
        "Responsible for staffing and supervision of libraries in all 20 local governments, and training of Industrial Training Students and NYSC members.",
      services: [
        "Local Government Support",
        "IT & NYSC Training",
        "Extension Services",
        "Community Outreach",
      ],
    },
  ];

  const userServices = [
    {
      icon: BookOpen,
      title: "Reading & Research",
      description:
        "Access our quiet reading areas and research facilities for academic and personal study.",
    },
    {
      icon: HelpCircle,
      title: "Reference Services",
      description:
        "Get assistance from our professional librarians for research and information queries.",
    },
    {
      icon: Users2,
      title: "Children's Programs",
      description:
        "Educational and entertaining programs designed for young readers aged 5-15 years.",
    },
    {
      icon: School,
      title: "Educational Support",
      description:
        "Resources and support for students, teachers, and educational institutions.",
    },
    {
      icon: BookMarked,
      title: "Inter-library Loan",
      description:
        "Access materials from other libraries through our inter-library loan service.",
    },
    {
      icon: Shield,
      title: "Special Needs Assistance",
      description:
        "Specialized services and resources for patrons with disabilities.",
    },
  ];

  const userCategories = [
    "Children (5-15 yrs)",
    "Students",
    "Adults",
    "Researchers",
    "Lecturers",
    "Special Needs Patrons",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-linear-to-r from-green-600 to-emerald-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Services
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Comprehensive library services designed to meet the diverse needs
              of our community
            </p>
          </div>
        </div>
      </section>

      {/* User Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              User Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a wide range of services to support learning, research,
              and personal development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {userServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6 border border-gray-100"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <IconComponent className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 ml-4">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Directorates Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Service Directorates
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our specialized directorates work together to provide
              comprehensive library services across Bauchi State
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {directorates.map((directorate, index) => {
              const IconComponent = directorate.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <IconComponent className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 ml-4">
                      {directorate.name}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {directorate.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800 text-sm">
                      Key Services:
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {directorate.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* User Categories */}
      <section className="py-16 bg-linear-to-br from-green-600 to-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Who We Serve</h2>
            <p className="text-emerald-100 text-lg">
              Bauchi State Library serves a diverse community of knowledge
              seekers across all age groups and backgrounds
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {userCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6" />
                </div>
                <div className="font-medium text-sm">{category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Coverage */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Service Coverage
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Extending library services across Bauchi State through multiple
              service points
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Main Library
              </h3>
              <p className="text-gray-600">
                Abdulkadir Ahmad Bank Road, Bauchi
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Library className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Branch Library
              </h3>
              <p className="text-gray-600">Katagum Local Government</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <School className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                School Libraries
              </h3>
              <p className="text-gray-600">Across 20 Local Governments</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
