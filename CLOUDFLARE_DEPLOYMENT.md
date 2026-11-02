# Cloudflare Pages deployment

The site deploys to the Cloudflare Pages project `usapalletsolution-org` with the `@cloudflare/next-on-pages` adapter.

- **Build command:** `npx @cloudflare/next-on-pages@1`
- **Build output directory:** `.vercel/output/static`
- **Config:** `wrangler.toml` holds the output directory, the `nodejs_compat` flag and the non-secret `DB_API_ENDPOINT`. Because the file sets `pages_build_output_dir`, Pages ignores plaintext variables set in the dashboard.

## Secrets

The 1DB key is an encrypted secret on the project (`1DB_API_KEY`, Production and Preview). Only `src/app/api/leads/route.ts` reads it; the browser posts to `/api/leads` and never sees it. The route also accepts `DB_API_KEY`.

Never name a key `NEXT_PUBLIC_*`: Next.js copies those values into the JavaScript sent to visitors. Never put a real key in any file in this repo.

The site should move to OpenNext; `@cloudflare/next-on-pages` is deprecated.
