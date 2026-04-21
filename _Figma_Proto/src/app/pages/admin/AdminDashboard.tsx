import { useState } from "react";
import {
  Calendar,
  Users,
  FileText,
  Briefcase,
  Bell,
  Settings,
  LogOut,
  Plus,
  Edit,
  Trash2,
  BarChart,
} from "lucide-react";

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    { label: "Total Members", value: "523", icon: Users, color: "bg-blue-500" },
    { label: "Upcoming Events", value: "8", icon: Calendar, color: "bg-green-500" },
    { label: "Active Sponsors", value: "12", icon: Briefcase, color: "bg-purple-500" },
    { label: "Board Members", value: "15", icon: Users, color: "bg-orange-500" },
  ];

  const recentEvents = [
    { name: "Industry Night", date: "March 20, 2026", attendees: 85, status: "Upcoming" },
    { name: "Study Social", date: "March 22, 2026", attendees: 45, status: "Upcoming" },
    { name: "Mentorship Meetup", date: "March 25, 2026", attendees: 30, status: "Upcoming" },
  ];

  const recentMembers = [
    { name: "Emily Zhang", email: "ezhang", joined: "March 15, 2026" },
    { name: "Sarah Johnson", email: "sjohnson", joined: "March 14, 2026" },
    { name: "Maya Patel", email: "mpatel", joined: "March 13, 2026" },
  ];

  const announcements = [
    { title: "Spring Career Fair", message: "Update booth assignments", urgent: true },
    { title: "Board Meeting", message: "Scheduled for next week", urgent: false },
    { title: "Sponsor Proposal", message: "Review new sponsor package", urgent: true },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#c5050c] rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">W</span>
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">WECE Admin</h1>
                <p className="text-xs text-gray-600">Board Portal</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 hover:text-gray-900">
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900">
                <Settings size={20} />
              </button>
              <a
                href="/admin"
                className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-[#c5050c]"
              >
                <LogOut size={18} />
                <span>Logout</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Sarah!</h2>
          <p className="text-gray-600">Here's what's happening with WECE today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                  <stat.icon className="text-white" size={24} />
                </div>
                <BarChart className="text-gray-400" size={20} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="mb-6 border-b border-gray-200">
          <nav className="flex space-x-8">
            {["overview", "events", "members", "sponsors"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 px-1 border-b-2 font-medium text-sm capitalize transition-colors ${
                  activeTab === tab
                    ? "border-[#c5050c] text-[#c5050c]"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Quick Actions</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <Plus className="text-[#c5050c] mb-2" size={24} />
                  <span className="text-sm text-gray-700">Add Event</span>
                </button>
                <button className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <Users className="text-[#c5050c] mb-2" size={24} />
                  <span className="text-sm text-gray-700">Add Member</span>
                </button>
                <button className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <Briefcase className="text-[#c5050c] mb-2" size={24} />
                  <span className="text-sm text-gray-700">Add Sponsor</span>
                </button>
                <button className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <FileText className="text-[#c5050c] mb-2" size={24} />
                  <span className="text-sm text-gray-700">New Post</span>
                </button>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Upcoming Events</h3>
                <button className="text-[#c5050c] hover:text-[#a00409] font-semibold text-sm">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {recentEvents.map((event) => (
                  <div
                    key={event.name}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{event.name}</h4>
                      <p className="text-sm text-gray-600">{event.date}</p>
                      <p className="text-sm text-gray-500">{event.attendees} registered</p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 text-gray-600 hover:text-[#c5050c]">
                        <Edit size={18} />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-red-600">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Members */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Recent Members</h3>
                <button className="text-[#c5050c] hover:text-[#a00409] font-semibold text-sm">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {recentMembers.map((member) => (
                  <div key={member.email} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-[#ffc5d0] rounded-full flex items-center justify-center">
                        <span className="text-[#c5050c] font-semibold">
                          {member.name.split(" ").map((n) => n[0]).join("")}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{member.name}</h4>
                        <p className="text-sm text-gray-600">{member.email}</p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{member.joined}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Announcements */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Announcements</h3>
              <div className="space-y-3">
                {announcements.map((announcement) => (
                  <div
                    key={announcement.title}
                    className={`p-4 rounded-lg ${
                      announcement.urgent ? "bg-red-50 border border-red-200" : "bg-gray-50"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{announcement.title}</h4>
                      {announcement.urgent && (
                        <span className="px-2 py-1 bg-red-200 text-red-800 text-xs rounded-full">
                          Urgent
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{announcement.message}</p>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 px-4 py-2 bg-[#c5050c] text-white rounded-lg hover:bg-[#a00409] transition-colors">
                Create Announcement
              </button>
            </div>

            {/* Content Management */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Content Management</h3>
              <div className="space-y-3">
                <button className="w-full text-left px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="font-semibold text-gray-900">Edit Homepage</div>
                  <div className="text-sm text-gray-600">Update hero banner & featured content</div>
                </button>
                <button className="w-full text-left px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="font-semibold text-gray-900">Manage Board Profiles</div>
                  <div className="text-sm text-gray-600">Update photos and bios</div>
                </button>
                <button className="w-full text-left px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="font-semibold text-gray-900">Update Sponsors</div>
                  <div className="text-sm text-gray-600">Add or remove sponsor logos</div>
                </button>
              </div>
            </div>

            {/* Website Analytics */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Website Analytics</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Page Views</span>
                    <span className="text-sm font-semibold text-gray-900">12,453</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#c5050c] h-2 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Event RSVPs</span>
                    <span className="text-sm font-semibold text-gray-900">348</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "60%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Form Submissions</span>
                    <span className="text-sm font-semibold text-gray-900">89</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: "45%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
