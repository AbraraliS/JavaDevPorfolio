
# JavaDevPortfolio

A modern, responsive portfolio website for Java and backend developers, built with Next.js, React, and Tailwind CSS.

## Features

- **Personalized Hero Section**: Showcase your name, title, and a short introduction.
- **Projects Showcase**: Display up to 6 projects on desktop and 2 on mobile, with a "Show More" toggle for mobile users.
- **Skills & Timeline**: Highlight your skills and educational timeline.
- **Certificates & Achievements**: List your certifications and coding achievements.
- **Contact Form**: Visitors can send you a message directly (integrated with Formspree or your custom endpoint).
- **Download Resume**: Easy access to download your resume (PDF).
- **Dark/Light Theme Toggle**: User-friendly theme switcher.
- **Open Source**: Easily customizable and extendable.

## Tech Stack

- [Next.js](https://nextjs.org/) 15
- [React](https://react.dev/) 19
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Radix UI](https://www.radix-ui.com/) components
- [Lucide Icons](https://lucide.dev/)
- [Formspree](https://formspree.io/) (for contact form)

## Folder Structure

```
├── app/                # Next.js app directory (pages, layout, etc.)
├── components/         # Reusable React components
│   ├── sections/       # Page sections (hero, about, projects, etc.)
│   └── ui/             # UI primitives (button, card, etc.)
├── hooks/              # Custom React hooks
├── lib/                # Data and utility functions
├── public/             # Static assets (images, resume, etc.)
├── styles/             # Global and component styles
├── package.json        # Project metadata and scripts
├── README.md           # Project documentation
└── ...
```

## Getting Started

1. **Clone the repository:**
	```sh
	git clone https://github.com/AbraraliS/JavaDevPorfolio.git
	cd JavaDevPorfolio
	```
2. **Install dependencies:**
	```sh
	pnpm install
	```
3. **Run the development server:**
	```sh
	pnpm run dev
	```
	Open [http://localhost:3000](http://localhost:3000) in your browser.
4. **Build for production:**
	```sh
	pnpm run build
	pnpm start
	```

## Deployment

### Deploy to Vercel
1. Push your code to GitHub.
2. Go to [Vercel](https://vercel.com/) and import your repository.
3. Click "Deploy". Vercel will handle the build and provide a live URL.

### Custom Domain
- Add your custom domain in the Vercel dashboard after deployment.

## Customization
- Update your personal info, project data, and links in `lib/data.ts`.
- Replace images and resume in the `public/` folder.
- Edit section components in `components/sections/` for further customization.

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Made with ❤️ by Abrar Ali**
