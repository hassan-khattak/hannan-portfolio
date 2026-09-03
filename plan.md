# Hanan Riaz — Portfolio Website Requirements

## 1. Project Overview

Create a premium, highly polished portfolio website for Hanan Riaz, presented primarily as a senior full-stack software engineer and technical lead. The website must communicate strong backend architecture experience, end-to-end product delivery, cloud and infrastructure knowledge, AI integration experience, and technical leadership.

The portfolio must feel intentionally designed rather than assembled from a standard developer template. It should be professional enough for founders, technical hiring managers, engineering leaders, and potential consulting clients while still showing a distinctive technical personality.

`background.txt` is the source of truth for project history, technologies, responsibilities, and measurable outcomes. The existing website at `https://hananriaz.com/` may only be used to recover missing public identity and contact details. It must not dictate the new visual direction or override facts in `background.txt`.

## 2. Primary Goals

- Position Hanan as an experienced full-stack engineer who can own complex products and systems.
- Demonstrate impact through real engineering scale, challenges, and measurable results.
- Present a clear progression from hands-on development to technical leadership.
- Make the portfolio memorable through a cohesive interactive theme.
- Help recruiters and clients understand Hanan's expertise within the first 15 seconds.
- Encourage qualified visitors to initiate contact.
- Remain fast, accessible, responsive, and usable without relying on animation.

## 3. Target Audience

- Founders and product owners seeking a senior technical partner.
- Engineering managers hiring senior full-stack or backend engineers.
- Technical recruiters evaluating experience and technology fit.
- Agencies or consultancies looking for a delivery or architecture lead.
- Developers and collaborators reviewing Hanan's previous work.

## 4. Brand Positioning

### Core Position

Hanan is a full-stack engineer and technical lead who turns complex product requirements into reliable, scalable software—from backend architecture and infrastructure to customer-facing experiences.

### Desired Personality

- Technically credible
- Calm and assured
- Precise
- Experienced
- Product-minded
- Curious and inventive
- Professional without being corporate
- Modern without following short-lived design trends

### Voice and Tone

Copy should be concise, confident, and evidence-led. Avoid inflated claims, excessive jargon, and generic phrases such as "passionate developer," "coding enthusiast," or "digital experiences that inspire."

Prefer concrete language:

- "Handled 5TB+ of data" rather than "worked with big data."
- "Reduced AWS costs by 50%" rather than "optimized cloud infrastructure."
- "Built secure uploads for files exceeding 120GB" rather than "implemented file uploads."
- "Started as the sole developer and later led four remote engineers" rather than "excellent team player."

## 5. Source-of-Truth Rules

- All project facts, responsibilities, metrics, and technologies must come from `background.txt`.
- Do not invent dates, employers, qualifications, education, awards, testimonials, or skill ratings.
- Do not claim ownership of an entire product unless `background.txt` explicitly supports it.
- Public identity details that may be retained from the existing portfolio:
  - Name: Hanan Riaz
  - Email: `hanan@xontrix.com`
  - LinkedIn: `https://www.linkedin.com/in/abdulhananriaz/`
  - Association with Xontrix
- The current site's PM-focused positioning and six-year claim must not be used unless independently confirmed.
- Project descriptions may be rewritten for clarity, but their meaning must remain accurate.

## 6. Central Creative Direction

### Theme Name: Systems in Motion

The design should visualize Hanan's work as a living software system. Interfaces, services, data pipelines, infrastructure, and outcomes should appear connected through a restrained visual language of nodes, paths, grids, status signals, structured labels, and architectural diagrams.

The experience should feel like a sophisticated engineering control surface blended with an editorial portfolio—not a literal terminal, a cyberpunk interface, or a generic SaaS landing page.

### Core Visual Metaphor

The page represents a distributed system:

- Hanan is the architect connecting product requirements to working systems.
- Sections behave like modules within a larger architecture.
- Projects are presented as deployed systems rather than ordinary cards.
- Scrolling represents moving deeper through the system.
- Small animated signals represent data, decisions, and delivery moving through connected components.

