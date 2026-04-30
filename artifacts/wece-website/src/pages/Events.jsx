import { Link } from "wouter";
import { InstagramEmbed } from "react-social-media-embed";

const INSTAGRAM_URL = "https://www.instagram.com/weceuwmadison/";

const instagramPosts = [
  "https://www.instagram.com/p/DXQDE_ekUs6/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
  "https://www.instagram.com/p/DXM137Limcz/",
  "https://www.instagram.com/p/DW4lkxnke5u/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
  "https://www.instagram.com/p/DWzkhnBEe0R/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
  "https://www.instagram.com/p/DWR_UY5kdh3/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
  "https://www.instagram.com/p/DWPE5PjDimw/",
];

export default function Events() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-[#c5050c] to-[#a00409] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Events</h1>
          <p className="text-xl max-w-3xl text-white">
            Join us for professional development workshops, social events, and more throughout the semester.
          </p>
        </div>
      </section>

      {/* Instagram Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Recent Events</h2>
            <p className="text-gray-600">
              Catch up on our latest events on Instagram.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {instagramPosts.map((url) => (
              <div key={url} className="w-full flex justify-center">
                <InstagramEmbed url={url} width={328} />
              </div>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-1 gap-8 justify-items-center">
            {/* Calendar */}
            <iframe
              src="https://calendar.google.com/calendar/embed?src=wece.uwmadison%40gmail.com&ctz=America%2FChicago"
              title="WECE Google Calendar"
              style={{ border: 0 }}
              width="100%"
              height="600"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Stay Updated */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-8">
            Follow us on Instagram for the latest event announcements and updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#c5050c] text-white rounded-lg hover:bg-[#a00409] transition-colors font-semibold"
            >
              Follow @weceuwmadison
            </a>
            <Link
              to="/get-involved"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#c5050c] text-[#c5050c] rounded-lg hover:bg-[#ffc5d0]/20 transition-colors font-semibold"
            >
              Join Mailing List
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
