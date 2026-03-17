import { Calendar, Clock, MapPin, Users, Instagram, Filter } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Events() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Professional", "Social", "Academic", "Mentorship", "Industry"];

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
      image:
        "https://images.unsplash.com/photo-1762158007836-25d13ab34c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMG5ldHdvcmtpbmclMjBwcm9mZXNzaW9uYWwlMjBldmVudHxlbnwxfHx8fDE3NzM2Mzg5MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
      image:
        "https://images.unsplash.com/photo-1581740013982-13d788c3bf83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGVuZ2luZWVyaW5nJTIwc3R1ZGVudHMlMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc3MzYzNTA1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
      image:
        "https://images.unsplash.com/photo-1573496130141-209d200cebd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50b3JzaGlwJTIwd29tZW4lMjBwcm9mZXNzaW9uYWwlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NzM2Mzg5MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
      image:
        "https://images.unsplash.com/photo-1573165706511-3ffde6ef1fe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwZW5naW5lZXJpbmclMjB0ZWFtJTIwd29ya2luZ3xlbnwxfHx8fDE3NzM2MzUwNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
      image:
        "https://images.unsplash.com/photo-1581740013982-13d788c3bf83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGVuZ2luZWVyaW5nJTIwc3R1ZGVudHMlMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc3MzYzNTA1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
      image:
        "https://images.unsplash.com/photo-1643732774973-ff2d0e610d7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMGNpcmN1aXQlMjBib2FyZCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzczNjM1MDU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const pastEvents = [
    {
      title: "Fall Kickoff Social",
      date: "September 2025",
      image:
        "https://images.unsplash.com/photo-1573165706511-3ffde6ef1fe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwZW5naW5lZXJpbmclMjB0ZWFtJTIwd29ya2luZ3xlbnwxfHx8fDE3NzM2MzUwNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Career Fair Prep Workshop",
      date: "October 2025",
      image:
        "https://images.unsplash.com/photo-1762158007836-25d13ab34c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMG5ldHdvcmtpbmclMjBwcm9mZXNzaW9uYWwlMjBldmVudHxlbnwxfHx8fDE3NzM2Mzg5MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Alumni Panel",
      date: "November 2025",
      image:
        "https://images.unsplash.com/photo-1573496130141-209d200cebd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50b3JzaGlwJTIwd29tZW4lMjBwcm9mZXNzaW9uYWwlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NzM2Mzg5MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Winter Banquet",
      date: "December 2025",
      image:
        "https://images.unsplash.com/photo-1581740013982-13d788c3bf83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGVuZ2luZWVyaW5nJTIwc3R1ZGVudHMlMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc3MzYzNTA1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const filteredEvents =
    selectedCategory === "All"
      ? upcomingEvents
      : upcomingEvents.filter((event) => event.category === selectedCategory);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#c5050c] to-[#a00409] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Events</h1>
          <p className="text-xl max-w-3xl text-white/90">
            Join us for networking, learning, and community building throughout the year.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 overflow-x-auto">
            <Filter className="text-gray-600" size={20} />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  selectedCategory === category
                    ? "bg-[#c5050c] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">Upcoming Events</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredEvents.map((event) => (
              <div
                key={event.title}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block px-3 py-1 bg-[#ffc5d0] text-[#c5050c] text-sm rounded-full font-semibold">
                      {event.category}
                    </span>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Users size={16} className="mr-1" />
                      <span>{event.attendees} attending</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">{event.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar size={18} className="mr-2 text-[#c5050c]" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock size={18} className="mr-2 text-[#c5050c]" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin size={18} className="mr-2 text-[#c5050c]" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <button className="w-full px-6 py-3 bg-[#c5050c] text-white rounded-lg hover:bg-[#a00409] transition-colors">
                    RSVP
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Calendar Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
            Full Event Calendar
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Subscribe to our Google Calendar to stay updated on all WECE events
          </p>
          <div className="bg-gray-100 rounded-xl p-12 text-center">
            <Calendar size={64} className="text-[#c5050c] mx-auto mb-4" />
            <p className="text-gray-600 mb-6">
              Embedded Google Calendar would appear here
              <br />
              <span className="text-sm">(Calendar integration placeholder)</span>
            </p>
            <button className="px-8 py-3 bg-[#c5050c] text-white rounded-lg hover:bg-[#a00409] transition-colors">
              Subscribe to Calendar
            </button>
          </div>
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            Past Event Highlights
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {pastEvents.map((event) => (
              <div key={event.title} className="group relative overflow-hidden rounded-xl">
                <ImageWithFallback
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <div className="text-white">
                    <h3 className="font-semibold">{event.title}</h3>
                    <p className="text-sm text-white/80">{event.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Follow Us on Instagram
            </h2>
            <p className="text-gray-600 mb-6">See more event photos and updates @wece_uw</p>
            <a
              href="https://instagram.com/wece_uw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors"
            >
              <Instagram className="mr-2" size={20} />
              Follow @wece_uw
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#c5050c] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't Miss Out on Future Events
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join our mailing list to receive event notifications and updates.
          </p>
          <a
            href="/get-involved"
            className="inline-block px-8 py-3 bg-white text-[#c5050c] rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            Join Our Mailing List
          </a>
        </div>
      </section>
    </div>
  );
}