The metaphor must remain subtle. Content clarity always takes priority over decoration.

### Intended First Impression

Visitors should immediately think:

1. This person works on serious technical systems.
2. The work has measurable scale and business impact.
3. The portfolio itself demonstrates strong product and design judgment.
4. Hanan can communicate complex work clearly.

## 7. Visual Design System

### 7.1 Overall Appearance

- Dark-first interface with a deep graphite or near-black background.
- Warm, slightly softened light text rather than pure white.
- Signal red (`#e3242b`) used deliberately as the primary color for interaction and system activity.
- Thin structural lines, restrained borders, and low-contrast grid details.
- Large editorial typography balanced with compact monospace metadata.
- Broad negative space to prevent the technical theme from feeling busy.
- Minimal use of shadows; separation should come mainly from tone, borders, spacing, and light.
- Surface depth should use restrained architectural glass: translucent dark panels, controlled background blur, fine edge highlights, and faint red reflections. Avoid glossy or highly transparent glassmorphism.

### 7.2 Color Palette

Recommended core tokens:

| Token | Suggested value | Purpose |
|---|---:|---|
| Canvas | `#0D090A` | Main page background |
| Canvas raised | `#151011` | Cards and elevated regions |
| Surface active | `#1C1415` | Hovered or selected surfaces |
| Text primary | `#F2F0E9` | Headlines and primary copy |
| Text secondary | `#A8B0AA` | Supporting copy |
| Text muted | `#6F7973` | Metadata and inactive labels |
| Structural line | `#342326` | Borders, grids, and connectors |
| Accent | `#E3242B` | Active signals and primary actions |
| Accent soft | `rgba(227, 36, 43, 0.12)` | Subtle active backgrounds |
| Information | `#70B7FF` | Optional data/infrastructure notation |
| Warning | `#F4BE62` | Rare status annotation only |

The red accent should usually occupy less than roughly 10% of a typical viewport. It is a signal, not a background color, except for deliberate high-energy moments such as the capability ticker.

Pure black, pure white, and neon gradients should be avoided. Any blue or amber secondary accent must be subordinate to the primary green accent.

### 7.3 Typography

Use a three-level typographic system:

1. **Display face:** A distinctive but highly readable grotesk or editorial sans serif for the hero and major headings.
2. **Body face:** A neutral modern sans serif optimized for long-form reading.
3. **Monospace face:** Used for labels, technologies, metrics, section indices, system statuses, and small technical annotations.

Suggested combinations include:

- Manrope or Geist for display/body with IBM Plex Mono for technical labels.
- Sora for display, Inter for body, and JetBrains Mono for labels.
- A self-hosted combination is preferred if licensing and performance permit.

Typography requirements:

- Hero name should feel monumental but not oversized beyond the viewport.
- Use fluid sizing with `clamp()`.
- Body copy should generally remain between 16px and 19px on desktop.
- Long text lines should remain around 55–72 characters.
- Monospace labels should be compact, tracked slightly, and never used for long paragraphs.
- Headings should use tight line-height and balanced wrapping.
- Avoid using more than three font families or too many font weights.

### 7.4 Grid and Layout

- Use a 12-column desktop grid with a maximum content width around 1280–1440px.
- Maintain generous outer margins and consistent internal gutters.
- Most reading content should occupy 6–8 columns rather than the entire width.
- Allow selected diagrams or case-study visuals to break into wider columns.
- Use a visible but extremely subtle background grid in key sections only.
- Alternate asymmetric layouts to create rhythm while retaining alignment.
- Use section indices such as `01 / INTRO`, `02 / PROFILE`, and `03 / SELECTED SYSTEMS`.
- Major sections should have generous vertical breathing room, generally 120–180px on large screens.
- Cards should align with the underlying grid and avoid arbitrary floating positions.

### 7.5 Shapes, Borders, and Surfaces

