import { User, Mail, Phone, Award, BookOpen, Users } from "lucide-react";

const boardMembers = [
  {
    name: "Dr. Aminu B. Sani",
    position: "Chief Librarian",
    department: "Library Administration",
    image: "/images/chief-librarian.jpg",
    email: "a.sani@bauchilibrary.gov.ng",
    phone: "+234 801 234 5678",
    qualifications: "PhD in Library Science, MLIS, BLIS",
    experience: "25+ years in library management",
    bio: "Dr. Aminu B. Sani is a distinguished library scientist with over two decades of experience in transforming library services across Northern Nigeria. Under his leadership, Bauchi State Library has digitized its collections and expanded community outreach programs.",
  },
  {
    name: "Hajiya Fatima Usman",
    position: "Deputy Chief Librarian",
    department: "Technical Services",
    image: "/images/member-1.jpg",
    email: "f.usman@bauchilibrary.gov.ng",
    phone: "+234 802 345 6789",
  },
  {
    name: "Mr. Chukwuma Okoro",
    position: "Head Librarian",
    department: "Digital Resources",
    image: "/images/member-2.jpg",
    email: "c.okoro@bauchilibrary.gov.ng",
    phone: "+234 803 456 7890",
  },
  {
    name: "Dr. Aisha Mohammed",
    position: "Research Coordinator",
    department: "Academic Services",
    image: "/images/member-3.jpg",
    email: "a.mohammed@bauchilibrary.gov.ng",
    phone: "+234 804 567 8901",
  },
  {
    name: "Mr. John Benjamin",
    position: "Collections Manager",
    department: "Acquisition & Cataloging",
    image: "/images/member-4.jpg",
    email: "j.benjamin@bauchilibrary.gov.ng",
    phone: "+234 805 678 9012",
  },
  {
    name: "Mrs. Grace Williams",
    position: "Community Outreach",
    department: "Public Services",
    image: "/images/member-5.jpg",
    email: "g.williams@bauchilibrary.gov.ng",
    phone: "+234 806 789 0123",
  },
];

export default function BoardMembers() {
  const chiefLibrarian = boardMembers[0];
  const otherMembers = boardMembers.slice(1);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Meet Our Leadership Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated professionals committed to advancing literacy and
            knowledge dissemination across Bauchi State
          </p>
        </div>

        <div className="grid lg:grid-cols-9 gap-8">
          {/* Chief Librarian - col-6 equivalent */}
          <div className="lg:col-span-6">
            <div className="bg-linear-to-br from-primary/5 to-blue-100/30 rounded-2xl p-8 border border-gray-200">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Chief Librarian Image */}
                <div className="md:col-span-1">
                  <div className="relative group">
                    <div className="w-full aspect-square rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                      {/* Placeholder for image */}
                      <div className="w-full h-full bg-linear-to-br from-primary to-blue-700 flex items-center justify-center text-white">
                        <User className="h-20 w-20" />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-accent/20 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  </div>

                  {/* Quick Contact */}
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center text-gray-600">
                      <Mail className="h-4 w-4 mr-3" />
                      <span className="text-sm">{chiefLibrarian.email}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Phone className="h-4 w-4 mr-3" />
                      <span className="text-sm">{chiefLibrarian.phone}</span>
                    </div>
                  </div>
                </div>

                {/* Chief Librarian Details */}
                <div className="md:col-span-2">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">
                      {chiefLibrarian.name}
                    </h3>
                    <div className="flex items-center text-primary font-semibold mb-4">
                      <Award className="h-5 w-5 mr-2" />
                      {chiefLibrarian.position}
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {chiefLibrarian.bio}
                    </p>
                  </div>

                  {/* Qualifications and Experience */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <BookOpen className="h-8 w-8 text-primary mb-3" />
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Qualifications
                      </h4>
                      <p className="text-sm text-gray-600">
                        {chiefLibrarian.qualifications}
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <Users className="h-8 w-8 text-primary mb-3" />
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Experience
                      </h4>
                      <p className="text-sm text-gray-600">
                        {chiefLibrarian.experience}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Board Members - col-3 equivalent */}
          <div className="lg:col-span-3">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Board Members
              </h3>

              <div className="space-y-6">
                {otherMembers.map((member, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-4 border border-gray-200 hover:shadow-md transition duration-300 group cursor-pointer"
                  >
                    <div className="flex items-center space-x-4">
                      {/* Member Avatar */}
                      <div className="shrink-0">
                        <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary to-blue-600 flex items-center justify-center text-white text-sm font-semibold group-hover:scale-110 transition duration-300">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                      </div>

                      {/* Member Details */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-800 truncate group-hover:text-primary transition duration-200">
                          {member.name}
                        </h4>
                        <p className="text-sm text-primary font-medium truncate">
                          {member.position}
                        </p>
                        <p className="text-xs text-gray-500 truncate">
                          {member.department}
                        </p>
                      </div>
                    </div>

                    {/* Hover Contact Info */}
                    <div className="mt-3 pt-3 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition duration-300">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center text-gray-600">
                          <Mail className="h-3 w-3 mr-1" />
                          <span className="truncate">{member.email}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Phone className="h-3 w-3 mr-1" />
                          <span>{member.phone.split(" ")[1]}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* View All Button */}
              <div className="mt-6 text-center">
                <button className="text-primary font-semibold text-sm hover:text-blue-700 transition duration-200 flex items-center justify-center w-full py-2 border border-primary rounded-lg hover:bg-primary">
                  View Full Team
                  <Users className="h-4 w-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Responsive Layout */}
        <div className="lg:hidden mt-8">
          <div className="grid md:grid-cols-2 gap-6">
            {otherMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-linear-to-br from-primary to-blue-600 flex items-center justify-center text-white font-semibold text-lg">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">
                      {member.name}
                    </h4>
                    <p className="text-primary font-semibold">
                      {member.position}
                    </p>
                    <p className="text-sm text-gray-600">{member.department}</p>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Mail className="h-4 w-4 mr-2" />
                    <span>{member.email}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>{member.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
