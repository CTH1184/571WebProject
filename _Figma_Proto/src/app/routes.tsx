import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Board } from "./pages/Board";
import { Events } from "./pages/Events";
import { Sponsors } from "./pages/Sponsors";
import { Contact } from "./pages/Contact";
import { GetInvolved } from "./pages/GetInvolved";
import { AdminLogin } from "./pages/admin/AdminLogin";
import { AdminDashboard } from "./pages/admin/AdminDashboard";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "board", Component: Board },
      { path: "events", Component: Events },
      { path: "sponsors", Component: Sponsors },
      { path: "contact", Component: Contact },
      { path: "get-involved", Component: GetInvolved },
      { path: "*", Component: NotFound },
    ],
  },
  {
    path: "/admin",
    children: [
      { index: true, Component: AdminLogin },
      { path: "dashboard", Component: AdminDashboard },
    ],
  },
]);