- Corners should be restrained: approximately 2–8px radius.
- Borders should generally be 1px and low contrast.
- Active borders may brighten toward the accent color.
- Avoid pill shapes except for compact filters, status tags, or technology labels.
- Cards should resemble system modules, specification panels, or architectural documents.
- Important panels may use translucent dark surfaces with approximately 8–18px of backdrop blur so the animated system background remains faintly visible through them.
- Glass surfaces must retain strong text contrast and should use a subtle light top edge instead of heavy shadows.
- Each card may have a small header strip containing an index, category, or status.
- Decorative corner marks, coordinates, or connection ports may be used sparingly.

### 7.6 Iconography

- Use a consistent thin-line icon style.
- Prefer simple SVG icons or custom geometric symbols.
- Do not use colorful technology logos as the main visual language.
- Technology names in typeset labels should be favored over a large logo cloud.
- Icons must always support meaning and never function as visual filler.

### 7.7 Imagery and Project Visuals

The experience should not depend on screenshots being available. Case studies should use abstract system diagrams, structured data blocks, maps, pipelines, interface fragments, and outcome visualizations derived from verified project information.

If project screenshots are added later:

- Present them inside clean, minimal frames.
- Use consistent aspect ratios.
- Do not use fake browser chrome with excessive detail.
- Apply gentle tonal treatment so screenshots coexist with the dark visual system.
- Supply meaningful alternative text.

## 8. Animation and Interaction Direction

### 8.1 Motion Principles

Motion must communicate system behavior and hierarchy. It should feel precise, responsive, and engineered.

- Use purposeful movement rather than constant ambient activity.
- Favor opacity, clipping, transforms, and SVG path animation.
- Keep most micro-interactions between 150ms and 300ms.
- Section entrances may take 500–800ms with staggered child elements.
- Avoid springy or cartoon-like motion.
- Use one consistent easing family throughout the site.
- Never delay access to content for an intro sequence.
- Never hijack or smooth-lock native scrolling.

Suggested easing:

- Standard: `cubic-bezier(0.22, 1, 0.36, 1)`
- Exit: `cubic-bezier(0.4, 0, 1, 1)`
- Micro-interaction: `ease-out`

### 8.2 Hero Animation

The hero should contain the site's strongest visual moment: an abstract software architecture that assembles on initial load.

Proposed sequence:

1. The structural grid fades in.
2. Hanan's name and positioning reveal through a clean vertical mask.
3. System nodes appear in a short stagger.
4. Connector paths draw between frontend, API, services, data, and cloud nodes.
5. One or two small signals travel through the completed architecture.
6. The interface settles into a mostly static state.

The full sequence should complete in approximately 1.5–2.2 seconds and must not block interaction.

Potential node labels:

- PRODUCT
- INTERFACE
- API
- SERVICES
- DATA
- CLOUD

These labels describe capabilities rather than falsely representing a specific client's architecture.

### 8.3 Scroll Behavior

- A slim progress rail may indicate the active section.
- Section numbers can change state as their content enters the viewport.
- Connector lines may progressively illuminate as the visitor moves through the page.
- Reveal animations should occur once unless repeating adds meaningful feedback.
- Scrolling backward must not cause distracting resets.

### 8.4 Cursor and Hover Behavior

- Interactive cards should react with a slight border highlight and minimal vertical translation.
- Nearby architecture nodes may glow subtly based on pointer proximity.
- Links should use a clear underline, arrow movement, or color transition.
- Buttons should show tactile hover and pressed states.
- Avoid a custom cursor unless it remains fully usable, unobtrusive, and disabled on touch devices.
- Hover information must also be available through keyboard focus and on touch screens.

### 8.5 Metric Animation

Metrics may count into view once, but their final values must exist in the HTML from the beginning for accessibility and search indexing. Counting must be quick, restrained, and disabled under reduced-motion preferences.

### 8.6 Case-Study Interaction

Desktop case studies may reveal architectural layers or move a data signal through a diagram on hover/focus. Mobile users should see the same information in a stable, stacked layout without requiring hover.

