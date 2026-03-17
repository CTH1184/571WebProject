import { CheckCircle, Mail, Calendar, Users, Award, Heart, ArrowRight } from "lucide-react";
import { useState } from "react";

export function GetInvolved() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    year: "",
    major: "",
    interests: [] as string[],
    otherInterest: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your interest! We'll add you to our mailing list.");
    setFormData({ name: "", email: "", year: "", major: "", interests: [], otherInterest: "" });
  };

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const interests = [
    "Events & Socials",
    "Professional Development",
    "Mentorship",
    "Leadership Opportunities",
    "Academic Support",
    "Industry Networking",
    "Other",
  ];

  const steps = [
    {
      number: 1,
      title: "Join Our Mailing List",
      description:
        "Fill out the interest form below to stay updated on all WECE events and opportunities.",
    },
    {
      number: 2,
      title: "Attend an Event",
      description:
        "Come to any of our events! No commitment required. Check out our Events page for upcoming opportunities.",
    },
    {
      number: 3,
      title: "Get Involved",
      description:
        "Participate in our mentorship program, volunteer for events, or apply for board positions.",
    },
  ];

  const whatToExpect = [
    {
      icon: Users,
      title: "Welcoming Community",
      description:
        "Join a supportive group of students who understand your experiences in ECE. Make lasting friendships and connections.",
    },
    {
      icon: Calendar,
      title: "Regular Events",
      description:
        "From professional workshops to social gatherings, there's always something happening. Attend as many or as few as you'd like.",
    },
    {
      icon: Award,
      title: "Growth Opportunities",
      description:
        "Develop leadership skills, build your professional network, and gain experiences that will serve you throughout your career.",
    },
    {
      icon: Heart,
      title: "No Pressure",
      description:
        "Membership is free and flexible. Participate at your own pace and focus on what interests you most.",
    },
  ];

  const faqs = [
    {
      question: "Is there a membership fee?",
      answer:
        "No! WECE membership is completely free. We believe in making our community accessible to all students.",
    },
    {
      question: "Do I need to be an ECE major to join?",
      answer:
        "While WECE primarily serves ECE students, we welcome anyone interested in electrical and computer engineering or passionate about supporting diversity in STEM.",
    },
    {
      question: "How much time commitment is required?",
      answer:
        "There's no required time commitment! Attend events that interest you and fit your schedule. Many members attend 1-2 events per month, but you're welcome to participate more or less.",
    },
    {
      question: "Can first-year students join?",
      answer:
        "Absolutely! We encourage students of all years to get involved. First-year students especially benefit from our mentorship programs and academic support.",
    },
    {
      question: "How do I apply for board positions?",
      answer:
        "Board applications typically open in the spring semester. We'll send an announcement to our mailing list. Prior involvement in WECE is helpful but not required.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#c5050c] to-[#a00409] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Involved</h1>
          <p className="text-xl max-w-3xl text-white/90">
            Join our community and start making connections that will last throughout your
            engineering career.
          </p>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            What to Expect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whatToExpect.map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-[#ffc5d0] rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="text-[#c5050c]" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps to Join */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            How to Get Started
          </h2>
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#c5050c] text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interest Form */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
            Join Our Community
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Fill out this form to join our mailing list and stay updated on events, opportunities,
            and announcements.
          </p>
          <div className="bg-gray-50 rounded-xl shadow-md p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c5050c] bg-white"
                    placeholder="Jane Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c5050c] bg-white"
                    placeholder="jane@wisc.edu"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="year" className="block text-gray-700 mb-2">
                    Year
                  </label>
                  <select
                    id="year"
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c5050c] bg-white"
                  >
                    <option value="">Select year</option>
                    <option value="freshman">Freshman</option>
                    <option value="sophomore">Sophomore</option>
                    <option value="junior">Junior</option>
                    <option value="senior">Senior</option>
                    <option value="graduate">Graduate Student</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="major" className="block text-gray-700 mb-2">
                    Major
                  </label>
                  <select
                    id="major"
                    value={formData.major}
                    onChange={(e) => setFormData({ ...formData, major: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c5050c] bg-white"
                  >
                    <option value="">Select major</option>
                    <option value="ece">Electrical & Computer Engineering</option>
                    <option value="ee">Electrical Engineering</option>
                    <option value="ce">Computer Engineering</option>
                    <option value="cs">Computer Science</option>
                    <option value="other">Other Engineering</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-3">
                  What are you interested in? (Select all that apply)
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {interests.map((interest) => (
                    <label
                      key={interest}
                      className="flex items-center space-x-3 p-3 bg-white border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50"
                    >
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(interest)}
                        onChange={() => handleInterestToggle(interest)}
                        className="w-5 h-5 text-[#c5050c] border-gray-300 rounded focus:ring-[#c5050c]"
                      />
                      <span className="text-gray-700">{interest}</span>
                    </label>
                  ))}
                </div>
                {formData.interests.includes("Other") && (
                  <div className="mt-3">
                    <label htmlFor="otherInterest" className="block text-gray-700 mb-2">
                      Please specify:
                    </label>
                    <input
                      type="text"
                      id="otherInterest"
                      value={formData.otherInterest}
                      onChange={(e) => setFormData({ ...formData, otherInterest: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c5050c] bg-white"
                      placeholder="Specify your interest"
                    />
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-[#c5050c] text-white rounded-lg hover:bg-[#a00409] transition-colors font-semibold flex items-center justify-center"
              >
                <Mail className="mr-2" size={20} />
                Join Mailing List
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            Ways to Get Involved
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-[#ffc5d0] rounded-lg flex items-center justify-center mb-6">
                <Users className="text-[#c5050c]" size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Attend Events</h3>
              <p className="text-gray-700 mb-6">
                Join us for social events, professional workshops, study sessions, and networking
                opportunities throughout the semester.
              </p>
              <a
                href="/events"
                className="text-[#c5050c] hover:text-[#a00409] font-semibold inline-flex items-center"
              >
                View Events
                <ArrowRight className="ml-2" size={18} />
              </a>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-[#ffc5d0] rounded-lg flex items-center justify-center mb-6">
                <Heart className="text-[#c5050c]" size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Join Mentorship Program
              </h3>
              <p className="text-gray-700 mb-6">
                Connect with upperclassmen and alumni who can provide guidance on academics, career
                planning, and navigating ECE.
              </p>
              <a
                href="/contact"
                className="text-[#c5050c] hover:text-[#a00409] font-semibold inline-flex items-center"
              >
                Learn More
                <ArrowRight className="ml-2" size={18} />
              </a>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-[#ffc5d0] rounded-lg flex items-center justify-center mb-6">
                <Award className="text-[#c5050c]" size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Apply for Board Positions
              </h3>
              <p className="text-gray-700 mb-6">
                Take on a leadership role and help shape the future of WECE. Board applications
                open each spring.
              </p>
              <a
                href="/board"
                className="text-[#c5050c] hover:text-[#a00409] font-semibold inline-flex items-center"
              >
                Meet the Board
                <ArrowRight className="ml-2" size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 flex items-start">
                  <CheckCircle className="text-[#c5050c] mr-3 mt-1 flex-shrink-0" size={24} />
                  {faq.question}
                </h3>
                <p className="text-gray-700 ml-9">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}