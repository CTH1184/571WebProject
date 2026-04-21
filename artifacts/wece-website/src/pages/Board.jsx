import { Mail } from "lucide-react";
import { Link } from "wouter";

const CONTACT_EMAIL = "wece.uwmadison";

function MemberCard({ member }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
      <div className="w-20 h-20 bg-gradient-to-br from-[#c5050c] to-[#ffc5d0] rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="text-white text-2xl font-bold">
          {member.name.charAt(0)}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
      <p className="text-[#c5050c] font-medium text-sm mb-1">{member.title}</p>
      <p className="text-gray-500 text-sm mb-3">{member.year}</p>
      <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
      <a
        href={`mailto:${member.email}@wisc.edu`}
        className="inline-flex items-center text-[#c5050c] hover:text-[#a00409] text-sm font-medium transition-colors"
      >
        <Mail size={14} className="mr-1" />
        {member.email}@wisc.edu
      </a>
    </div>
  );
}

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

function SectionHeader({ title }) {
  return (
    <div className="text-center mb-10">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
      <div className="mt-3 mx-auto w-16 h-1 bg-[#c5050c] rounded-full" />
    </div>
  );
}

export default function Board() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-[#c5050c] via-[#a00409] to-[#c5050c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet the Team</h1>
          <p className="text-xl text-white/90">
            Meet the student leaders behind WECE at UW–Madison.
          </p>
        </div>
      </section>

      {/* Presidents */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Co-Presidents" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {presidents.map((m) => <MemberCard key={m.name} member={m} />)}
          </div>
        </div>
      </section>

      {/* Operations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Operations" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {operations.map((m) => <MemberCard key={m.name} member={m} />)}
          </div>
        </div>
      </section>

      {/* Internal Relations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Internal Relations" />
          <div className="max-w-sm mx-auto">
            <MemberCard member={internals} />
          </div>
        </div>
      </section>

      {/* External Relations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="External Relations" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {externals.map((m) => <MemberCard key={m.name} member={m} />)}
          </div>
        </div>
      </section>

      {/* Finance */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Finance" />
          <div className="max-w-sm mx-auto">
            <MemberCard member={finance} />
          </div>
        </div>
      </section>

      {/* Senior Advisors */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Senior Advisors" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {seniorAdvisors.map((m) => <MemberCard key={m.name} member={m} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#c5050c] via-[#a00409] to-[#c5050c] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Questions about WECE?</h2>
          <p className="text-xl mb-8 text-white/90">
            Reach out to us anytime. We're happy to answer questions about WECE, membership, and events.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}@gmail.com`}
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-[#c5050c] rounded-lg hover:bg-gray-100 transition-colors font-semibold shadow-lg"
          >
            <Mail className="mr-2" size={20} />
            {CONTACT_EMAIL}@gmail.com
          </a>
        </div>
      </section>
    </div>
  );
}
