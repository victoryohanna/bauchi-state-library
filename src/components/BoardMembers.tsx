import Image from "next/image"
import { Mail, Phone, Award,  User } from "lucide-react";
import librarian from "@/assets/images/librarian.jpg";
const boardMembers = [
  {
    name: "Umar Kasim Ningi ",
    position: "Chief Librarian",
    department: "Library Administration",
    image: librarian,
    email: "a.sani@bauchilibrary.gov.ng",
    phone: "+234 801 234 5678",
    qualifications: "PhD in Library Science, MLIS, BLIS",
    experience: "25+ years in library management",
    bio: `Umar Kasim Ningi, CLN was born on 7th February, 1970. He is an indigene of Ningi town, Ningi L.G.A. of Bauchi State Nigeria. Attended Ningi Central Primary school from 1977 to 1982, Government secondary school Jama’are from 1983 to 1988. However, he proceed to College for legal and Islamic studies Misau where he obtained Diploma in English, Hausa & Islamic studies in 1992. On August 1st 1993 he was appointed as a Class Teacher by Ningi Local Government Authority. While in the service, he obtained NCE in PES/English, Advance Diploma in Information Management from Bayero University, Kano.  This is what gave him the opportunity to study his BA Library and Information Science/English from Bayero University, Kano. He serve in many capacities while he was with Ningi Local Education authority ranking from Class Teacher to Headmaster and later Principal Junior secondary School \ 
Meanwhile, in order to deliver his services effectively and efficiently base on his own profession transferred his services to the Bauchi State Library Board in 2011. He worked as a Library supervisor, College Librarian at Bill and Melinder Gates, college of Health Science and Technology, Ningi Bauchi State. He was a director Schools Libraries Services. He was also appointed Deputy State Librarian and now substantive State Librarian Bauchi State Library Board from May, 2025 to date. \
Conclusively, Umar Kasim Ningi is happily married with many children. His Hobbies are readings and farming. He strongly dislikes arrogancy and lateness.
`,
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

// ... (imports and boardMembers array remain the same)

export default function BoardMembers() {
  const chiefLibrarian = boardMembers[0];
  const otherMembers = boardMembers.slice(1);

  // Different background gradients for variety
  const placeholderGradients = [
    "from-blue-500 to-blue-700",
    "from-green-500 to-green-700", 
    "from-purple-500 to-purple-700",
    "from-orange-500 to-orange-700",
    "from-pink-500 to-pink-700",
  ];

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

        {/* Main Content - Responsive Layout */}
        <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-9 lg:gap-8">
          {/* Chief Librarian - Full width on mobile, col-6 on desktop */}
          <div className="lg:col-span-6">
            <div className="bg-gradient-to-bright from-primary/5 to-blue-100/30 rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                {/* Chief Librarian Image */}
                <div className="md:col-span-1">
                  <div className="relative group">
                    <div className="w-full aspect-square rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                      <Image
                        src={chiefLibrarian.image}
                        alt={chiefLibrarian.name}
                        className="w-full h-full object-cove"
                        priority
                      />
                    </div>
                    <div className="absolute inset-0 bg-accent/20 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  </div>

                  {/* Quick Contact - Hidden on mobile, shown on desktop */}
                  {/* <div className="mt-6 space-y-3 hidden md:block">
                    <div className="flex items-center text-gray-600">
                      <Mail className="h-4 w-4 mr-3" />
                      <span className="text-sm">{chiefLibrarian.email}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Phone className="h-4 w-4 mr-3" />
                      <span className="text-sm">{chiefLibrarian.phone}</span>
                    </div>
                  </div> */}
                </div>

                {/* Chief Librarian Details */}
                <div className="md:col-span-2">
                  <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                      {chiefLibrarian.name}
                    </h3>
                    <div className="flex items-center text-primary font-semibold mb-4">
                      <Award className="h-5 w-5 mr-2" />
                      {chiefLibrarian.position}
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base whitespace-pre-line">
                      {chiefLibrarian.bio}
                    </p>
                  </div>

                  {/* Contact Info - Shown on mobile, hidden on desktop */}
                  <div className="mt-6 space-y-3 md:hidden">
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
              </div>
            </div>
          </div>

          {/* Other Board Members - Full width on mobile, col-3 on desktop */}
          <div className="lg:col-span-3">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Board Members
              </h3>

              <div className="space-y-4 md:space-y-6">
                {otherMembers.map((member, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-4 border border-gray-200 hover:shadow-md transition duration-300 group cursor-pointer"
                  >
                    <div className="flex items-center space-x-4">
                      {/* Member Avatar with Colorful Placeholder */}
                      <div className="shrink-0">
                        <div className={`relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-bright ${placeholderGradients[index % placeholderGradients.length]} `}>
                          {/* Initials Display */}
                          <div className="w-full h-full flex items-center justify-center">
                            <span className="text-white font-semibold text-sm">
                              {member.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                          
                          {/* Hover Effect - User Icon */}
                          <div className="absolute inset-0 flex items-center justify-center bg-black/20 ">
                            <User className="h-5 w-5 text-white" />
                          </div>
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

                    {/* Hover Contact Info - Hidden on mobile, shown on hover for desktop */}
                    <div className="mt-3 pt-3 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition duration-300 hidden md:block">
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

                    {/* Contact Info - Always visible on mobile */}
                    <div className="mt-3 pt-3 border-t border-gray-100 md:hidden">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}