### 8.7 Reduced Motion

When `prefers-reduced-motion: reduce` is enabled:

- Disable traveling signals, counters, parallax, and path drawing.
- Show all content immediately.
- Retain simple color and border state changes.
- Remove unnecessary smooth scrolling.
- Ensure no information is lost.

## 9. Information Architecture

### 9.1 Global Navigation

The navigation should be compact, sticky, and visually integrated into the system theme.

Required elements:

- Hanan monogram or wordmark
- Work
- Expertise
- About/Approach
- Contact
- LinkedIn icon or text link
- Primary contact CTA

Optional:

- Small availability/status indicator, only if its state can be maintained accurately.

On mobile, use a clear menu button and a full-height or compact overlay. Menu transitions should be short and keyboard accessible.

### 9.2 Hero

Required content:

- Name: Hanan Riaz
- Role: Full-Stack Software Engineer / Technical Lead
- Concise positioning statement
- Primary CTA: Explore selected work
- Secondary CTA: Start a conversation
- Supporting technology line
- Animated systems visual

Suggested working headline:

> Engineering ambitious products from architecture to interface.

Suggested supporting copy:

> Full-stack engineer and technical lead building scalable platforms, secure data workflows, cloud infrastructure, and polished customer experiences.

Final copy may be refined during implementation but must remain consistent with `background.txt`.

### 9.3 Impact Snapshot

Feature verified metrics prominently:

- `100K+` active monthly users
- `5TB+` data handled
- `120GB+` secure file uploads
- `50%` reduction in AWS costs
- `4` developers led remotely
- `1,000+` diagnostic reports synchronized per batch

Each metric should include enough context to avoid appearing as an isolated vanity number.

### 9.4 Engineering Profile

Introduce Hanan's range across:

- Full-stack product development
- Backend architecture
- REST APIs and service integrations
- Cloud infrastructure and deployment
- Data-heavy and security-sensitive systems
- AI-enabled applications
- Mobile backend development
- Technical leadership and consultation

The section should use one strong narrative paragraph plus a structured capability panel, not a long biography.

### 9.5 Featured Case Studies

Four projects should receive full case-study treatment.

#### A. Monday Merch

- Built Django architecture integrated with Odoo and Flask microservices.
- Enabled price comparison, quotes, inventory monitoring, one-click restocking, and global shipment tracking.
- Started as the sole developer and progressed to Dev Lead for four remote developers.
- Technologies: Python, Django, Vue.js, Flask, Odoo, PostgreSQL, Docker, GCP.

#### B. Genetiq

- Built a Django backend for secure uploads of files exceeding 120GB.
- Connected Nextflow DNA analysis with report generation and sharing to VR and mobile applications.
- Addressed speed, encryption, firewalling, and global policy requirements with the DevOps team.
- Technologies: Python, Django, Nextflow, AWS, Docker, PostgreSQL.

#### C. On the House

- Led development of a dining and entertainment platform.
- Worked with more than 5TB of data and more than 100,000 active monthly users.
- Refactored legacy code and modernized AWS Elastic Beanstalk infrastructure.
- Reduced AWS costs by 50% while the platform generated millions in revenue.
- Technologies: Python, Django, React Native, AWS, Docker, Kubernetes.

#### D. Tabir Academy

- Built the platform from scratch.
- Developed extensive test preparation and a Learning Box designed to strengthen core concepts.
- Turned an initial consultation into a successful market-ready product.
- Technologies: Python, Django, AI integration.

Each featured case study must include:

- Project name and domain
- Short product context
- Challenge
- Hanan's contribution
- Technical/system approach
- Verified outcome
- Technology list
- Optional visit-project link, clearly marked as external

### 9.6 Project Archive

Include the remaining work in a compact, filterable project system:

- WashMix
- MeetingFlow
- Seattle in Progress
- Crowdbotics
- Dukandaar
- Scuders
- ZipScripts
- Asset Management System

