import { Calendar, MapPin, Clock } from "lucide-react";

const events = [
  {
    title: "Children Story Time",
    date: "2024-01-15",
    time: "10:00 AM",
    location: "Children Section",
    description: "Interactive storytelling session for children aged 3-8",
  },
  {
    title: "Digital Literacy Workshop",
    date: "2024-01-18",
    time: "2:00 PM",
    location: "Computer Lab",
    description: "Learn basic computer skills and internet usage",
  },
  {
    title: "Book Club Meeting",
    date: "2024-01-20",
    time: "4:00 PM",
    location: "Conference Room",
    description:
      'Monthly book discussion - "Things Fall Apart" by Chinua Achebe',
  },
];

export default function Events() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600">
            Join our community programs and learning sessions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition duration-300"
            >
              <div className="bg-primary text-white p-4">
                <h3 className="text-xl font-semibold">{event.title}</h3>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-3" />
                  <span>
                    {new Date(event.date).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>

                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-3" />
                  <span>{event.time}</span>
                </div>

                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-3" />
                  <span>{event.location}</span>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  {event.description}
                </p>

                <button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200 font-semibold">
                  Register for Event
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition duration-200">
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
}
