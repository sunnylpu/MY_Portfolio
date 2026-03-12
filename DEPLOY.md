# Deployment Guide

This project is built with **Next.js 15** and **Tailwind CSS**. It is optimized for deployment on Vercel.

## 🚀 Easy Deployment (Vercel)

1.  **Push to GitHub**: Ensure your project is pushed to a GitHub repository.
2.  **Import to Vercel**:
    -   Go to [Vercel Dashboard](https://vercel.com/dashboard).
    -   Click **"Add New..."** -> **"Project"**.
    -   Select your GitHub repository.
3.  **Configure Project**:
    -   **Framework Preset**: Next.js (Auto-detected).
    -   **Root Directory**: `my_portfolio` (since the app is inside this folder).
    -   **Environment Variables**:
        -   `GITHUB_TOKEN`: (Optional) Personal Access Token from GitHub for higher API rate limits.
4.  **Deploy**: Click **Deploy**.

## 🛠 Manual Build & Run

To run the production build locally:

```bash
npm run build
npm start
```

## ⚠️ Important Notes

-   **API Rate Limits**: The dashboard uses a fallback mechanism if GitHub/LeetCode APIs are rate-limited.
-   **Environment Variables**: While optional, adding `GITHUB_TOKEN` is recommended for stable GitHub stats fetching.
