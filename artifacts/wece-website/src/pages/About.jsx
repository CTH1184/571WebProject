import { Heart, Target, Users, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Community",
    description: "We foster meaningful connections and lasting friendships among our members.",
  },
  {
    icon: Target,
    title: "Academic Excellence",
    description: "We support our members in achieving their academic goals through coursework, research, and faculty connections.",
  },
  
  {
    icon: TrendingUp,
    title: "Professional Development",
    description: "We provide opportunities for professional development and connections with partners from industry.",
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

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-[#c5050c] to-[#a00409] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About WECE</h1>
          <p className="text-xl max-w-3xl text-white">
            Building a stronger, more diverse community in electrical and computer engineering at
            UW-Madison.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-4 text-center leading-relaxed">
                WECE is dedicated to empowering women and underrepresented genders in Electrical and
                Computer Engineering at the University of Wisconsin-Madison.
              </p>
              <p className="text-lg text-gray-700 mb-4 text-center leading-relaxed">
                We provide a supportive community, professional development opportunities, and
                connections to help our members thrive in academia and industry. Through mentorship, networking, and advocacy, we work to create a more inclusive
                future for engineering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="w-14 h-14 bg-[#ffc5d0] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-[#c5050c]" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
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
