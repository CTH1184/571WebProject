# WECE UW-Madison Website

## Overview

A fully responsive React web app for WECE (Women in Electrical & Computer Engineering) at UW-Madison. Built from a Figma prototype, it preserves all content, branding, and page structure from the original design.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **Frontend framework**: React 18 + Vite
- **Styling**: Tailwind CSS v4
- **Routing**: Wouter
- **UI components**: shadcn/ui (Radix UI)
- **Icons**: lucide-react

## Structure

```text
artifacts-monorepo/
├── artifacts/
│   ├── wece-website/        # Main WECE React website (at /)
│   │   ├── src/
│   │   │   ├── App.jsx              # Root with routing
│   │   │   ├── main.tsx             # Entry point
│   │   │   ├── index.css            # WECE theme + Tailwind
│   │   │   ├── components/
│   │   │   │   ├── Navigation.jsx   # Sticky responsive navbar with logo
│   │   │   │   ├── Footer.jsx       # Footer with links and socials
│   │   │   │   └── Layout.jsx       # Wraps nav + footer
│   │   │   └── pages/
│   │   │       ├── Home.jsx         # Landing page
│   │   │       ├── About.jsx        # Mission, values, timeline, FAQ
│   │   │       ├── Board.jsx        # Board members by role
│   │   │       ├── Events.jsx       # Filterable events grid
│   │   │       ├── Sponsors.jsx     # Industry/sponsors page + PDF
│   │   │       ├── Contact.jsx      # Contact form + FAQ
│   │   │       └── GetInvolved.jsx  # Interest form with Other field
│   │   └── public/
│   │       ├── wece_logo-abstract.png               # WECE logo (from zip)
│   │       └── WECE-Sponsorship-Packet.pdf # Sponsorship PDF (from zip)
│   └── api-server/          # Express API server
├── lib/                     # Shared libraries
└── ...
```

## WECE Branding

- **Primary color**: Cardinal red `#c5050c`
- **Hover/dark**: `#a00409`
- **Pink accent**: `#ffc5d0`
- **Background**: white / `gray-50` soft neutrals
- **Contact email**: `wece.uwmadison@gmail.com`
- **LinkedIn**: `https://linkedin.com/company/weceuwmadison/`
- **Instagram**: `https://www.instagram.com/weceuwmadison/`

## Key Features

- Responsive on desktop, tablet, and mobile
- Active nav highlighting per page
- Hamburger mobile menu
- Filterable events grid
- Interest form with "Other" option that reveals text input
- Contact form with success state
- Sponsorship Packet PDF linked from Sponsors page
- WECE logo in navbar and footer
- All sponsor/company links open in new tab
