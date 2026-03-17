import { Link } from "react-router";
import { ArrowRight, Users, Briefcase, GraduationCap, Network, Calendar, Instagram } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const offerings = [
    {
      icon: Users,
      title: "Community",
      description: "Join a supportive network of women and allies in ECE who understand your journey.",
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
      title: "Industry Night",
      date: "March 20, 2026",
      type: "Professional",
      description: "Network with representatives from leading tech companies",
    },
    {
      title: "Study Social",
      date: "March 22, 2026",
      type: "Academic",
      description: "Join us for a collaborative study session with snacks",
    },
    {
      title: "Mentorship Meetup",
      date: "March 25, 2026",
      type: "Mentorship",
      description: "Connect with upperclassmen and alumni mentors",
    },
  ];

  const sponsors = [
    { name: "Epic Systems", size: "large" },
    { name: "Garmin", size: "large" },
    { name: "Texas Instruments", size: "large" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#c5050c] to-[#a00409] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6TTEyIDM0YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTAtMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00ek0yNCAzNGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTAtMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00ek0yNCAxNGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Empowering Women in Electrical & Computer Engineering
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Building a supportive community for women and underrepresented genders in ECE at
              UW-Madison
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/get-involved"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-[#c5050c] rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Involved
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/events"
                className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors"
              >
                View Events
              </Link>
              <Link
                to="/board"
                className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors"
              >
                Meet the Board
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              WECE creates an inclusive community where women and underrepresented genders in
              electrical and computer engineering can thrive. We provide mentorship, professional
              development opportunities, and a supportive network to help our members succeed in
              their academic and professional journeys.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offerings.map((offering) => (
              <div
                key={offering.title}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-[#ffc5d0] rounded-lg flex items-center justify-center mb-4">
                  <offering.icon className="text-[#c5050c]" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{offering.title}</h3>
                <p className="text-gray-600">{offering.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Join Our Community
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Whether you're looking for academic support, career guidance, or simply a place to
                belong, WECE welcomes you. Our community of students, alumni, and industry
                professionals is here to support your journey in electrical and computer
                engineering.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-[#c5050c] hover:text-[#a00409] font-semibold"
              >
                Learn more about us
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1581740013982-13d788c3bf83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGVuZ2luZWVyaW5nJTIwc3R1ZGVudHMlMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc3MzYzNTA1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Engineering students collaborating"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Upcoming Events</h2>
            <Link
              to="/events"
              className="text-[#c5050c] hover:text-[#a00409] font-semibold inline-flex items-center"
            >
              View all events
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.title}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border-l-4 border-[#c5050c]"
              >
                <div className="flex items-center mb-3">
                  <Calendar className="text-[#c5050c] mr-2" size={20} />
                  <span className="text-sm text-gray-600">{event.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{event.title}</h3>
                <span className="inline-block px-3 py-1 bg-[#ffc5d0] text-[#c5050c] text-sm rounded-full mb-3">
                  {event.type}
                </span>
                <p className="text-gray-600">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">
            Our Sponsors
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We're grateful for the support of industry leaders who share our commitment to
            diversity in engineering.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.name}
                className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span className="text-gray-400 font-semibold text-lg">{sponsor.name}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/sponsors"
              className="inline-flex items-center text-[#c5050c] hover:text-[#a00409] font-semibold"
            >
              Learn about sponsorship opportunities
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Preview Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Follow Our Journey
              </h2>
              <p className="text-gray-600">Stay connected with @weceuwmadison on Instagram</p>
            </div>
            <a
              href="https://www.instagram.com/weceuwmadison/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c5050c] hover:text-[#a00409] font-semibold inline-flex items-center"
            >
              <Instagram className="mr-2" size={20} />
              Follow us
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1573165706511-3ffde6ef1fe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwZW5naW5lZXJpbmclMjB0ZWFtJTIwd29ya2luZ3xlbnwxfHx8fDE3NzM2MzUwNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Instagram post 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1762158007836-25d13ab34c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMG5ldHdvcmtpbmclMjBwcm9mZXNzaW9uYWwlMjBldmVudHxlbnwxfHx8fDE3NzM2Mzg5MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Instagram post 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1643732774973-ff2d0e610d7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMGNpcmN1aXQlMjBib2FyZCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzczNjM1MDU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Instagram post 3"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1573496130141-209d200cebd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50b3JzaGlwJTIwd29tZW4lMjBwcm9mZXNzaW9uYWwlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NzM2Mzg5MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Instagram post 4"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#c5050c] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Involved?</h2>
          <p className="text-xl mb-8 text-white/90">
            Join our community and start your journey with WECE today.
          </p>
          <Link
            to="/get-involved"
            className="inline-flex items-center px-8 py-3 bg-white text-[#c5050c] rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            Join WECE
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}