# 🧱 Bulma Usage Reference – Developer Notes

This document provides a quick reference for using **Bulma CSS** consistently across your project.

---

## ⚙️ Layout & Flex Helpers

| Bulma Class | Usage | When to Use |
|--------------|--------|--------------|
| `is-flex` | Turns an element into a flex container | When aligning children horizontally or vertically |
| `is-flex-direction-column` | Changes flex direction to vertical | Stack items vertically |
| `is-justify-content-center` | Centers items horizontally | To center content within a container |
| `is-align-items-center` | Centers items vertically | Combine with justify for perfect center |
| `is-flex-wrap-wrap` | Allows flex items to wrap | When you want responsive wrapping |
| `is-flex-direction-row` | Horizontal layout (default) | For inline flex layouts like navbar or buttons row |
| `is-justify-content-space-between` | Spreads items evenly with space between | Useful for navbars, toolbars |

---

## 🧭 Containers & Sections

| Bulma Class | Usage | When to Use |
|--------------|--------|--------------|
| `container` | Centers and limits width | Wrap major sections or content blocks |
| `section` | Adds vertical spacing | Top-level content grouping (hero, about, etc.) |
| `hero` | Full-width section with color background | For headers or landing sections |
| `box` | Simple card with border and shadow | For content containers, info blocks, cards |

---

## 🎨 Text & Typography

| Bulma Class | Usage | When to Use |
|--------------|--------|--------------|
| `title` | Large heading | Page or section titles |
| `subtitle` | Smaller heading | Subheadings under title |
| `has-text-centered` | Centers text | For headings or short sections |
| `has-text-right` | Aligns text to right | When aligning labels or totals |
| `has-text-weight-bold` | Makes text bold | Emphasizing words or titles |
| `has-text-grey` | Muted grey text | For subtitles, descriptions |
| `has-text-primary` | Text in primary color | Highlighting key words |
| `is-size-1` → `is-size-7` | Font size scale | Adjust text size quickly |

---

## 🎛️ Buttons

| Bulma Class | Usage | When to Use |
|--------------|--------|--------------|
| `button` | Base button style | Always required for buttons |
| `is-primary` | Main CTA (default blue) | For main actions |
| `is-link` | Secondary blue button | For navigation or less important actions |
| `is-info` | Informational (light blue) | For help/info actions |
| `is-success` | Success/confirmation | For “Saved”, “Done”, etc. |
| `is-warning` | Warning button | For alert-type actions |
| `is-danger` | Red destructive action | For delete, remove, cancel |
| `is-light` | White background | Minimal buttons or on dark backgrounds |
| `is-outlined` | Transparent with border | Secondary or minimal buttons |
| `is-rounded` | Rounded corners | Smooth or aesthetic buttons |

> **Pro tip:** Combine modifiers:
> ```html
> <button class="button is-primary is-rounded is-outlined">Click Me</button>
> ```

---

## 🧩 Cards, Boxes & Panels

| Bulma Class | Usage | When to Use |
|--------------|--------|--------------|
| `box` | Simple bordered card | For general use sections |
| `card` | Advanced card component | For project items, blogs |
| `card-header`, `card-content`, `card-footer` | Internal card structure | When building reusable card layouts |
| `panel` | Vertical navigation or grouped items | For admin/dashboard-like layouts |

---

## 🪶 Shadows, Borders & Radii

| Bulma Class | Usage | When to Use |
|--------------|--------|--------------|
| `box` | Has default shadow | Use for any panel/card |
| `is-radiusless` | Removes border-radius | For sharp corners |
| `is-shadowless` | Removes shadow | For flat layout sections |
| `has-background-white` | White background | For clean sections/cards |
| `has-background-light` | Soft grey background | For subtle section separation |

---

## 🧱 Grid System (Columns)

| Bulma Class | Usage | When to Use |
|--------------|--------|--------------|
| `columns` | Parent container | Always wrap column sets |
| `column` | Child flex column | For each block |
| `is-half`, `is-one-third`, `is-one-quarter` | Width modifiers | Define column widths |
| `is-variable is-8` | Adds variable gap | When spacing columns responsively |

