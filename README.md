# 🌱 Tiny Blog

A modern, minimalistic **personal blog** built with [Next.js](https://nextjs.org/) and [Contentlayer](https://contentlayer.dev/).  
Optimized for performance, SEO, and readability, with dark mode support and a responsive design.

## 🚀 Live Demo
🔗 [View Live Blog](https://tiny-blog-six.vercel.app/)

## Features


- ⚡ Fast static site generation & server-side rendering  
- ✏️ Markdown + MDX based posts via Contentlayer  
- 🌗 Dark/Light theme toggle  
- 🖋 Syntax highlighting for code blocks  
- 📱 Fully responsive design  
- 🛠 Easy deployment to Vercel, Netlify, or custom server 

## 🛠 Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js)  
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)  
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwind-css&logoColor=white)  
![Contentlayer](https://img.shields.io/badge/Contentlayer-8B5CF6?logo=contentlayer&logoColor=white)  
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)  


---

## 📂 Project Structure

```
tiny-blog/
├── app/ # Main application layout & pages
├── components/ # UI components
├── data/ # Blog posts and data
├── public/ # Static assets
├── styles/ # Tailwind CSS configuration
├── pages/ # Next.js pages (legacy)
├── next.config.js # Next.js configuration
├── package.json
├── tailwind.config.js
└── README.md
```


## 💻 Getting Started
### Prerequisites
- [Node.js](https://nodejs.org/) v18+  
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Install Dependencies
```bash
git clone https://github.com/chloe-zh97/tiny-blog.git
cd tiny-blog
npm install
```

### Run Locally
npm run dev

### 🏗 Build for Production
```bash
npm run build
npm run start
```

### 🌐 Deployment
### Vercel

- Push your project to GitHub
- Go to [Vercel](https://vercel.com/)
- Import your GitHub repository
- Vercel auto-detects Next.js and deploys your blog

### Self-hosted
Deploy on AWS, DigitalOcean, or any VPS:
```bash
npm run build
npm run start
```

## ❤️ Acknowledgements
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [Contentlayer](https://contentlayer.dev/)
- [Lucide Icons](https://lucide.dev/)