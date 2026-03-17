import { useState } from "react";
import { Calendar, Clock, MapPin, Users, Filter } from "lucide-react";
import { Link } from "wouter";

const INSTAGRAM_URL = "https://www.instagram.com/weceuwmadison/";

const categories = ["All", "Professional", "Social", "Academic", "Mentorship", "Industry"];

const categoryColors = {
  Professional: "bg-blue-100 text-blue-700",
  Academic: "bg-green-100 text-green-700",
  Mentorship: "bg-purple-100 text-purple-700",
  Social: "bg-orange-100 text-orange-700",
  Industry: "bg-[#ffc5d0] text-[#c5050c]",
};

const upcomingEvents = [
  {
    title: "Industry Night with Tech Leaders",
    date: "March 20, 2026",
    time: "6:00 PM - 8:00 PM",
    location: "Engineering Hall 1410",
    category: "Industry",
    description:
      "Network with engineers from Microsoft, Google, and Amazon. Learn about career paths and internship opportunities.",
    attendees: 85,
    image: "https://images.unsplash.com/photo-1762158007836-25d13ab34c1c?w=600&q=80",
  },
  {
    title: "Study Social & Pizza Night",
    date: "March 22, 2026",
    time: "5:00 PM - 8:00 PM",
    location: "Union South, Room 208",
    category: "Academic",
    description:
      "Collaborative study session for ECE 252 and ECE 330. Free pizza and snacks provided!",
    attendees: 45,
    image: "https://images.unsplash.com/photo-1581740013982-13d788c3bf83?w=600&q=80",
  },
  {
    title: "Mentorship Coffee Chats",
    date: "March 25, 2026",
    time: "3:00 PM - 5:00 PM",
    location: "Microbial Sciences Building Café",
    category: "Mentorship",
    description:
      "Connect with upperclassmen and alumni mentors over coffee. Discuss academics, career advice, and more.",
    attendees: 30,
    image: "https://images.unsplash.com/photo-1573496130141-209d200cebd8?w=600&q=80",
  },
  {
    title: "Resume & Interview Workshop",
    date: "March 28, 2026",
    time: "6:30 PM - 8:30 PM",
    location: "Engineering Hall 3410",
    category: "Professional",
    description:
      "Polish your resume and practice interview skills with industry professionals and career counselors.",
    attendees: 60,
    image: "https://images.unsplash.com/photo-1573165706511-3ffde6ef1fe3?w=600&q=80",
  },
  {
    title: "Spring Game Night",
    date: "April 2, 2026",
    time: "7:00 PM - 10:00 PM",
    location: "Memorial Union",
    category: "Social",
    description:
      "Unwind with board games, card games, and great company. All skill levels welcome!",
    attendees: 40,
    image: "https://images.unsplash.com/photo-1581740013982-13d788c3bf83?w=600&q=80",
  },
  {
    title: "Technical Skills: Python Workshop",
    date: "April 5, 2026",
    time: "6:00 PM - 8:00 PM",
    location: "Engineering Hall Computer Lab",
    category: "Professional",
    description:
      "Hands-on Python programming workshop covering data analysis and machine learning basics.",
    attendees: 50,
    image: "https://images.unsplash.com/photo-1573165706511-3ffde6ef1fe3?w=600&q=80",
  },
];

export default function Events() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredEvents =
    selectedCategory === "All"
      ? upcomingEvents
      : upcomingEvents.filter((e) => e.category === selectedCategory);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-[#c5050c] to-[#a00409] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Events</h1>
          <p className="text-xl max-w-3xl text-white/90">
            Join us for professional development workshops, social events, and more throughout the semester.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 flex-wrap">
            <Filter size={18} className="text-gray-500 shrink-0" />
            <span className="text-sm font-medium text-gray-700 mr-2">Filter:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === cat
                    ? "bg-[#c5050c] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-16 text-gray-500">
              No events found in this category.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <div
                  key={event.title}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span
                      className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${
                        categoryColors[event.category] || "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {event.category}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{event.title}</h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar size={14} className="mr-2 text-[#c5050c] shrink-0" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock size={14} className="mr-2 text-[#c5050c] shrink-0" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin size={14} className="mr-2 text-[#c5050c] shrink-0" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users size={14} className="mr-2 text-[#c5050c] shrink-0" />
                        {event.attendees} expected
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Stay Updated */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-8">
            Follow us on Instagram for the latest event announcements and updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#c5050c] text-white rounded-lg hover:bg-[#a00409] transition-colors font-semibold"
            >
              Follow @weceuwmadison
            </a>
            <Link
              to="/get-involved"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#c5050c] text-[#c5050c] rounded-lg hover:bg-[#ffc5d0]/20 transition-colors font-semibold"
            >
              Join Mailing List
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
