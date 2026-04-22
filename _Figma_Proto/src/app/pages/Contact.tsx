import { Mail, Instagram, Linkedin, MapPin, MessageSquare, Briefcase, Users } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", reason: "", message: "" });
  };

  const contactCards = [
    {
      icon: Users,
      title: "General Inquiries",
      email: "wece.uwmadison@gmail.com",
      description: "Questions about WECE, membership, or general information",
    },
    {
      icon: MessageSquare,
      title: "New Members",
      email: "wece.uwmadison@gmail.com",
      description: "Join WECE, get involved, or learn about upcoming events",
    },
    {
      icon: Briefcase,
      title: "Sponsorship",
      email: "wece.uwmadison@gmail.com",
      description: "Corporate partnerships and sponsorship opportunities",
    },
  ];

  const faqs = [
    {
      question: "What's the best way to reach WECE?",
      answer:
        "Email is the best way to reach us! Use wece.uwmadison@gmail.com for all inquiries. We'll make sure your message gets to the right team member.",
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

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#c5050c] to-[#a00409] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl text-white/90">
            Have questions? We'd love to hear from you. Get in touch with the WECE team.
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
              </div>
            ))}
          </div>

          {/* Social Media Links */}
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Connect With Us</h3>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.instagram.com/weceuwmadison/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform shadow-md">
                  <Instagram className="text-white" size={28} />
                </div>
                <span className="text-gray-700 font-semibold">@weceuwmadison</span>
              </a>
              <a
                href="https://linkedin.com/company/weceuwmadison/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group"
              >
                <div className="w-16 h-16 bg-[#0077b5] rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform shadow-md">
                  <Linkedin className="text-white" size={28} />
                </div>
                <span className="text-gray-700 font-semibold">WECE UW-Madison</span>
              </a>
              <a
                href="mailto:wece.uwmadison@gmail.com"
                className="flex flex-col items-center group"
              >
                <div className="w-16 h-16 bg-[#c5050c] rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform shadow-md">
                  <Mail className="text-white" size={28} />
                </div>
                <span className="text-gray-700 font-semibold text-sm">wece.uwmadison@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <MapPin className="text-[#c5050c] mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Our Location</h3>
            <p className="text-gray-700 mb-2">Engineering Hall</p>
            <p className="text-gray-700 mb-2">1415 Engineering Drive</p>
            <p className="text-gray-700 mb-4">Madison, WI 53706</p>
            <p className="text-gray-600 text-sm">
              We meet regularly in Engineering Hall. Check our Events page for specific meeting
              times and locations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
            Send Us a Message
          </h2>
          <div className="bg-white rounded-xl shadow-md p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c5050c] bg-white"
                  placeholder="Your name"
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
                  placeholder="your.email@wisc.edu"
                />
              </div>

              <div>
                <label htmlFor="reason" className="block text-gray-700 mb-2">
                  Reason for Contact
                </label>
                <select
                  id="reason"
                  value={formData.reason}
                  onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c5050c] bg-white"
                >
                  <option value="">Select a reason</option>
                  <option value="membership">Membership Inquiry</option>
                  <option value="events">Event Information</option>
                  <option value="sponsorship">Sponsorship Opportunity</option>
                  <option value="board">Join the Board</option>
                  <option value="general">General Question</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c5050c] bg-white resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-[#c5050c] text-white rounded-lg hover:bg-[#a00409] transition-colors font-semibold"
              >
                Send Message
              </button>
            </form>
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