# Sai Rebbapragada — Portfolio

A dark, data-aesthetic portfolio built with **Next.js 14**, **Tailwind CSS**, and **TypeScript**. Deploy to Vercel in minutes.

---

## 🚀 Quick Deploy to Vercel

### Option A — GitHub (recommended)
1. Create a new GitHub repo and push this folder to it
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repo
4. Vercel auto-detects Next.js — click **Deploy**
5. Done! Your site is live at `https://your-project.vercel.app`

### Option B — Vercel CLI
```bash
npm install -g vercel
cd portfolio
npm install
vercel
```

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── api/contact/route.ts   ← Contact form API (backend)
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── TechStack.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── lib/
│   └── resume.ts              ← ALL your content lives here
└── public/
    └── (place avatar.jpg and resume.pdf here)
```

---

## ✏️ Customizing Content

All content is in **`lib/resume.ts`** — edit name, email, LinkedIn, experience, projects, and skills there.

### Add your photo
Place a photo at `public/avatar.jpg`. Then in `components/Hero.tsx`, replace the initials block with:
```tsx
<img src="/avatar.jpg" alt="Sai" className="w-full h-full object-cover rounded-xl grayscale" />
```

### Add your resume PDF
Place `resume.pdf` in the `public/` folder. The "Download Resume" button in the Hero section already links to `/resume.pdf`.

---

## 📬 Enable Contact Form Emails (Resend — free tier)

1. Sign up at [resend.com](https://resend.com) (free — 3000 emails/month)
2. `npm install resend`
3. Add to Vercel env variables: `RESEND_API_KEY=re_xxxx`
4. Uncomment the Resend block in `app/api/contact/route.ts`

Without Resend, submissions are logged in Vercel function logs (Dashboard → Functions → Logs).

---

## 🛠 Local Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

---

## 🎨 Customization Tips

- **Colors**: Edit CSS variables in `app/globals.css`
- **Fonts**: Change Google Fonts import in `globals.css` + `tailwind.config.js`
- **Sections**: Each section is its own component — add/remove freely in `app/page.tsx`
- **LinkedIn**: Update `resume.linkedin` in `lib/resume.ts`
