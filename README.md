# Sai Rebbapragada — Personal Portfolio

A modern, dark-themed personal portfolio website built to showcase my experience as a Data Professional. Features smooth animations, a responsive design, and a working contact form — all deployed on Vercel.

🌐 **Live Site:** https://portfolio-alpha-one-vult3knf5t.vercel.app  
💼 **LinkedIn:** https://www.linkedin.com/in/sairohitrebbapragada

---

## Features

- **Hero Section** — Animated particle canvas with floating profile card and key stats
- **About** — Bio, education timeline, and core skills
- **Work Experience** — Timeline-based layout showcasing roles at UnitedHealthcare & Optum
- **Projects** — Cards highlighting real-world data projects with measurable impact
- **Tech Stack** — Animated ticker and categorized skill grid
- **Contact Form** — Functional form backed by a Next.js API route
- **Responsive Design** — Fully optimized for mobile, tablet, and desktop
- **One-Click Deploy** — Auto-deploys to Vercel on every GitHub push

---

## Technology Stack

### Frontend

| Technology | Purpose |
|-----------|---------|
| Next.js 14 (App Router) | React framework & routing |
| TypeScript | Type-safe development |
| Tailwind CSS | Utility-first styling |
| Syne / DM Sans / JetBrains Mono | Typography |
| CSS Animations | Particle canvas, floating card, scroll reveals |

### Backend

| Technology | Purpose |
|-----------|---------|
| Next.js API Routes | Serverless contact form handler |
| Vercel | Hosting & serverless functions |

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts       ← Contact form API (serverless)
│   ├── globals.css            ← Global styles & animations
│   ├── layout.tsx             ← Root layout & SEO metadata
│   └── page.tsx               ← Main page (assembles all sections)
├── components/
│   ├── Navbar.tsx             ← Sticky navigation bar
│   ├── Hero.tsx               ← Hero section with particle canvas & ID card
│   ├── About.tsx              ← About me & education
│   ├── Experience.tsx         ← Work experience timeline
│   ├── Projects.tsx           ← Project showcase cards
│   ├── TechStack.tsx          ← Animated skills ticker & grid
│   ├── Contact.tsx            ← Contact form with validation
│   └── Footer.tsx             ← Footer
├── lib/
│   └── resume.ts              ← Centralized content file (edit here!)
├── public/
│   ├── avatar.jpg             ← Profile photo
│   └── resume.pdf             ← Downloadable resume
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vercel.json
```

---

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sairebbapragada/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser:
```
http://localhost:3000
```

---

## Updating Content

All website content is centralized in **`lib/resume.ts`**. Edit your name, title, bio, experience, projects, skills, and social links there — the entire site updates automatically.

---

## Contact Form Setup

The contact form hits the `/api/contact` serverless route. To enable real email delivery:

1. Sign up at [resend.com](https://resend.com) (free — 3,000 emails/month)
2. Install the package:
```bash
npm install resend
```
3. Add your API key in Vercel environment variables:
```
RESEND_API_KEY=your_key_here
```
4. Uncomment the Resend block in `app/api/contact/route.ts`

Without Resend configured, submissions are logged in **Vercel → Functions → Logs**.

---

## Deployment

This project is deployed on Vercel. Every push to the `main` branch triggers an automatic redeploy.

### Manual Deploy Steps

```bash
# Make changes, then push to GitHub
git add .
git commit -m "your message"
git push
```

Vercel picks it up automatically — no manual steps needed.

---

## Building for Production

```bash
npm run build
npm run start
```

---

## Contributing

1. Fork the repository
2. Create your feature branch:
```bash
git checkout -b feature/YourFeature
```
3. Commit your changes:
```bash
git commit -m "Add YourFeature"
```
4. Push to the branch:
```bash
git push origin feature/YourFeature
```
5. Open a Pull Request

---

## Author

**Satya Venkata Sai Rohit Rebbapragada (Sai)**  
📧 SaiRebbapragada@gmail.com  
💼 [LinkedIn](https://www.linkedin.com/in/sairohitrebbapragada)  
🌐 [Portfolio](https://portfolio-alpha-one-vult3knf5t.vercel.app)