Example:
```html
<div class="columns is-variable is-8">
  <div class="column is-one-third">Left</div>
  <div class="column">Right</div>
</div>
```

---

## 🧭 Navbar

| Bulma Class | Usage | When to Use |
|--------------|--------|--------------|
| `navbar` | Main navbar container | Always use for headers |
| `navbar-brand` | Left section (logo) | For your logo or name |
| `navbar-burger` | Hamburger icon (mobile) | For toggling nav menu |
| `navbar-menu` | Collapsible area | Contains nav links |
| `navbar-item` | Each navigation link | For routing links or buttons |
| `navbar-end` | Right-aligned items | For social icons, theme toggle |

---

## 💡 Helpers & Utilities

| Bulma Class | Usage | When to Use |
|--------------|--------|--------------|
| `m-5`, `mt-4`, `mb-6`, `p-5` | Margin & padding utilities | Consistent spacing |
| `is-hidden-mobile` | Hide on mobile | Responsive control |
| `is-hidden-tablet` | Hide on tablet | Responsive layouts |
| `has-text-light` | White text | On dark backgrounds |
| `has-background-dark` | Dark background | For hero or footer |
| `is-clickable` | Pointer cursor | For interactive elements |

---

## 🎨 Custom Colors & Theme Overrides

### 🧩 Changing Bulma’s Default Colors

You can override colors in your custom CSS **after importing Bulma**:

```css
/* src/styles/main.css */
@import 'bulma/css/bulma.css';

/* Override Bulma color variables */
:root {
  --bulma-primary-h: 0;
  --bulma-primary-s: 0%;
  --bulma-primary-l: 100%;
}

/* Optional: Add your custom color class */
.has-background-white-custom {
  background-color: #ffffff !important;
  color: #000000 !important;
}
```

Now use it in React:

```jsx
<div className="box has-background-white-custom">Custom White Card</div>
```

---

### 🧩 Adding Your Own Custom Color

1. Create a new file: `src/styles/custom-colors.css`
2. Add:
   ```css
   .is-white {
     background-color: #ffffff !important;
     color: #000 !important;
   }

   .is-glass {
     backdrop-filter: blur(10px);
     background: rgba(255, 255, 255, 0.15);
     border: 1px solid rgba(255, 255, 255, 0.25);
   }
   ```
3. Import it in `main.jsx`:
   ```js
   import './styles/custom-colors.css';
   ```

Now you can do:
```html
<button class="button is-white">White Button</button>
<div class="box is-glass">Glass Section</div>
```

---

## 🧠 React + Bulma Best Practices

| Task | Best Practice |
|------|----------------|
| Import Bulma once | `import 'bulma/css/bulma.min.css';` in `main.jsx` |
| Use `className` | Always use `className` (not `class`) in React |
| Combine Framer Motion + Bulma | Use `<motion.div className="box is-flex">` |
| Keep custom CSS modular | Put overrides in `/src/styles/custom.css` |
| Keep spacing consistent | Use Bulma spacing utilities (`mt-4`, `p-5`, etc.) |
| Use semantic HTML | Combine Bulma classes with `<section>`, `<article>`, `<nav>` |
| Use custom vars | Prefer CSS variables for theme (light/dark) handling |
| Never mix Tailwind | Keep Bulma as your only CSS utility framework |

---

## 🔍 Example – Hero Section

```jsx
<section className="hero is-fullheight has-background-light is-flex is-align-items-center is-justify-content-center">
  <div className="has-text-centered">
    <h1 className="title is-2 has-text-primary">Darshit Shah</h1>
    <h2 className="subtitle is-4 has-text-grey">
      Full Stack Developer | UI Enthusiast
    </h2>
    <button className="button is-primary is-rounded mt-4">Contact Me</button>
  </div>
</section>
```

---

## 🧾 Notes

- Keep all color and theme overrides in one file (`custom-colors.css`).
- Use consistent spacing (`is-flex`, `has-text-centered`, etc.).
- For animations, combine `framer-motion` + Bulma structure.

---

### ✅ Always Remember
> “Consistency beats complexity.  
> If it looks the same, it feels the same — across your whole portfolio.”
