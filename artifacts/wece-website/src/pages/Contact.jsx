import { Mail, Instagram, Linkedin, MessageSquare, Briefcase, Users } from "lucide-react";
import { useState } from "react";

const CONTACT_EMAIL = "wece.uwmadison@gmail.com";
const LINKEDIN_URL = "https://linkedin.com/company/weceuwmadison/";
const INSTAGRAM_URL = "https://www.instagram.com/weceuwmadison/";

const contactCards = [
  {
    icon: Users,
    title: "General Inquiries",
    email: CONTACT_EMAIL,
    description: "Questions about WECE, membership, or general information",
  },
  {
    icon: MessageSquare,
    title: "New Members",
    email: CONTACT_EMAIL,
    description: "Join WECE, get involved, or learn about upcoming events",
  },
  {
    icon: Briefcase,
    title: "Sponsorship",
    email: CONTACT_EMAIL,
    description: "Corporate partnerships and sponsorship opportunities",
  },
];

const faqs = [
  {
    question: "What's the best way to reach WECE?",
    answer:
      `Email is the best way to reach us! Use ${CONTACT_EMAIL}@gmail.com for all inquiries. We'll make sure your message gets to the right team member.`,
  },
  {
    question: "How quickly can I expect a response?",
    answer:
      "We typically respond to emails within 2-3 business days. During busy periods like the start of the semester, responses may take up to a week.",
  },
  {
    question: "Can I schedule a meeting with board members?",
    answer:
      "Yes! We're happy to meet with prospective members, students interested in leadership, or potential sponsors. Email us to schedule a time.",
  },
  {
    question: "How do I stay updated on WECE activities?",
    answer:
      "Follow us on Instagram and LinkedIn, join our mailing list through the Get Involved page, or subscribe to our Google Calendar for event updates.",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", reason: "", message: "" });
  };

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-[#c5050c] to-[#a00409] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl text-white/90">
            Have questions? We'd love to hear from you! Get in touch with the WECE team below.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactCards.map((card) => (
              <div
                key={card.title}
                className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-[#ffc5d0] rounded-lg flex items-center justify-center mb-6">
                  <card.icon className="text-[#c5050c]" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{card.title}</h3>
                <p className="text-gray-600 mb-4">{card.description}</p>
                <a
                  href={`mailto:${card.email}@gmail.com`}
                  className="text-[#c5050c] hover:text-[#a00409] font-semibold inline-flex items-center"
                >
                  <Mail size={18} className="mr-2" />
                  {card.email}@gmail.com
                </a>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="text-center mb-16">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Follow Us</h3>
            <div className="flex justify-center gap-6">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#ffc5d0]/30 text-[#c5050c] rounded-lg hover:bg-[#ffc5d0]/60 transition-colors font-semibold"
              >
                <Instagram size={20} />
                Instagram
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors font-semibold"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Send a Message</h3>
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <div className="text-green-600 text-5xl mb-4">✓</div>
                <h4 className="text-xl font-semibold text-green-800 mb-2">Message Sent!</h4>
                <p className="text-green-700">
                  Thank you for reaching out. We'll get back to you within 2-3 business days.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-[#c5050c] hover:underline font-medium"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
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
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="reason">
                    Reason for Contact
                  </label>
                  <select
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#c5050c] focus:border-transparent bg-white"
                  >
                    <option value="">Select a reason...</option>
                    <option value="general">General Inquiry</option>
                    <option value="membership">Membership / Joining</option>
                    <option value="sponsorship">Sponsorship</option>
                    <option value="events">Events</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#c5050c] focus:border-transparent resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-[#c5050c] text-white rounded-lg hover:bg-[#a00409] transition-colors font-semibold"
                >
                  Send Message
                </button>
              </form>
            )}
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