Recommended filters:

- All
- Web platforms
- Mobile products
- AI
- Cloud and infrastructure
- Integrations

Filtering must be keyboard accessible and should not hide essential content from search engines.

### 9.7 Expertise

Organize technologies by engineering responsibility rather than perceived proficiency.

#### Backend

- Python
- Django
- Django REST Framework
- Flask

#### Frontend and Mobile

- Vue.js
- React
- React Native
- HTML
- CSS
- JavaScript

#### Data and Infrastructure

- PostgreSQL
- Docker
- Kubernetes
- AWS
- GCP
- Elastic Beanstalk

#### Specialized Systems and Integrations

- OpenAI API and LLM workflows
- Odoo
- Nextflow
- Blancco
- Apple Health
- Google Fit

Do not use percentage bars, star ratings, years-per-technology, or unsupported expertise levels.

### 9.8 Leadership and Working Approach

Communicate the following using verified examples:

- Moving from sole developer to Dev Lead.
- Leading four developers remotely.
- Building products from scratch.
- Refactoring legacy systems.
- Collaborating with DevOps on security-sensitive infrastructure.
- Consulting with clients and turning early concepts into market-ready products.
- Balancing product requirements with performance, security, and operating cost.

### 9.9 Contact

The closing section should feel direct and confident rather than resembling a generic contact page.

Required:

- Short invitation to discuss a product, system, or engineering challenge.
- Email: `hanan@xontrix.com`
- LinkedIn link
- Copy-email interaction with visible confirmation

Optional:

- Lightweight inquiry form only if a real delivery mechanism is configured.
- Xontrix link if relevant to the final positioning.

Do not ship a form that silently does nothing. If no backend or form service is available, use an email CTA instead.

## 10. Responsive Design

### Desktop

- Use the full architectural composition and asymmetric grid.
- Allow sticky case-study metadata or visuals where it improves storytelling.
- Preserve broad negative space.
- Show richer pointer interactions.

### Tablet

- Reduce decorative layers and column complexity.
- Keep key diagrams but simplify node density.
- Maintain readable two-column layouts where space allows.

### Mobile

- Prioritize content and clear vertical flow.
- Stack case-study copy and diagrams.
- Replace the desktop progress rail with a simpler header or progress treatment.
- Disable pointer-dependent effects.
- Keep touch targets at least 44px.
- Ensure hero typography wraps intentionally without clipping.
- Avoid horizontal scrolling, including inside diagrams and technology lists.

Recommended validation widths: 320px, 375px, 430px, 768px, 1024px, 1280px, 1440px, and 1920px.

## 11. Accessibility Requirements

- Target WCAG 2.2 AA where practical.
- Use semantic HTML landmarks and correct heading order.
- Provide a keyboard-visible skip link.
- Maintain sufficient contrast for text, controls, and meaningful lines.
- Provide highly visible keyboard focus states.
- Ensure all filters, menus, cards, and CTAs work by keyboard.
- Use buttons for actions and links for navigation.
- Provide descriptive alternative text for meaningful imagery.
- Mark decorative visuals as hidden from assistive technology.
- Do not communicate meaning through color alone.
- Respect reduced-motion settings.
- Keep focus controlled correctly in the mobile menu.
- Announce copy-email and form success states accessibly.

## 12. Technical Requirements

The current repository contains `background.txt` and an empty `index.html`. The preferred first implementation is a dependency-light static experience unless future requirements demand a framework.

Recommended implementation:

- Semantic HTML5 in `index.html`.
- Modern CSS using custom properties for all design tokens.
- Modular vanilla JavaScript for filtering, navigation state, and animations.
- Project content represented as structured data if rendering dynamically.
- SVG and CSS for architecture diagrams.
- Intersection Observer for progressive reveals.
- Progressive enhancement: all essential content must remain readable if JavaScript fails.
- No heavy animation or 3D library unless a demonstrated interaction requires it.

