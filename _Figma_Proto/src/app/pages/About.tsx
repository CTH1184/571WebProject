import { Heart, Target, Users, TrendingUp, Calendar, Award } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function About() {
  const values = [
    {
      icon: Heart,
      title: "Inclusivity",
      description:
        "We create a welcoming space for women and underrepresented genders in engineering.",
    },
    {
      icon: Target,
      title: "Excellence",
      description:
        "We support our members in achieving their academic and professional goals.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "We foster meaningful connections and lasting friendships among our members.",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description:
        "We provide opportunities for personal and professional development.",
    },
  ];

  const timeline = [
    {
      year: "2010",
      title: "WECE Founded",
      description:
        "A group of passionate ECE students established WECE to create a supportive community for women in the field.",
    },
    {
      year: "2015",
      title: "First Industry Partnership",
      description:
        "Launched our corporate sponsorship program, connecting members with leading tech companies.",
    },
    {
      year: "2020",
      title: "Mentorship Program",
      description:
        "Established our formal mentorship program, pairing underclassmen with experienced peers and alumni.",
    },
    {
      year: "2025",
      title: "500+ Members",
      description:
        "Grew to become one of the largest student organizations in the College of Engineering.",
    },
  ];

  const faqs = [
    {
      question: "Who can join WECE?",
      answer:
        "WECE is open to all students interested in supporting women and underrepresented genders in electrical and computer engineering. While our focus is on ECE majors, we welcome students from all engineering disciplines and allies who support our mission.",
    },
    {
      question: "Do I need to be an ECE major to participate?",
      answer:
        "While WECE primarily serves ECE students, we welcome anyone interested in electrical and computer engineering or passionate about supporting diversity in STEM fields.",
    },
    {
      question: "How often does WECE meet?",
      answer:
        "We host a variety of events throughout the semester, including weekly general meetings, coffee breaks, professional development workshops, and social events. Check out our Instagram to get the latest updates!",
    },
    {
      question: "What kind of events does WECE organize?",
      answer:
        "We organize professional development workshops, industry networking events, study sessions, coffee breaks, and  community-building events. There's something for everyone!",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#c5050c] to-[#a00409] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About WECE</h1>
          <p className="text-xl max-w-3xl text-white/90">
            Building a stronger, more diverse community in electrical and computer engineering at
            UW-Madison.
          </p>
        </div>
      </section>

      {/* Mission & Background */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Women in Electrical & Computer Engineering (WECE) strives to create an inclusive
                and supportive community for women and underrepresented genders in ECE at
                UW-Madison. We empower our members through mentorship, professional development,
                and meaningful connections.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our organization serves as a bridge between academia and industry, providing
                students with the resources, support, and opportunities they need to thrive in
                their engineering careers.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1562525915-126641fcba71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwbWFkaXNvbiUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3MzYzODkwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="UW-Madison campus"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="w-16 h-16 bg-[#ffc5d0] rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-[#c5050c]" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#c5050c] mb-2">500+</div>
              <div className="text-xl text-gray-700">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#c5050c] mb-2">50+</div>
              <div className="text-xl text-gray-700">Events Annually</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#c5050c] mb-2">25+</div>
              <div className="text-xl text-gray-700">Industry Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <Award className="text-[#c5050c] mb-4" size={32} />
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Professional Development
              </h3>
              <p className="text-gray-700 mb-4">
                Access workshops on resume building, interview skills, technical presentations, and
                career planning. Connect with industry professionals through networking events,
                company visits, and guest speaker panels.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#c5050c] mr-2">•</span>
                  <span>Industry networking events</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c5050c] mr-2">•</span>
                  <span>Resume reviews and mock interviews</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c5050c] mr-2">•</span>
                  <span>Technical skill workshops</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <Users className="text-[#c5050c] mb-4" size={32} />
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Mentorship</h3>
              <p className="text-gray-700 mb-4">
                Connect with upperclassmen, alumni, and industry professionals who can provide
                guidance on academics, career choices, and navigating the engineering field as a
                woman.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#c5050c] mr-2">•</span>
                  <span>Peer mentorship program</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c5050c] mr-2">•</span>
                  <span>Alumni connections</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c5050c] mr-2">•</span>
                  <span>Industry mentor matching</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <Calendar className="text-[#c5050c] mb-4" size={32} />
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Academic Support</h3>
              <p className="text-gray-700 mb-4">
                Join study sessions, get homework help, and access academic resources. Connect with
                peers who understand the challenges of ECE coursework.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#c5050c] mr-2">•</span>
                  <span>Weekly study sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c5050c] mr-2">•</span>
                  <span>Peer tutoring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c5050c] mr-2">•</span>
                  <span>Course planning advice</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <Heart className="text-[#c5050c] mb-4" size={32} />
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Community</h3>
              <p className="text-gray-700 mb-4">
                Build lasting friendships through social events, collaborative projects, and shared
                experiences. Find your support system in the ECE community.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#c5050c] mr-2">•</span>
                  <span>Social events and hangouts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c5050c] mr-2">•</span>
                  <span>Team building activities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c5050c] mr-2">•</span>
                  <span>Supportive peer network</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
