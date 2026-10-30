# USA Pallet Solution

Lead-generation site for usapalletsolution.org. USA Pallet Solution is a referral service: visitors send a quote request, which goes through 1DB to partner suppliers.

## Stack

- Next.js with `@cloudflare/next-on-pages`, deployed on Cloudflare Pages (project `usapalletsolution-org`)
- Tailwind CSS 3 and Framer Motion
- `next/font/google` for Space Grotesk, self-hosted at build time

## Development

```bash
npm install
npm run dev
```

`npm run build` runs the Next build; `npm run pages:build` runs the Cloudflare adapter build.

## Lead capture

`src/components/ContactForm.tsx` posts to `/api/leads` (`src/app/api/leads/route.ts`), which sends the lead to 1DB. See [CLOUDFLARE_DEPLOYMENT.md](CLOUDFLARE_DEPLOYMENT.md) for configuration.

## Content rules

The site makes no claims about staff, facilities, history, reviews, certifications, prices or response times. The only contact detail is `info@usapalletsolution.org`.
