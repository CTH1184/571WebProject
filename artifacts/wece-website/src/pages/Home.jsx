import { Link } from "wouter";
import { ArrowRight, Users, Briefcase, GraduationCap, Network } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/weceuwmadison/";

const offerings = [
  {
    icon: Users,
    title: "Community",
    description: "Join a supportive network of women and allies in Electrical and Computer Engineering who understand your journey.",
  },
  {
    icon: Briefcase,
    title: "Professional Development",
    description: "Access workshops, career fairs, and industry connections to advance your career.",
  },
  {
    icon: GraduationCap,
    title: "Mentorship",
    description: "Connect with peers, alumni, and industry professionals for guidance and support.",
  },
  {
    icon: Network,
    title: "Industry Connections",
    description: "Network with top tech companies and build relationships that last beyond college.",
  },
];

const upcomingEvents = [
  {
    title: "WECE 2026-2027 Elections",
    date: "April 22, 2026",
    type: "Academic",
    description: "Join the WECE board and vote on representatives",
  },
  {
    title: "Technical Org Night",
    date: "April 21, 2026",
    type: "Academic",
    description: "Check out engineering orgs and their projects",
  },
  {
    title: "Collaborative Engineering with Garmin",
    date: "April 13, 2026",
    type: "Professional",
    description: "Connect with representatives at Garmin",
  },
];

const categoryColors = {
  Professional: "bg-blue-100 text-blue-800",
  Academic: "bg-green-100 text-green-800",
  Mentorship: "bg-violet-100 text-violet-800",
  Social: "bg-orange-100 text-orange-800",
  Industry: "bg-[#ffc5d0] text-[#7a0007]",
};

const sponsors = [
  {
    name: "UW-Madison Dept. of ECE",
    website: "https://engineering.wisc.edu/departments/electrical-computer-engineering/",
  },
  { name: "Epic Systems", website: "https://www.epic.com/" },
  { name: "Garmin", website: "https://www.garmin.com/" },
  { name: "Texas Instruments", website: "https://www.ti.com/" },
];

const instagramPosts = [
  {
    src: "https://images.unsplash.com/photo-1573165706511-3ffde6ef1fe3?w=400&q=80",
    alt: "Students collaborating around a table",
  },
  {
    src: "https://images.unsplash.com/photo-1762158007836-25d13ab34c1c?w=400&q=80",
    alt: "Students talking during a networking event",
  },
  {
    src: "https://images.unsplash.com/photo-1643732774973-ff2d0e610d7a?w=400&q=80",
    alt: "Close-up of an electronics circuit board",
  },
  {
    src: "https://images.unsplash.com/photo-1573496130141-209d200cebd8?w=400&q=80",
    alt: "Two people talking during a mentorship session",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#c5050c] to-[#a00409] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_50%,_white_1px,_transparent_1px)] bg-[size:40px_40px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Women in Electrical &amp; Computer Engineering
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white">
              Building a supportive community for women and underrepresented genders in ECE at UW-Madison
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/get-involved"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-[#c5050c] rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Get Involved
                <ArrowRight aria-hidden="true" focusable="false" className="ml-2" size={20} />
              </Link>
              <Link
                to="/events"
                className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-semibold"
              >
                View Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">
            About Us
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Women in Electrical and Computer Engineering (WECE) is a student organization at UW-Madison that provides educational resources, social activities, and networking opportunities for women studying electrical and computer engineering.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {offerings.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="w-14 h-14 bg-[#ffc5d0] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon aria-hidden="true" focusable="false" className="text-[#8b0000]" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Upcoming Events</h2>
            <Link
              to="/events"
              className="text-[#c5050c] hover:text-[#a00409] font-semibold inline-flex items-center text-sm"
            >
              View All <ArrowRight aria-hidden="true" focusable="false" className="ml-1" size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.title} className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <span
                  className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${
                    categoryColors[event.type] || "bg-gray-100 text-gray-700"
                  }`}
                >
                  {event.type}
                </span>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{event.title}</h3>
                <p className="text-[#c5050c] text-sm font-medium mb-2">{event.date}</p>
                <p className="text-gray-600 text-sm">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Sponsors</h2>
          <div className="flex flex-wrap justify-center gap-6 items-center">
            {sponsors.map((s) => (
              <a
                key={s.name}
                href={s.website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-gray-200 rounded-lg px-6 py-4 text-gray-700 font-semibold hover:border-[#c5050c] hover:text-[#c5050c] transition-colors shadow-sm"
              >
                {s.name}
              </a>
            ))}
          </div>
          <div className="mt-8">
            <Link
              to="/sponsors"
              className="text-[#c5050c] hover:text-[#a00409] font-semibold inline-flex items-center"
            >
              View All Sponsors <ArrowRight aria-hidden="true" focusable="false" className="ml-1" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#c5050c] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Involved?</h2>
          <p className="text-xl mb-8 text-white">
            Join our community and start your journey with WECE today.
          </p>
          <Link
            to="/get-involved"
            className="inline-flex items-center px-8 py-3 bg-white text-[#c5050c] rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            Join WECE
            <ArrowRight aria-hidden="true" focusable="false" className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
