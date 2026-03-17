import { Building2, Handshake, Users, Heart, Mail, ExternalLink, FileText } from "lucide-react";
import { Link } from "react-router";

export function Sponsors() {
  const sponsors = [
    {
      name: "University of Wisconsin-Madison Department of Electrical & Computer Engineering",
      website: "https://engineering.wisc.edu/departments/electrical-computer-engineering/",
      description: "Supporting WECE and ECE students at UW-Madison",
    },
    {
      name: "Epic",
      website: "https://www.epic.com/",
      description: "Healthcare software leader",
    },
    {
      name: "Garmin",
      website: "https://www.garmin.com/en-US/",
      description: "GPS technology and wearable innovator",
    },
  ];

  const partnershipBenefits = [
    {
      icon: Heart,
      title: "Diversity & Inclusion",
      description:
        "Support underrepresented groups in electrical and computer engineering and demonstrate your commitment to creating a more inclusive tech industry.",
    },
    {
      icon: Users,
      title: "Connect with Talented Students",
      description:
        "Build relationships with motivated ECE students at UW-Madison through networking events, career fairs, and recruiting opportunities.",
    },
    {
      icon: Building2,
      title: "Events, Talks & Mentorship",
      description:
        "Engage with our community by hosting tech talks, workshops, mentorship sessions, and company information sessions.",
    },
    {
      icon: Handshake,
      title: "Long-Term Industry Relationships",
      description:
        "Develop lasting partnerships with WECE and establish your company as a supporter of the next generation of engineers.",
    },
  ];

  const externalVP = {
    name: "Bhumika Thakur",
    role: "VP of External Relations",
    email: "bsthakur@wisc.edu",
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#c5050c] via-[#a00409] to-[#c5050c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Industry</h1>
          <p className="text-xl max-w-3xl text-white/90 mb-6 leading-relaxed">
            Partner with WECE to support diversity and inclusion in electrical and computer
            engineering while connecting with talented students at UW-Madison. Engage through
            events, tech talks, and mentorship opportunities to build meaningful relationships
            with the next generation of engineers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="https://forms.gle/zLbjDfV7YF1raozS9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#c5050c] rounded-lg hover:bg-gray-100 transition-colors font-semibold shadow-lg hover:shadow-xl"
            >
              <FileText className="mr-2" size={20} />
              Company Database Form
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-semibold"
            >
              <FileText className="mr-2" size={20} />
              Sponsorship Packet [PDF]
            </a>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            Why Partner with WECE?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#ffc5d0] to-[#ffb3c1] rounded-lg flex items-center justify-center mb-6 shadow-md">
                  <benefit.icon className="text-[#c5050c]" size={32} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Sponsors Section */}
      <section className="py-16 bg-gradient-to-br from-[#ffc5d0]/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            Thank You to Our Valued Sponsors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.name}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-between border border-gray-100"
              >
                <div className="flex-1 flex flex-col items-center justify-center mb-6 w-full">
                  <div className="w-full h-32 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center mb-6 border border-gray-200">
                    <div className="text-gray-400 text-center px-4">
                      <Building2 size={48} className="mx-auto mb-2" />
                      <span className="text-sm">Logo</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                    {sponsor.name}
                  </h3>
                  <p className="text-gray-600 text-center text-sm">{sponsor.description}</p>
                </div>
                <a
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-3 bg-[#c5050c] text-white rounded-lg hover:bg-[#a00409] transition-colors font-semibold inline-flex items-center justify-center shadow-md hover:shadow-lg"
                >
                  Visit Website
                  <ExternalLink className="ml-2" size={18} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Have questions about sponsorship or partnership opportunities? Reach out to our VP
                of External Relations.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 max-w-md mx-auto mb-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#ffc5d0] to-[#ffb3c1] rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <span className="text-2xl font-bold text-[#c5050c]">
                    {externalVP.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                  {externalVP.name}
                </h3>
                <p className="text-[#c5050c] font-semibold mb-4">{externalVP.role}</p>
                <a
                  href={`mailto:${externalVP.email}`}
                  className="text-gray-600 hover:text-[#c5050c] transition-colors inline-flex items-center"
                >
                  <Mail size={18} className="mr-2" />
                  {externalVP.email}
                </a>
              </div>
            </div>
            <div className="text-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-[#c5050c] text-white rounded-lg hover:bg-[#a00409] transition-colors font-semibold shadow-md hover:shadow-lg"
              >
                <Mail className="mr-2" size={20} />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#c5050c] via-[#a00409] to-[#c5050c] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Partner with WECE?
          </h2>
          <p className="text-xl mb-8 text-white/90 leading-relaxed">
            Join us in supporting diversity and inclusion in electrical and computer engineering.
            We'd love to explore sponsorship and partnership opportunities with your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://forms.gle/zLbjDfV7YF1raozS9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-[#c5050c] rounded-lg hover:bg-gray-100 transition-colors font-semibold shadow-lg hover:shadow-xl"
            >
              <FileText className="mr-2" size={20} />
              Company Database Form
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-semibold"
            >
              <Mail className="mr-2" size={20} />
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
