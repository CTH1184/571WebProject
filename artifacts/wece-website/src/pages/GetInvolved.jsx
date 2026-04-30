import { useState } from "react";
import { CheckCircle, Calendar, Users, Award, Heart, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const CONTACT_EMAIL = "wece.uwmadison";

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

const interests = [
  "Events & Socials",
  "Professional Development",
  "Mentorship",
  "Leadership Opportunities",
  "Academic Support",
  "Industry Networking",
  "Other",
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
      "Board applications open at the end of each semester semester. We'll send an announcement to our mailing list. Prior involvement in WECE is helpful but not required.",
  },
];

export default function GetInvolved() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    year: "",
    major: "",
    interests: [],
    otherInterest: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const toggleInterest = (interest) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      setSubmitted(true);
      setFormData({ name: "", email: "", year: "", major: "", interests: [], otherInterest: "" });
    } else {
      const { error } = await res.json();
      alert(`Submission failed: ${error}`);
    }
  };

  const hasOther = formData.interests.includes("Other");
  const interestFieldId = (interest) =>
    `interest-${interest.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <div className="flex flex-col">
      <section className="relative py-20 bg-gradient-to-br from-[#c5050c] to-[#a00409] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Involved</h1>
          <p className="text-xl max-w-3xl text-white">
            Ready to be part of the WECE community? Here's how to get started.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            How to Get Started
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-16 h-16 bg-[#c5050c] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            What to Expect
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whatToExpect.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="w-14 h-14 bg-[#ffc5d0] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon aria-hidden="true" className="text-[#8b0000]" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">Join WECE</h2>
          <p className="text-center text-gray-600 mb-10">
            Fill out this form to join our mailing list and stay connected.
          </p>

          {submitted ? (
            <div
              className="bg-green-50 border border-green-200 rounded-xl p-10 text-center"
              role="status"
              aria-live="polite"
            >
              <CheckCircle aria-hidden="true" className="text-green-700 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold text-green-800 mb-2">You're on the list!</h3>
              <p className="text-green-700">
                Thank you for your interest in WECE! We'll be in touch soon with upcoming events and opportunities.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-4 text-[#c5050c] hover:underline font-medium"
              >
                Submit another response
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#c5050c] focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#c5050c] focus:border-transparent"
                    placeholder="your@wisc.edu"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="year">
                    Year
                  </label>
                  <select
                    id="year"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#c5050c] focus:border-transparent bg-white"
                  >
                    <option value="">Select year</option>
                    <option value="freshman">Freshman</option>
                    <option value="sophomore">Sophomore</option>
                    <option value="junior">Junior</option>
                    <option value="senior">Senior</option>
                    <option value="grad">Graduate Student</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="major">
                    Major
                  </label>
                  <input
                    id="major"
                    name="major"
                    type="text"
                    value={formData.major}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#c5050c] focus:border-transparent"
                    placeholder="e.g., ECE, CS, EE..."
                  />
                </div>
              </div>

              <fieldset>
                <legend className="block text-sm font-medium text-gray-700 mb-3">
                  Interests (select all that apply)
                </legend>
                <div className="flex flex-wrap gap-3">
                  {interests.map((interest) => (
                    <label
                      key={interest}
                      htmlFor={interestFieldId(interest)}
                      className={`inline-flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                        formData.interests.includes(interest)
                          ? "bg-[#c5050c] text-white border-[#c5050c]"
                          : "bg-white text-gray-700 border-gray-300 hover:border-[#c5050c] hover:text-[#c5050c]"
                      }`}
                    >
                      <input
                        id={interestFieldId(interest)}
                        name="interests"
                        type="checkbox"
                        value={interest}
                        checked={formData.interests.includes(interest)}
                        onChange={() => toggleInterest(interest)}
                        className="h-4 w-4 accent-[#c5050c]"
                      />
                      {interest}
                    </label>
                  ))}
                </div>

                {hasOther && (
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="otherInterest">
                      Please describe your interest
                    </label>
                    <input
                      id="otherInterest"
                      name="otherInterest"
                      type="text"
                      value={formData.otherInterest}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#c5050c] focus:border-transparent"
                      placeholder="Tell us what else interests you..."
                    />
                  </div>
                )}
              </fieldset>

              <button
                type="submit"
                className="w-full py-3 bg-[#c5050c] text-white rounded-lg hover:bg-[#a00409] transition-colors font-semibold"
              >
                Join the Mailing List
              </button>
            </form>
          )}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            More Ways to Connect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-[#ffc5d0] rounded-lg flex items-center justify-center mx-auto mb-6">
                <Calendar className="text-[#8b0000]" size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Attend an Event</h3>
              <p className="text-gray-700 mb-6">
                Come to any of our events to meet the community - no membership required. New members are always welcome!
              </p>
              <Link
                to="/events"
                className="text-[#8b0000] hover:text-[#a00409] font-semibold inline-flex items-center"
              >
                View Events
                <ArrowRight aria-hidden="true" focusable="false" className="ml-2" size={18} />
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-[#ffc5d0] rounded-lg flex items-center justify-center mx-auto mb-6">
                <Heart aria-hidden="true" focusable="false" className="text-[#8b0000]" size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Mentorship Program</h3>
              <p className="text-gray-700 mb-6">
                Connect with experienced peers and alumni who can guide you through your academic and professional journey.
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}@gmail.com`}
                className="text-[#c5050c] hover:text-[#a00409] font-semibold inline-flex items-center"
              >
                Learn More
                <ArrowRight aria-hidden="true" focusable="false" className="ml-2" size={18} />
              </a>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-[#ffc5d0] rounded-lg flex items-center justify-center mx-auto mb-6">
                <Award aria-hidden="true" focusable="false" className="text-[#8b0000]" size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Apply for Board Positions</h3>
              <p className="text-gray-700 mb-6">
                Take on a leadership role and help shape the future of WECE. Board applications open at the end of each semester.
              </p>
              <Link
                to="/board"
                className="text-[#c5050c] hover:text-[#a00409] font-semibold inline-flex items-center"
              >
                Meet the Board
                <ArrowRight aria-hidden="true" focusable="false" className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 flex items-start">
                  <CheckCircle aria-hidden="true" focusable="false" className="text-[#8b0000] mr-3 mt-1 shrink-0" size={24} />
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
