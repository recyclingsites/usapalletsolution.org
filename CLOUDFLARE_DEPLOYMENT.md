# Cloudflare Pages Deployment Guide

## Cloudflare Pages Build Settings

Configure these settings in your Cloudflare Pages project:

### Build Configuration

**Framework preset:** Next.js

**Build command:**
```bash
npm run build
```

**Build output directory:**
```
out
```

**Root directory (advanced):**
```
/
```

### Environment Variables

Add these environment variables in Cloudflare Pages dashboard:

```
NODE_VERSION=18
DB_API_ENDPOINT=https://gallant-goshawk-513.convex.site
DB_API_KEY=<set in Cloudflare, server-side only>
```

`DB_API_KEY` is the site's 1DB key. Add it as an **encrypted secret** (Settings → Variables and Secrets → type *Secret*), for Production and Preview. Only the server route `src/app/api/leads/route.ts` reads it; the browser posts to `/api/leads` and never sees it.

**Never name a key `NEXT_PUBLIC_*`.** Next.js copies every `NEXT_PUBLIC_` value into the JavaScript it sends to visitors, so anyone could read it. Delete any `NEXT_PUBLIC_1DB_API_KEY`, `NEXT_PUBLIC_1DB_API_URL` or `NEXT_PUBLIC_FORM_SLUG` variable left in the Cloudflare project. The form slug is set in the route, not in an environment variable. Never paste a real key into this file or any other file in the repo: it is public.

### Node.js Version

The project requires Node.js 18. This is specified in:
- `.node-version` file
- `.nvmrc` file

Cloudflare will automatically detect and use the correct version.

## Alternative: @cloudflare/next-on-pages

If you want to use Cloudflare's Next.js adapter instead of static export:

### 1. Update next.config.js

Remove the `output: 'export'` line.

### 2. Build command:
```bash
npx @cloudflare/next-on-pages
```

### 3. Output directory:
```
.vercel/output/static
```

### 4. Add compatibility flag

In Cloudflare Pages settings, add:
```
compatibility_flags = ["nodejs_compat"]
```

## Troubleshooting

### Error: "an internal error occurred"

**Solutions:**
1. Ensure Node.js version is set to 18 or 20
2. Check that all environment variables are set
3. Verify build command is `npm run build`
4. Verify output directory is `out`
5. Clear build cache and retry

### Build Fails

**Check:**
- Node version compatibility
- Dependencies are installed correctly
- No TypeScript errors (run `npm run build` locally first)
- All required environment variables are set

### Images Not Loading

Make sure `unoptimized: true` is set in next.config.js:
```js
images: {
  unoptimized: true,
}
```

## Manual Deployment

If automatic deployment fails, you can deploy manually:

```bash
# Build the project
npm run build

# The output will be in the 'out' directory
# Upload the contents of 'out' directory to Cloudflare Pages
```

## Support

If issues persist, check:
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
# Deployment Status

Last updated: Mon Feb  9 13:22:02 CST 2026
