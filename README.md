# Hanan Riaz — Portfolio

A polished, interactive portfolio for full-stack software engineer and technical lead Hanan Riaz.

The website uses a custom **Systems in Motion** design language inspired by software architecture, distributed services, telemetry, data flow, and technical documentation. Its primary color is `#e3242b`, supported by a warm near-black palette and restrained glass surfaces.

## Preview

Open `index.html` directly in a browser, or serve the directory locally:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

A local server is recommended because it more closely represents production asset loading.

## Project Structure

```text
.
├── index.html       # Semantic page structure and portfolio content
├── style.css        # Design system, responsive layout, and animations
├── script.js        # Interactions, observers, canvas, and command palette
├── background.txt   # Source of truth for professional and project details
├── plan.md          # Complete product and design specification
└── README.md        # Project documentation
```

## Main Features

- Animated software-architecture hero
- Pointer-responsive network background
- Warm dark glass visual system
- Animated scale and telemetry section
- Verified engineering metrics and outcomes
- Four detailed featured case studies
- Accessible, filterable project archive
- Connected expertise visualization
- Scroll-driven working-approach timeline
- Animated contact finale
- Keyboard-accessible command palette
- Responsive navigation and layouts
- Reduced-motion support
- Open Graph, canonical, and structured metadata

## Command Palette

Open the command palette using:

- `Command + K` on macOS
- `Ctrl + K` on Windows or Linux
- The `⌘ K` button in the navigation

The palette can navigate between sections, copy the contact email, and open LinkedIn. It supports arrow-key navigation, Enter to select, and Escape to close.

## Content Guidelines

`background.txt` is the source of truth for project descriptions, technologies, responsibilities, and measurable outcomes.

When changing portfolio content:

- Do not introduce unsupported metrics or claims.
- Keep project descriptions concise and evidence-led.
- Do not add skill percentages or arbitrary proficiency levels.
- Preserve the distinction between verified work and decorative system visuals.
- Update metadata and structured data when changing identity or positioning.

## Customization

### Colors

The primary design tokens are defined at the beginning of `style.css`:

```css
:root {
  --canvas: #0d090a;
  --text: #f2f0e9;
  --secondary: #a8b0aa;
  --line: #342326;
  --accent: #e3242b;
  --accent-rgb: 227, 36, 43;
}
```

Update both `--accent` and `--accent-rgb` together if the primary color changes.

### Contact Details

Contact information appears in `index.html` and in the structured-data block near the bottom of that file. Update both locations when changing the email address or social links.

### Projects

Featured case studies and archive projects are semantic `<article>` elements in `index.html`. Archive filtering uses each card's `data-category` value.

Supported filter categories currently include:

- `web`
- `mobile`
- `ai`
- `cloud`
- `integration`

### Animation

Animation styles live in `style.css`. Runtime behavior and Intersection Observer logic live in `script.js`.

Major animation systems include:

- Background node network
- Hero architecture signals
- Metric counters and telemetry
- Reveal observers
- Section scene transitions
- Expertise activation
- Approach progress tracking
- Archive filtering
- Contact orbit

## Accessibility

The portfolio includes:

- Semantic landmarks and heading hierarchy
- Skip-to-content navigation
- Keyboard-accessible navigation, filters, and command palette
- Visible focus states
- Accessible status announcements
- Touch-friendly controls
- Decorative graphics hidden from assistive technology
- `prefers-reduced-motion` alternatives

Any new interaction should remain usable without hover and should include a reduced-motion fallback when applicable.

## Performance Notes

- The website has no application-framework dependency.
- Visual diagrams use CSS and SVG.
- The background network uses a lightweight canvas animation.
- Device pixel ratio is capped for canvas rendering.
- Below-the-fold animations are activated through Intersection Observer.
- Animation primarily uses transforms and opacity.

Fonts are currently loaded from Google Fonts through `style.css`. For stricter privacy or more predictable production performance, download, subset, and self-host the font files.

## Deployment

The project is static and can be deployed to any static hosting provider, including:

- GitHub Pages
- Cloudflare Pages
- Netlify
- Vercel
- Amazon S3 with CloudFront
- A conventional web server

Deploy the repository root so `index.html`, `style.css`, and `script.js` remain at the same URL level.

Before production deployment:

1. Confirm every external project link still works.
2. Confirm the canonical URL and Open Graph metadata.
3. Add a social-sharing image.
4. Add favicon files.
5. Test on current Chrome, Safari, Firefox, and mobile Safari.
6. Run accessibility and Lighthouse checks.
7. Verify the contact email and LinkedIn profile.

## Browser Support

The intended target is the latest stable version of:

- Chrome
- Safari
- Firefox
- Edge
- Mobile Safari
- Chrome for Android

Browsers without backdrop-filter support will receive opaque fallback surfaces. Essential content and navigation remain available without animation.

## Documentation

See [plan.md](plan.md) for the complete design direction, content architecture, interaction principles, accessibility requirements, technical constraints, and acceptance criteria.
