import { Mail } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Board() {
  const presidents = [
    {
      name: "Brooke Weiss",
      title: "Co-President",
      email: "bsweiss2",
      year: "Senior",
      bio: "Passionate about fostering a strong, supportive community for women in ECE.",
    },
    {
      name: "Natalie Wells",
      title: "Co-President",
      email: "npwells2",
      year: "Senior",
      bio: "Dedicated to advancing opportunities and creating meaningful connections for WECE members.",
    },
  ];

  const operations = [
    {
      name: "Aayushi Singh",
      title: "VP of Operations",
      email: "aayushi.singh",
      year: "Junior",
      bio: "Ensuring smooth operations and exceptional member experiences.",
    },
    {
      name: "Anna Huang",
      title: "Director of Social Media & Marketing",
      email: "ahuang62",
      year: "Sophomore",
      bio: "Growing WECE's presence through strategic marketing and social media engagement.",
    },
    {
      name: "Audrey Song",
      title: "Director of New Member",
      email: "arsong",
      year: "Sophomore",
      bio: "Welcoming and onboarding new members to the WECE community.",
    },
  ];

  const internals = {
    name: "Jovita D'Souza",
    title: "VP of Internal Relations",
    email: "jdsouza4",
    year: "Junior",
    bio: "Building strong internal connections and member engagement within WECE.",
  };

  const externals = [
    {
      name: "Bhumika Thakur",
      title: "VP of External Relations",
      email: "bsthakur",
      year: "Junior",
      bio: "Creating valuable partnerships with industry and external organizations.",
    },
    {
      name: "Alison Wortley",
      title: "Co-Director of Professional Development",
      email: "awortley",
      year: "Sophomore",
      bio: "Organizing professional development workshops and career-building opportunities.",
    },
    {
      name: "Mahathi Karthikeyan",
      title: "Co-Director of Professional Development",
      email: "mkarthikeyan",
      year: "Sophomore",
      bio: "Connecting members with industry professionals and career resources.",
    },
  ];

  const finance = {
    name: "Lydia Randall",
    title: "VP of Finance",
    email: "lrandall3",
    year: "Junior",
    bio: "Managing WECE's financial operations and ensuring responsible resource allocation.",
  };

  const seniorAdvisors = [
    {
      name: "Frankie Cicmil",
      title: "Co-Senior Advisor",
      email: "cicmil",
      year: "Super Senior",
      bio: "Providing guidance and mentorship to the WECE board and members.",
    },
    {
      name: "Abby Rokus",
      title: "Co-Senior Advisor",
      email: "arokus",
      year: "Super Senior",
      bio: "Supporting leadership continuity and sharing organizational knowledge.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-[#c5050c] via-[#a00409] to-[#c5050c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet the Team</h1>
          <p className="text-xl text-white/90">
            Meet the student leaders behind WECE at UW–Madison.
          </p>
        </div>
      </section>

      {/* President Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
              President
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {presidents.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="aspect-[239/300] w-full bg-gradient-to-br from-[#ffc5d0] to-[#ffb3c1] flex items-center justify-center">
                  <ImageWithFallback
                    src=""
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#c5050c] font-semibold mb-1">{member.title}</p>
                  <p className="text-gray-600 text-sm mb-3">{member.year}</p>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">{member.bio}</p>
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center text-gray-600 hover:text-[#c5050c] transition-colors"
                    aria-label="Email"
                  >
                    <Mail size={18} className="mr-2" />
                    <span className="text-sm">{member.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operations Section */}
      <section className="py-16 bg-gradient-to-br from-[#ffc5d0]/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
              Operations
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {operations.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="aspect-[239/300] w-full bg-gradient-to-br from-[#ffc5d0] to-[#ffb3c1] flex items-center justify-center">
                  <ImageWithFallback
                    src=""
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#c5050c] font-semibold mb-1 text-sm">
                    {member.title}
                  </p>
                  <p className="text-gray-600 text-sm mb-3">{member.year}</p>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">{member.bio}</p>
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center text-gray-600 hover:text-[#c5050c] transition-colors"
                    aria-label="Email"
                  >
                    <Mail size={16} className="mr-2" />
                    <span className="text-sm">{member.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internals Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
              Internals
            </h2>
          </div>
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="aspect-[239/300] w-full bg-gradient-to-br from-[#ffc5d0] to-[#ffb3c1] flex items-center justify-center">
                <ImageWithFallback
                  src=""
                  alt={internals.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                  {internals.name}
                </h3>
                <p className="text-[#c5050c] font-semibold mb-1">{internals.title}</p>
                <p className="text-gray-600 text-sm mb-3">{internals.year}</p>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">{internals.bio}</p>
                <a
                  href={`mailto:${internals.email}`}
                  className="flex items-center text-gray-600 hover:text-[#c5050c] transition-colors"
                  aria-label="Email"
                >
                  <Mail size={18} className="mr-2" />
                  <span className="text-sm">{internals.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Externals Section */}
      <section className="py-16 bg-gradient-to-br from-[#ffc5d0]/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
              Externals
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {externals.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="aspect-[239/300] w-full bg-gradient-to-br from-[#ffc5d0] to-[#ffb3c1] flex items-center justify-center">
                  <ImageWithFallback
                    src=""
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#c5050c] font-semibold mb-1 text-sm">
                    {member.title}
                  </p>
                  <p className="text-gray-600 text-sm mb-3">{member.year}</p>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">{member.bio}</p>
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center text-gray-600 hover:text-[#c5050c] transition-colors"
                    aria-label="Email"
                  >
                    <Mail size={16} className="mr-2" />
                    <span className="text-sm">{member.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Finance Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
              Finance
            </h2>
          </div>
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="aspect-[239/300] w-full bg-gradient-to-br from-[#ffc5d0] to-[#ffb3c1] flex items-center justify-center">
                <ImageWithFallback
                  src=""
                  alt={finance.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                  {finance.name}
                </h3>
                <p className="text-[#c5050c] font-semibold mb-1">{finance.title}</p>
                <p className="text-gray-600 text-sm mb-3">{finance.year}</p>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">{finance.bio}</p>
                <a
                  href={`mailto:${finance.email}`}
                  className="flex items-center text-gray-600 hover:text-[#c5050c] transition-colors"
                  aria-label="Email"
                >
                  <Mail size={18} className="mr-2" />
                  <span className="text-sm">{finance.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Senior Advisors Section */}
      <section className="py-16 bg-gradient-to-br from-[#ffc5d0]/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
              Senior Advisors
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {seniorAdvisors.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="aspect-[239/300] w-full bg-gradient-to-br from-[#ffc5d0] to-[#ffb3c1] flex items-center justify-center">
                  <ImageWithFallback
                    src=""
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#c5050c] font-semibold mb-1">{member.title}</p>
                  <p className="text-gray-600 text-sm mb-3">{member.year}</p>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">{member.bio}</p>
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center text-gray-600 hover:text-[#c5050c] transition-colors"
                    aria-label="Email"
                  >
                    <Mail size={18} className="mr-2" />
                    <span className="text-sm">{member.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            We'd love to see you here!
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Join our community and be part of something meaningful at WECE.
          </p>
          <a
            href="/get-involved"
            className="inline-block px-8 py-3 bg-[#c5050c] text-white rounded-lg hover:bg-[#a00409] transition-colors shadow-md hover:shadow-lg"
          >
            Join Us
          </a>
        </div>
      </section>
    </div>
  );
}
