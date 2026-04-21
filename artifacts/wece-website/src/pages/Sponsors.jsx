import { Building2, Handshake, Users, Heart, Mail, ExternalLink, FileText } from "lucide-react";
import { Link } from "wouter";

const CONTACT_EMAIL = "wece.uwmadison";

const sponsors = [
  {
    name: "University of Wisconsin-Madison Department of Electrical & Computer Engineering",
    website: "https://engineering.wisc.edu/departments/electrical-computer-engineering/",
    description: "Supporting WECE and ECE students at UW-Madison",
  },
  {
    name: "Epic Systems",
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
  email: "bsthakur",
};

export default function Sponsors() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
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
              Company Inquiry Form
            </a>
            <a
              href="/WECE-Sponsorship-Packet.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-semibold"
            >
              <FileText className="mr-2" size={20} />
              Sponsorship Packet [PDF]
            </a>
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            Why Partner with WECE?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipBenefits.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex gap-5">
                <div className="w-14 h-14 bg-[#ffc5d0] rounded-xl flex items-center justify-center shrink-0">
                  <Icon className="text-[#c5050c]" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-600">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            Thank You to Our Valued Sponsors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sponsors.map((sponsor) => (
              <a
                key={sponsor.name}
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all hover:border-[#c5050c] border border-transparent group text-center"
              >
                <div className="w-16 h-16 bg-[#ffc5d0] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="text-[#c5050c]" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#c5050c] transition-colors">
                  {sponsor.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{sponsor.description}</p>
                <span className="inline-flex items-center text-[#c5050c] text-sm font-medium">
                  Visit Website <ExternalLink size={14} className="ml-1" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Packet CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#ffc5d0]/20 border border-[#ffc5d0] rounded-2xl p-10 text-center">
            <FileText className="text-[#c5050c] mx-auto mb-4" size={48} />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Download Our Sponsorship Packet</h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Learn about our sponsorship tiers, benefits, and how your company can make a lasting
              impact on the next generation of engineers.
            </p>
            <a
              href="/WECE-Sponsorship-Packet.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#c5050c] text-white rounded-lg hover:bg-[#a00409] transition-colors font-semibold shadow-md"
            >
              <FileText className="mr-2" size={20} />
              Sponsorship Packet [PDF]
            </a>
          </div>
        </div>
      </section>

      {/* Contact VP */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Connect?</h2>
            <p className="text-gray-600 mb-6">
              Reach out to our VP of External Relations to discuss partnership opportunities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="text-gray-700">
                <span className="font-semibold">{externalVP.name}</span> — {externalVP.role}
              </div>
              <a
                href={`mailto:${externalVP.email}@wisc.edu`}
                className="inline-flex items-center px-6 py-2 bg-[#ffc5d0]/30 text-[#c5050c] rounded-lg hover:bg-[#ffc5d0]/50 transition-colors font-semibold"
              >
                <Mail size={16} className="mr-2" />
                {externalVP.email}@wisc.edu
              </a>
            </div>
            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-[#c5050c] text-white rounded-lg hover:bg-[#a00409] transition-colors font-semibold shadow-md"
              >
                <Mail className="mr-2" size={20} />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-br from-[#c5050c] via-[#a00409] to-[#c5050c] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Partner with WECE?</h2>
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
              Company Inquiry Form
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
