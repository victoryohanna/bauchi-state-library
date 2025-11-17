import {
  Book,
  Users,
  Clock,
  MapPin,
  Library,
  
} from "lucide-react";

export default function Collections() {
  const collectionStats = [
    { number: "22,572", label: "Volumes of Books", icon: Book },
    { number: "3,125", label: "Journals & Magazines", icon: Book },
    { number: "196", label: "Total Staff", icon: Users },
    { number: "30", label: "Professional Librarians", icon: Users },
  ];

  const collectionCategories = [
    {
      title: "Book Collection",
      description:
        "Our extensive book collection covers various subjects including literature, science, history, and more.",
      count: "22,572 volumes",
      features: [
        "Fiction & Non-fiction",
        "Academic Textbooks",
        "Reference Materials",
        "Children's Literature",
      ],
    },
    {
      title: "Journals & Periodicals",
      description:
        "Stay updated with our collection of academic journals, magazines, and periodicals.",
      count: "3,125 items",
      features: [
        "Academic Journals",
        "Popular Magazines",
        "Research Publications",
        "Local Periodicals",
      ],
    },
    {
      title: "Reference Section",
      description:
        "Access encyclopedias, dictionaries, atlases, and other reference materials.",
      count: "Comprehensive",
      features: [
        "Encyclopedias",
        "Dictionaries",
        "Atlases",
        "Yearbooks",
        "Gazettes",
      ],
    },
    {
      title: "Children's Section",
      description:
        "Specially curated collection for young readers aged 5-15 years.",
      count: "Age-appropriate",
      features: [
        "Picture Books",
        "Early Readers",
        "Educational Materials",
        "Story Collections",
      ],
    },
    {
      title: "Special Collections",
      description:
        "Rare books, local history materials, and special interest collections.",
      count: "Unique items",
      features: [
        "Local History",
        "Rare Books",
        "Cultural Materials",
        "Special Needs Resources",
      ],
    },
    {
      title: "Digital Resources",
      description:
        "Access our growing collection of e-books and digital materials.",
      count: "Expanding",
      features: [
        "E-books",
        "Online Databases",
        "Digital Journals",
        "Audiobooks",
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
      <section className="bg-linear-to-r from-primary to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Collections
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Explore our vast collection of books, journals, and resources
              spanning various subjects and interests
            </p>
          </div>
        </div>
      </section>

      {/* Collection Statistics */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {collectionStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-800">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Collection Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Collection Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our diverse range of collections tailored to meet the
              needs of all our patrons
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collectionCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Library className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 ml-4">
                    {category.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-3">{category.description}</p>
                <div className="bg-primary/5 rounded-lg p-3 mb-4">
                  <span className="text-sm font-semibold text-primary">
                    {category.count}
                  </span>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800 text-sm">
                    Includes:
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership & Access */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Access Our Collections
              </h2>
              <div className="bg-primary/5 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Become a Member
                </h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">
                      ₦1,000
                    </div>
                    <div className="text-sm text-gray-600">
                      Registration Fee
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">
                      1 Year
                    </div>
                    <div className="text-sm text-gray-600">
                      Membership Validity
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Register today to access our vast collection of books,
                  journals, and digital resources.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Fill membership card with passport photograph
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Pay registration fee of ₦1,000
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Renew annually to maintain access
                  </li>
                </ul>
              </div>
            </div>

            {/* Operating Hours */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Visit Us
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Operating Hours
                </h3>
                <div className="space-y-4">
                  {operatingHours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0"
                    >
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-primary mr-3" />
                        <span className="font-medium text-gray-800">
                          {schedule.days}
                        </span>
                      </div>
                      <div className="text-right">
                        {schedule.opening === "Closed" ? (
                          <span className="text-red-600 font-semibold">
                            Closed
                          </span>
                        ) : (
                          <span className="text-gray-600">
                            {schedule.opening} - {schedule.closing}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary/5 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Library Locations
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary mr-3 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-800">
                        Main Library
                      </div>
                      <div className="text-gray-600">
                        Abdulkadir Ahmad Bank Road, Bauchi
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary mr-3 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-800">
                        Branch Library
                      </div>
                      <div className="text-gray-600">
                        Katagum Local Government
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
