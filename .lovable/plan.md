

# Multi-Vendor Service Booking Platform — UI Implementation Plan

## Visual Identity
- **Theme**: Dark gradient backgrounds (black to warm brown/orange glow), inspired by the Framer AI-Uni template
- **Cards**: White floating content cards with large rounded corners (16-24px), soft shadows, and blur effects
- **Typography**: Clean, spacious, modern sans-serif hierarchy
- **Accents**: Orange highlight color for CTAs and key elements
- **Icons**: Lucide Icons throughout — no emojis anywhere
- **Animations**: Smooth hover, scroll, and page transitions using Framer Motion

---

## Phase 1 — Foundation & Shared Components

Build reusable components that all pages will use:
- **Layout shells**: Public layout (navbar + footer), Dashboard layout (sidebar + top bar) with role-based navigation
- **Sidebar navigation**: Collapsible sidebar with role-specific menu items (Customer, Vendor, Admin)
- **Top navbar**: Logo, navigation links, role-switcher (for demo purposes), and avatar placeholder
- **Reusable UI pieces**: Service cards, stat cards, data tables, chart wrappers, modal dialogs, form inputs, tabs, and loading/empty state skeletons
- **Dark theme setup**: Custom Tailwind color tokens for the dark gradient aesthetic with orange accents

---

## Phase 2 — Public Pages

### Landing Page (`/`)
- Hero section with bold headline, subtitle, and orange CTA button over a dark gradient background
- Service categories showcase as icon cards in a grid
- Featured services section with horizontally scrollable service cards
- Testimonials section with review cards
- Call-to-action banner section
- Footer with link columns and branding

### Service Listing Page (`/services`)
- Search bar at top
- Filter sidebar (category, price range, rating — UI toggles only)
- Responsive grid of service cards showing image placeholder, title, vendor name, price, and rating

### Service Details Page (`/service/:id`)
- Service image/banner area
- Description, pricing, and duration info
- Vendor profile mini-card with avatar, name, and rating
- Mock available time slots grid
- "Book Now" button (non-functional)

---

## Phase 3 — Auth UI (No Logic)

### Login Page (`/login`)
- Centered card on dark blurred background
- Email/password fields (decorative)
- Google and Facebook login buttons (UI only)
- Link to sign up

### Role Selection Page (`/select-role`)
- Two large cards: Customer and Vendor
- Professional icons, hover animations
- Clicking navigates to the respective dashboard

---

## Phase 4 — Customer Dashboard & Pages

### Customer Dashboard (`/customer/dashboard`)
- Stats cards row: Total Bookings, Upcoming, Completed, Spent (mock numbers)
- Active/upcoming bookings list with status badges
- Notifications panel

### Booking Flow
- `/customer/bookings` — Booking history table with filters and status indicators
- Inline booking flow: select service, pick date/time slot from a calendar grid, confirmation summary card

### Other Customer Pages
- `/customer/profile` — Profile form with avatar, name, contact info (editable UI)
- Reviews page and Notifications page accessible from sidebar

---

## Phase 5 — Vendor Dashboard & Pages

### Vendor Dashboard (`/vendor/dashboard`)
- Earnings summary card (mock totals)
- Booking analytics line/bar chart (Recharts with mock data)
- Ratings overview with star distribution

### Vendor Management Pages
- `/vendor/services` — Table/grid of vendor's services with add/edit modals
- `/vendor/bookings` — Incoming booking requests with accept/decline buttons
- `/vendor/earnings` — Earnings breakdown chart + transaction history table
- Availability management, notifications, and profile pages via sidebar

---

## Phase 6 — Admin Dashboard & Pages

### Admin Dashboard (`/admin/dashboard`)
- Platform-wide stat cards: Total Users, Vendors, Bookings, Revenue (mock)
- Charts: user growth, bookings over time, revenue trend (Recharts)

### Admin Management Pages
- `/admin/vendors` — Vendor approval table with approve/reject actions
- `/admin/categories` — Service category list with add/edit/delete UI
- Review moderation page and admin profile page

---

## Routing & Navigation
All routes wired up with React Router DOM. A demo role-switcher in the navbar lets you jump between Customer, Vendor, and Admin views without any auth logic. Each role has its own sidebar menu.

## Data Approach
All data is static mock JSON. Loading skeleton states and empty states are built into each list/table component. No API calls or database connections.

