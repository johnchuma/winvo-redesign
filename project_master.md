# Winvo Redesign: Master Project Manifesto

## 1. Visual Strategy & Brand Essence

- **Aesthetic:** "Premium Fintech Noir." Think high-contrast, deep blacks (#050505), and glassmorphism.
- **Design Quality:** Must mimic a professional Figma handoff. No "standard" Tailwind defaults.
- **Core Message:** "Invest, Grow, Repeat." This is the narrative thread for all copy and animations.

## 2. Global Design Tokens (Figma-to-Code)

- **Typography:** - Headings: 'Bricolage Grotesque' (Weight: 800, Letter-spacing: -0.05em).
  - Body: 'Inter' (Weight: 400/500, Line-height: 1.6).
- **Colors:** - Primary: Deep Gold (#D4AF37) for highlights.
  - Background: Deep Obsidian (#050505).
  - Borders: 1px Stroke (White/10% opacity) with `backdrop-filter: blur(12px)`.
- **Spacing:** Strict 8px grid system. Section padding: `py-32` (Desktop), `py-16` (Mobile).

## 3. Asset & UI Component Rules

- **Image Cards:** Use "Bento Box" layouts with variable column spans. Every card must have a subtle `inner-shadow` and a 1px border light-source effect.
- **Custom Assets:** Do not use stock photography. Use abstract 3D glass shapes and mesh gradients generated via AI tools, then implemented as high-res PNG/SVG.
- **Buttons:** Implement "Magnetic Buttons" with GSAP. They should slightly pull toward the cursor when hovering within 30px.

## 4. Animation Philosophy (GSAP)

- **The Golden Thread:** A single `.wealth-node` asset must travel through the entire page via `ScrollTrigger`.
- **Transitions:** Use `Power4.out` or `Expo.out` for all easing. Standard `linear` or `sine` eases are forbidden.
- **Interaction:** Every interactive element must have a micro-interaction (e.g., card scales to 1.02, text color shifts to Primary Gold).

## 5. Instructions for the Agent

> "When building components, always prioritize the 'Premium Fintech Noir' aesthetic. If a layout feels too generic, increase negative space and refine the typography weights. Reference this file before every code generation to ensure brand consistency."
