# Lakkshit Khare Portfolio

A black-and-cream editorial portfolio built with React, TypeScript, Vite, Tailwind CSS v4, and Lucide React. Motion uses CSS and the native Intersection Observer API, with reduced-motion support.

## Development

Install dependencies with `npm install`, then start the local server with `npm run dev`.

Create a production build with `npm run build`. Vite writes the deployable site to `dist/`.

## Edit Content

`src/data/portfolio.ts` contains the professional information, experience, education, certification, research, skill groups, navigation, social links, and projects.

- GitHub and both "View Project" links point to `https://github.com/LakkshitKhare`.
- The AI Job Matcher live demo points to `https://job-matcher-webapp-lakku.streamlit.app/`.
- LinkedIn links use the profile destination published on Lakkshit Khare's GitHub profile: `https://www.linkedin.com/in/lakkshit-khare-89685320b`.
- Each project's `githubUrl` and optional `liveUrl` can be edited in the data file.
- Unprovided URLs use `#` and display an informative message rather than a fabricated destination.
- The email link is functional. Copying the email requires a secure browser context, such as HTTPS or localhost.

## Structure

- `src/App.tsx`: application entry and section composition.
- `src/components/`: navigation, portfolio sections, project detail dialog, reveal animations, and feedback.
- `src/components/ThemeProvider.tsx` and `ThemeToggle.tsx`: persisted theme preference, system-theme support, and accessible desktop/mobile controls.
- `src/components/EditorialGraphics.tsx`: lightweight orbital linework, a bespoke LK monogram, and illustrative physiological signal graphics.
- `src/components/ProfilePortrait.tsx`: non-circular portrait treatment for the hero and About, with graceful image-error fallback.
- `src/hooks/useAccessibleOverlay.ts`: keyboard focus containment, Escape handling, scroll locking, and focus restoration.
- `src/index.css`: the exact requested font import, Tailwind theme, editorial styles, responsive layouts, and reduced-motion rules.
- `index.html`: title, description, Open Graph and Twitter metadata.
- `public/images/`: optimized JPEG imagery.

## Imagery And Links

The public LinkedIn page did not expose an accessible profile photo. No personal portrait has been substituted or invented. The hero retains its monochrome sculptural study, and About includes a custom LK monogram.

To add the real portrait, upload it to `public/images/` and set `portfolio.portrait.src` in `src/data/portfolio.ts` to its web path (for example, `/images/lakkshit-portrait.jpg`). A verified direct image URL also works. A LinkedIn profile-page URL is not an image source. Set `objectPosition` to adjust the crop. The photo then appears above the hero typography and in the About section without a card, border, or circular crop. A failed image gracefully returns to the existing visual treatment.

The project imagery is conceptual and is labeled accordingly. The research waveforms are explicitly illustrative, not recorded results or medical data. All new graphics inherit the active black/cream palette, adapt to mobile, and respect reduced-motion preferences.

Before publishing, use the final site's absolute image URL in the Open Graph and Twitter image metadata. No deployment domain is assumed in this implementation.

## Interactions

The mobile index, project previews, email link, copy action, section anchors, and back-to-top link are implemented. "View Project" opens GitHub; clicking a project image opens its detailed preview. Overlays support keyboard navigation and Escape to close. Below-the-fold images are lazy-loaded, and decorative motion stops when reduced motion is preferred.

## Appearance

The sun/moon control in the navigation switches between the original dark editorial palette and a cream light palette. The mobile drawer includes the same control. The site initially follows the system's color preference, then saves an explicit choice under `lakkshit-theme` in local storage. It follows system changes until a choice is saved, synchronizes preferences across tabs, and remains usable when storage is unavailable.

An early script in `index.html` applies the theme before rendering to avoid a wrong-theme flash. The browser's theme color, form color scheme, project dialogs, and hero treatment update with the preference. Theme transitions also respect reduced motion.