---
name: gh-pages-deploy
description: Deploy a Next.js static site to GitHub Pages. Use when setting up or troubleshooting GitHub Pages deployment.
---

## GitHub Pages Deployment for Next.js

### Required next.config.ts Settings
```typescript
const nextConfig: NextConfig = {
  output: "export",              // Static HTML export to out/
  images: { unoptimized: true }, // No image optimization server in static export
  basePath: "/REPO_NAME",       // Match the GitHub repo name (omit if using custom domain or username.github.io repo)
};
```

### GitHub Actions Workflow
Create `.github/workflows/deploy.yml`:
- Trigger on push to `main` and `workflow_dispatch`
- Set permissions: `contents: read`, `pages: write`, `id-token: write`
- Use `actions/checkout@v4`, `actions/setup-node@v4` (with `cache: npm`)
- Run `npm ci` then `npm run build`
- Upload `out/` directory with `actions/upload-pages-artifact@v3`
- Deploy with `actions/deploy-pages@v4`
- Add concurrency group to cancel in-progress deploys

### GitHub Repo Settings
- Go to Settings > Pages
- Set source to **GitHub Actions** (not "Deploy from a branch")

### Common Issues
- **404 on refresh**: Static export doesn't support dynamic routes without `generateStaticParams`
- **Missing assets**: Ensure `basePath` matches the repo name exactly
- **API calls at build time**: GitHub API is rate-limited to 60 req/hr unauthenticated; add `GITHUB_TOKEN` secret if needed
- **next/image errors**: Must set `images: { unoptimized: true }` for static export
