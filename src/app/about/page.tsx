
import {
  BookOpen,
  Users,
  Target,
  Eye,
  Building,
  Clock,
  Phone,
  MapPin,
  Calendar,
  GraduationCap,
  Laptop,
  BookText,
  School,
  Library,
} from "lucide-react";

export default function AboutPage() {
  const directorates = [
    {
      icon: Building,
      title: "Administrative Directorates",
      description:
        "Planning, organizing and supervision of all library activities",
      sections: [
        "Headed by State Librarian",
        "Assisted by Deputy State Librarian",
      ],
    },
    {
      icon: BookText,
      title: "Readers Service Directorates",
      description: "Main center for information resources provision",
      sections: [
        "Circulation Section",
        "Children Section",
        "Reference Section",
        "Reserve Section",
        "Serial Section",
        "Special Needs",
      ],
    },
    {
      icon: Library,
      title: "Technical and Collection Directorates",
      description: "Technical activities and collection management",
      sections: [
        "Cataloguing and Classification",
        "Acquisition Unit",
        "Reprographic Services",
        "Bindery Unit",
      ],
    },
    {
      icon: School,
      title: "School Library Services Directorates",
      description: "Managing libraries in Primary and Secondary Schools",
      sections: [
        "School Library Supervision",
        "Resource Acquisition for Schools",
      ],
    },
    {
      icon: Laptop,
      title: "ICT Directorates",
      description: "Managing all ICT facilities and digital services",
      sections: ["E-Library", "Library Automation", "Digital Resources"],
    },
    {
      icon: GraduationCap,
      title: "Training and Extension Directorates",
      description: "Staff training and local government library supervision",
      sections: [
        "20 Local Government Libraries",
        "Industrial Training",
        "NYSC Members",
      ],
    },
  ];

  const operatingHours = [
    { days: "Monday - Thursday", opening: "8:00 AM", closing: "9:00 PM" },
    { days: "Friday", opening: "8:00 AM", closing: "8:00 PM" },
    { days: "Saturday", opening: "8:00 AM", closing: "2:00 PM" },
    { days: "Sunday", opening: "Closed", closing: "Closed" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-linear-to-r from-blue-900 to-indigo-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Established in 1976, Bauchi State Library Board has been serving
              the community with excellence in literacy and knowledge
              dissemination
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our History & Growth
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Bauchi State Library Board was established in 1976, following
                  the creation of the State. The Library headquarters is in
                  Bauchi state capital with a branch at Katagum local
                  government.
                </p>
                <p>
                  We started operation in a temporary building situated along
                  Gombe road near Matsakan Makafi. In 1990 the Library moved to
                  its permanent site at Abdulkadir Ahmad bank road Bauchi,
                  Bauchi state.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-xl p-6 text-center">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-800">196</div>
                <div className="text-blue-600 font-medium">Total Staff</div>
              </div>

              <div className="bg-green-50 rounded-xl p-6 text-center">
                <BookOpen className="h-12 w-12 text-green-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-800">22,572</div>
                <div className="text-green-600 font-medium">Book Volumes</div>
              </div>

              <div className="bg-purple-50 rounded-xl p-6 text-center">
                <BookText className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-800">3,125</div>
                <div className="text-purple-600 font-medium">
                  Journals & Magazines
                </div>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 text-center">
                <Calendar className="h-12 w-12 text-orange-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-800">1976</div>
                <div className="text-orange-600 font-medium">
                  Year Established
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-linear-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To provide free and open access to information, resources and
                cultural experience that enriches the lives of individuals and
                strengthen community.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-indigo-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To Support the educational activities of groups and
                organizations in the state.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Directorates Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Directorates
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Bauchi State Library Board operates through six specialized
              directorates, each dedicated to specific aspects of library
              services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {directorates.map((directorate, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-linear-to-br from-blue-500 to-indigo-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <directorate.icon className="h-6 w-6 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {directorate.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {directorate.description}
                </p>

                <div className="space-y-2">
                  {directorate.sections.map((section, sectionIndex) => (
                    <div
                      key={sectionIndex}
                      className="flex items-center text-sm text-gray-500"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {section}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership & Operation */}
      <section className="py-16 bg-linear-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Membership Information */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Library Membership
              </h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-4">
                    <Users className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Open to Everyone
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Bauchi State Library is open to all - children, students,
                      adults, researchers, lecturers, and people with special
                      needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Registration Process
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Fill membership card with passport photo and ₦1,000
                      registration fee. Membership valid for one year with
                      renewal option.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Operating Hours
              </h3>

              <div className="space-y-4">
                {operatingHours.map((schedule, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0"
                  >
                    <span className="font-medium text-gray-700">
                      {schedule.days}
                    </span>
                    <span className="text-gray-600">
                      {schedule.opening} - {schedule.closing}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Visit Us Today
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Located at our permanent site since 1990, we welcome you to
              explore our extensive collection and services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Location
              </h3>
              <p className="text-gray-600">
                Abdulkadir Ahmad Bank Road
                <br />
                Bauchi, Bauchi State
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Contact
              </h3>
              <p className="text-gray-600">
                +234 XXX XXX XXXX
                <br />
                info@bauchilibrary.gov.ng
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Branch
              </h3>
              <p className="text-gray-600">
                Katagum Local Government
                <br />
                Extension Services Available
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
