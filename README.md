# Jeff Williams Portfolio - jeffwilliams.dev

Personal portfolio and blog for Jeff Williams, Data Engineer specializing in cloud data platforms, ETL pipelines, and modern data stack technologies.

## Live Site

| Platform | URL                                          |
| -------- | -------------------------------------------- |
| Vercel   | [jeffwilliams.dev](https://jeffwilliams.dev) |

## Tech Stack

- **Framework:** [Astro](https://astro.build/) v5
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Deployment:** [Vercel](https://vercel.com/)
- **Content:** MDX for blog posts and projects

## Features

- Static site generation with Astro
- Blog with MDX content
- Light/dark mode with multiple color themes
- Fully responsive design
- Image optimization and galleries
- SEO optimized with dynamic Open Graph images
- RSS and JSON feeds
- Giscus comments integration
- View transitions and animations

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/JeffWilliams2/jeffs-portfolio.git
cd jeffs-portfolio

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Environment Variables

Create a `.env.production` file for production builds:

```bash
SITE_URL=https://jeffwilliams.dev
PREVIEW_MODE=
PLAUSIBLE_SCRIPT_URL=
PLAUSIBLE_SITE_ID=
```

### Build

```bash
# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── content/        # Blog posts and projects (MDX)
├── layouts/        # Page layouts
├── pages/          # Route pages
├── styles/         # CSS and Tailwind config
└── utils/          # Utility functions
```

## Deployment

The site is automatically deployed to Vercel when changes are pushed to the `main` branch.

## License

MIT License - see [LICENSE](LICENSE) for details.

## Credits

This portfolio is built with Astro. Inspiration from:

- [chrismwilliams/astro-theme-cactus](https://github.com/chrismwilliams/astro-theme-cactus) - Theme toggling
