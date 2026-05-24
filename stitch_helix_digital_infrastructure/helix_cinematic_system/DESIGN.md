---
name: Helix Cinematic System
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#38393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#cbc3d7'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#958ea0'
  outline-variant: '#494454'
  surface-tint: '#d0bcff'
  primary: '#d0bcff'
  on-primary: '#3c0091'
  primary-container: '#a078ff'
  on-primary-container: '#340080'
  inverse-primary: '#6d3bd7'
  secondary: '#adc6ff'
  on-secondary: '#002e6a'
  secondary-container: '#0566d9'
  on-secondary-container: '#e6ecff'
  tertiary: '#bec6e0'
  on-tertiary: '#283044'
  tertiary-container: '#8990a8'
  on-tertiary-container: '#22293d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e9ddff'
  primary-fixed-dim: '#d0bcff'
  on-primary-fixed: '#23005c'
  on-primary-fixed-variant: '#5516be'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#dae2fd'
  tertiary-fixed-dim: '#bec6e0'
  on-tertiary-fixed: '#131b2e'
  on-tertiary-fixed-variant: '#3f465c'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
typography:
  display-2xl:
    fontFamily: Chivo
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 80px
    letterSpacing: -0.04em
  display-lg:
    fontFamily: Chivo
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Chivo
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Chivo
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  label-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.08em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style

The design system is an ultra-premium, cinematic framework designed for futuristic digital systems. It occupies the intersection of high-end editorial design and technical precision, drawing inspiration from the structural rigor of Apple and the motion-centric fluidity of Framer.

The aesthetic is **Cinematic Minimalism**. It utilizes deep, immersive canvases punctuated by sharp, technical details. The emotional response is one of absolute trust, high-performance capability, and forward-looking sophistication. Visual interest is driven by atmospheric mesh gradients, abstract particle textures, and a "liquid glass" philosophy that treats UI surfaces as sophisticated optical layers rather than flat containers.

## Colors

The palette is anchored in a "Matte Black" universe. In its default **Dark Mode**, the system uses `#0A0A0A` to create a boundless sense of depth, with surfaces rendered in deep graphite and matte black panels. Accents are used sparingly as light sources: Electric Violet (`#8B5CF6`) and Deep Indigo provide the core energy, while soft neon blue glows act as functional signifiers.

In **Light Mode**, the system pivots to an airy, gallery-like aesthetic using `#FDFDFD`. Surfaces transition to subtle glassmorphism with high-transparency blurs, maintaining the premium feel through texture rather than value contrast. Typography remains high-contrast (#111111) to preserve the editorial authority of the system.

## Typography

The typographic scale is designed for editorial impact. **Chivo** (serving as the technical equivalent to General Sans/Clash) provides a sharp, authoritative voice for headlines with tight tracking and massive scale. **Inter** handles the body copy, ensuring maximum readability within complex technical dashboards. For metadata and micro-copy, **Geist** provides a monospaced, developer-centric precision that reinforces the "system" nature of the product.

Use `display-2xl` for hero sections with tight letter spacing. All labels should utilize `uppercase` styling with increased letter spacing to evoke a technical, "instrument panel" aesthetic.

## Layout & Spacing

This design system utilizes a **Fixed-Fluid Hybrid Grid**. Content is centered within a 1440px max-width container for desktop, using a 12-column structure. Spacing follows a strict 8px base unit to ensure mathematical harmony.

Layouts should favor asymmetric balance and generous "white space" (or "black space") to create a premium, cinematic feel. 

- **Desktop:** 12 columns, 64px margins, 24px gutters.
- **Tablet:** 8 columns, 40px margins, 20px gutters.
- **Mobile:** 4 columns, 20px margins, 16px gutters.

Elements should often "break" the grid slightly using subtle offsets or float over the grid via glassmorphic layers to create a sense of three-dimensional depth.

## Elevation & Depth

Depth is conveyed through **Optical Layering** rather than traditional drop shadows. 

1.  **Base Layer:** The matte background (#0A0A0A).
2.  **Surface Layer:** Deep graphite panels with ultra-thin (0.5px - 1px) borders in high-contrast (white/violet) at 10-15% opacity.
3.  **Glass Layer:** "Liquid glass" panels using backdrop-blur (minimum 20px) and a subtle noise texture to prevent banding.
4.  **Light Sources:** Glows are achieved through radial gradients behind surfaces, using the primary violet or secondary blue at 5-10% opacity, creating a "halo" effect that suggests the UI is back-lit.

Avoid heavy, muddy shadows. If a shadow is required for legibility, use a long, diffused "ambient" shadow with 0% spread.

## Shapes

The shape language is primarily **Pill-Shaped** for interactive elements and **Soft-Rectangular** for structural containers. 

- **Interactive Elements (Buttons, Tags, Inputs):** Full pill-shape (`rounded-full`) to create a friendly but sophisticated contrast against the rigid grid.
- **Structural Containers (Cards, Modals):** Large corner radii (`1.5rem` or `24px`) to soften the technical edge.
- **Borders:** Always ultra-thin. Use a "hairline" approach (0.5pt to 1pt) with subtle linear gradients (top-left to bottom-right) to simulate light catching the edge of a glass pane.

## Components

### Buttons
Pill-shaped with a "Magnetic Hover" behavior. Primary buttons use a subtle mesh gradient background; secondary buttons are "Ghost" style with an ultra-thin border that brightens on hover. Use 16px horizontal padding and Geist-family labels.

### Input Fields
Minimalist underlines or fully enclosed glassmorphic pills. Focus states should trigger a soft outer glow in electric violet and a subtle expansion of the border width.

### Cards
Cards are treated as "Glass Panes." Use `backdrop-filter: blur(24px)` with a 1px border at 10% white opacity. Content inside cards should follow a strict internal padding of 32px to maintain the editorial feel.

### Chips & Badges
Small, pill-shaped, and semi-transparent. Use high-contrast Geist labels. These should look like technical metadata tags found on a HUD.

### Progress & Loading
Instead of spinners, use linear indeterminate bars with a "pulse" glow or "shimmer" effects that move across glass surfaces. Motion should be "Slow-In, Fast-Out" to mimic expensive hardware interfaces.

### Navigation
A floating glassmorphic dock (similar to macOS) or a persistent top-bar with a "frosted" blur that blends seamlessly with the background as the user scrolls.