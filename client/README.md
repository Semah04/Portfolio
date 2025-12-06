# Naski Semah - Portfolio Website

Portfolio website showcasing projects, skills, and professional experience as a Fullstack Developer.

## 🚀 Features

- **Modern Design**: Built with Next.js 14 and Tailwind CSS
- **Dark Mode**: Toggle between light and dark themes
- **Responsive**: Fully responsive design for all devices
- **Performance**: Optimized for fast loading and SEO with Next.js Image component
- **Projects Showcase**: Detailed project descriptions with technologies used
- **Contact Form**: Functional contact form with EmailJS integration
- **GitHub Integration**: Live GitHub stats and contribution graph
- **Animations**: Smooth animations with Framer Motion

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel

## 📦 Getting Started

First, install the dependencies:

```bash
npm install
```

### Contact Form Setup (Optional but Recommended)

To make the contact form functional, you'll need to set up EmailJS:

1. Create a `.env.local` file in the `client` directory
2. Add your EmailJS credentials (see `EMAILJS_SETUP.md` for detailed instructions):

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

For detailed setup instructions, see [EMAILJS_SETUP.md](./EMAILJS_SETUP.md)

**Note**: The form will still work without EmailJS (it will log to console), but emails won't be sent.

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🚀 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

### Quick Deploy

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com/new)
3. Set the **Root Directory** to `client`
4. Vercel will automatically detect Next.js and configure the build settings
5. Click Deploy!

### Environment Variables on Vercel

After deploying, make sure to add your EmailJS environment variables in Vercel:

1. Go to your project settings on Vercel
2. Navigate to **Environment Variables**
3. Add:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
4. Redeploy your application

See [EMAILJS_SETUP.md](./EMAILJS_SETUP.md) for detailed instructions.

## 📝 Project Structure

```
client/
├── src/
│   ├── app/          # Next.js app router pages
│   ├── components/   # React components
│   └── lib/          # Utility functions
├── public/           # Static assets
└── package.json      # Dependencies
```

## 🌐 Live Site

Visit the live portfolio at: [naski-semah.netlify.app](https://naski-semah.netlify.app)

## 📧 Contact

- Email: sameh.naski@esprit.tn
- LinkedIn: [linkedin.com/in/sameh-naski](https://www.linkedin.com/in/sameh-naski)
- GitHub: [github.com/naski-semah](https://github.com/naski-semah)