If a framework is later introduced, it must have a clear benefit for maintainability, content expansion, or routing rather than being added by default.

## 13. Performance Requirements

- Optimize for a fast first render on mobile connections.
- Avoid large video backgrounds and heavy WebGL scenes.
- Self-host and subset fonts where licensing permits.
- Preload only critical assets.
- Lazy-load below-the-fold imagery.
- Use SVG for diagrams and icons where appropriate.
- Animate transform and opacity whenever possible.
- Prevent cumulative layout shift by reserving asset dimensions.
- Keep third-party scripts to a minimum.
- Aim for strong Lighthouse results in performance, accessibility, best practices, and SEO.

Target guidelines:

- Largest Contentful Paint under 2.5 seconds on a representative mobile profile.
- Cumulative Layout Shift below 0.1.
- Interaction to Next Paint below 200ms where practical.

## 14. SEO and Metadata

- Descriptive page title focused on full-stack engineering.
- Concise meta description based on verified expertise.
- Canonical URL.
- Open Graph and social sharing metadata.
- Person structured data.
- Appropriate project or creative-work structured data where valid.
- Clear crawlable headings and project descriptions.
- Meaningful link labels.
- Favicon and theme color aligned with the visual system.
- Sitemap and robots file if the deployment structure warrants them.

Suggested title:

`Hanan Riaz — Full-Stack Software Engineer & Technical Lead`

## 15. Content and Design Anti-Patterns

The final website must avoid:

- Generic portfolio templates.
- Fake terminal windows or code-rain effects.
- Cyberpunk styling, excessive neon, or glowing every element.
- Large technology-logo clouds.
- Skill percentages or progress bars.
- Unsupported claims or fabricated testimonials.
- Excessive glassmorphism, blur, and gradients.
- Constantly moving backgrounds.
- Scroll-jacking or forced horizontal scrolling.
- Long splash screens or loading sequences.
- Tiny low-contrast text used for visual effect.
- Cards with identical visual weight for every project.
- Autoplay audio or video.
- Contact forms without a working submission path.
- Animation that obscures content or interferes with navigation.
- Desktop-only hover interactions.

## 16. Acceptance Criteria

The website is ready when:

- Hanan is clearly positioned as a full-stack engineer and technical lead in the first viewport.
- The Systems in Motion theme is recognizable and consistent across all sections.
- The page contains the four featured case studies and the complete project archive.
- Every project claim is supported by `background.txt`.
- Verified scale and outcome metrics are contextualized clearly.
- Animation feels polished and purposeful without delaying content.
- The full experience works with reduced motion enabled.
- Navigation and interactive controls work with keyboard and touch input.
- The layout is polished at all specified responsive widths.
- Text remains readable and hierarchy remains clear without JavaScript.
- Contact details are accurate and usable.
- No placeholder copy, dead controls, broken links, or nonfunctional forms remain.
- Performance, accessibility, metadata, and visual quality have received a final review.

## 17. Implementation Sequence

1. Normalize all project content from `background.txt` into a consistent content model.
2. Establish color, type, spacing, grid, border, and motion tokens.
3. Build the semantic page structure and responsive navigation.
4. Implement the hero composition and system architecture animation.
5. Add the impact snapshot and engineering profile.
6. Build the four featured case studies with distinct visual diagrams.
7. Add the accessible, filterable project archive.
8. Add expertise, leadership, and contact sections.
9. Implement responsive refinements and reduced-motion behavior.
10. Add SEO, structured data, social metadata, and final asset optimization.
11. Test accessibility, keyboard operation, mobile behavior, links, and performance.
12. Complete a final visual polish pass for spacing, rhythm, motion, and consistency.

## 18. Final Design Standard

The portfolio should look and behave like a product designed by someone who understands both engineering systems and user experience. Its visual identity must come from disciplined typography, layout, motion, and information design—not decoration alone.

Every visual detail should reinforce one central story: Hanan designs, builds, improves, and leads complex software systems that work at meaningful scale.
