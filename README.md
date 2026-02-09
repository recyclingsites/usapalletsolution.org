# USA Pallet Solution

A modern, futuristic website for USA Pallet Solution - a comprehensive pallet services company specializing in buying, selling, recycling, and transporting new and used pallets.

## Features

- 🎨 Modern futuristic design with electric purple and neon cyan color scheme
- 📱 Fully responsive mobile-friendly layout
- 🌐 Multiple pages with dropdown navigation menus
- 📝 Integrated lead capture forms with 1db API
- ⚡ Built with Next.js 14 and deployed on Cloudflare Pages
- 🎭 Smooth animations with Framer Motion
- 🎯 Floating contact button that follows scroll
- 🔒 Environment variables for sensitive data

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Deployment:** Cloudflare Pages
- **Font:** Space Grotesk (Google Fonts)
- **Lead Management:** 1db API

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd usapalletsolution.org
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file and add your environment variables:
```env
NEXT_PUBLIC_1DB_API_KEY=your_api_key_here
NEXT_PUBLIC_1DB_API_URL=https://gallant-goshawk-513.convex.site/v1/leads
NEXT_PUBLIC_FORM_SLUG=usapalletsolution-org-contact
NEXT_PUBLIC_SITE_URL=https://usapalletsolution.org
NEXT_PUBLIC_COMPANY_EMAIL=info@usapalletsolution.org
NEXT_PUBLIC_COMPANY_ADDRESS=Your company address
NEXT_PUBLIC_BUSINESS_HOURS=Your business hours
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to Cloudflare Pages

1. Build for Cloudflare Pages:
```bash
npm run pages:build
```

2. Deploy:
```bash
npm run pages:deploy
```

Or use Cloudflare Pages dashboard to connect your repository for automatic deployments.

## Project Structure

```
usapalletsolution.org/
├── src/
│   ├── app/                    # Next.js 14 App Router
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   ├── globals.css         # Global styles
│   │   ├── about/              # About page
│   │   ├── products/           # Products pages
│   │   │   ├── wooden-pallets/
│   │   │   ├── plastic-pallets/
│   │   │   ├── metal-pallets/
│   │   │   ├── custom-pallets/
│   │   │   └── accessories/
│   │   ├── services/           # Services pages
│   │   │   ├── buying/
│   │   │   ├── selling/
│   │   │   ├── recycling/
│   │   │   ├── transportation/
│   │   │   ├── repair/
│   │   │   └── disposal/
│   │   ├── contact/            # Contact page
│   │   ├── sizes/              # Size guide
│   │   └── resources/          # Resources & articles
│   └── components/             # React components
│       ├── Navigation.tsx      # Sidebar navigation
│       ├── ContactForm.tsx     # Lead capture form
│       └── FloatingContactButton.tsx
├── public/                     # Static assets
├── .env.local                  # Environment variables (not in git)
├── .env.example                # Environment variables template
├── next.config.js              # Next.js configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── wrangler.toml               # Cloudflare configuration
└── package.json                # Project dependencies
```

## Pages

- **Home** (`/`) - Landing page with hero section and features
- **About** (`/about`) - Company history, mission, and values
- **Products** (`/products`) - Product catalog with categories:
  - Wooden Pallets
  - Plastic Pallets
  - Metal Pallets
  - Custom Pallets
  - Accessories
- **Services** (`/services`) - Service offerings:
  - Pallet Buying
  - Pallet Selling
  - Recycling
  - Transportation
  - Repair
  - Disposal
- **Size Guide** (`/sizes`) - Comprehensive pallet size specifications
- **Resources** (`/resources`) - Articles and educational content
- **Contact** (`/contact`) - Contact information and form

## Lead Capture Integration

The website uses 1db for lead management. All contact forms submit to the 1db API with the following fields:

- First Name (required)
- Last Name
- City
- State/Province
- Postal Code (required)
- Email (required)
- Phone (required)
- Company
- Message
- Quantity (required)
- Product Type (required)
- Select Service
- Grade
- Source URL (hidden)

## Color Scheme

- **Primary (Electric Purple):** `#6426ff`
- **Secondary (Neon Cyan):** `#00e6e6`
- **Dark Background:** `#0a0a0f` to `#252530`

## License

Copyright © 2024 USA Pallet Solution. All rights reserved.

## Support

For questions or support, contact: info@usapalletsolution.org
