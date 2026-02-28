# Design System - Carnot Research

## Color Palette

Inspired by Stripe and Notion, featuring a sophisticated, modern enterprise aesthetic.

### Primary Colors

| Name | OKLCH | Usage | Notes |
|------|-------|-------|-------|
| **Background** | `oklch(0.99 0.001 250)` | Page backgrounds | Off-white with minimal blue tint |
| **Foreground** | `oklch(0.12 0.005 280)` | Text, primary elements | Deep blue-black |
| **Primary** | `oklch(0.47 0.16 280)` | Buttons, links, accents | Beautiful saturated blue |
| **Primary Foreground** | `oklch(0.99 0 0)` | Text on primary | White |

### Secondary Colors

| Name | OKLCH | Usage | Notes |
|------|-------|-------|-------|
| **Secondary** | `oklch(0.96 0.006 250)` | Hover states, backgrounds | Light gray |
| **Secondary Foreground** | `oklch(0.12 0.005 280)` | Text on secondary | Dark blue-black |
| **Muted** | `oklch(0.88 0.005 250)` | Disabled states | Medium gray |
| **Muted Foreground** | `oklch(0.5 0 0)` | Secondary text | Medium gray text |

### Accent Colors

| Name | OKLCH | Usage | Notes |
|------|-------|-------|-------|
| **Accent** | `oklch(0.60 0.15 50)` | Highlights, calls-to-action | Warm golden yellow |
| **Accent Foreground** | `oklch(0.99 0 0)` | Text on accent | White |

### Functional Colors

| Name | OKLCH | Usage | Notes |
|------|-------|-------|-------|
| **Border** | `oklch(0.94 0.003 250)` | Borders, dividers | Very light gray |
| **Input** | `oklch(0.96 0.005 250)` | Form inputs | Light gray |
| **Ring** | `oklch(0.47 0.16 280)` | Focus states | Primary blue |
| **Destructive** | `oklch(0.58 0.23 30)` | Error, danger states | Red |

## Typography

### Font Stack
- **Sans-serif**: Inter, system fonts
- **Mono**: Geist Mono
- **Font Loading**: Optimized with `next/font/google`

### Font Sizes & Weights

| Size | Class | Usage |
|------|-------|-------|
| **6XL** | `text-6xl` | Main page titles (h1) |
| **5XL** | `text-5xl` | Hero sections |
| **4XL** | `text-4xl` | Section headers |
| **3XL** | `text-3xl` | Page titles |
| **2XL** | `text-2xl` | Subsections (h2) |
| **XL** | `text-xl` | Section titles (h3) |
| **LG** | `text-lg` | Body text large |
| **BASE** | `text-base` | Body text |
| **SM** | `text-sm` | Small text, labels |
| **XS** | `text-xs` | Tiny text, badges |

### Line Heights
- **Headings**: `tight` (1.2)
- **Body**: `relaxed` (1.6)
- **Prose**: `leading-6` (1.5)

## Spacing Scale

Using Tailwind's spacing scale (4px base):

```
px-2  = 8px   (tight)
px-3  = 12px
px-4  = 16px  (standard)
px-6  = 24px  (comfortable)
px-8  = 32px  (loose)
```

### Component Spacing

| Component | Padding | Gap |
|-----------|---------|-----|
| Button | `px-4 py-2` | - |
| Card | `p-6` | `gap-4` |
| Section | `py-16` | `gap-8` |
| Layout | `px-6 lg:px-8` | - |

## Radius

**Default Radius**: `0.625rem` (10px)
- **Variants**: sm, md, lg, xl

### Component Rounding

| Component | Radius |
|-----------|--------|
| Buttons | `md` (8px) |
| Cards | `lg` (10px) |
| Inputs | `md` (8px) |
| Badges | `sm` (6px) |

## Shadows

### Elevation Levels

```css
shadow-sm   = 0 1px 2px 0 rgb(0 0 0 / 0.05)
shadow-md   = 0 4px 6px -1px rgb(0 0 0 / 0.1)
shadow-lg   = 0 10px 15px -3px rgb(0 0 0 / 0.1)
shadow-xl   = 0 20px 25px -5px rgb(0 0 0 / 0.1)
```

### Usage

| Context | Shadow |
|---------|--------|
| Hover States | `shadow-md` |
| Cards | `shadow-sm` |
| Modals/Popovers | `shadow-lg` |
| Elevated Sections | `shadow-xl` |

## Buttons

### Variants

#### Primary Button
```tsx
<Button>
  Click me
</Button>
```
- **Background**: Primary blue
- **Text**: White
- **Hover**: Darker blue + shadow

#### Secondary/Ghost Button
```tsx
<Button variant="ghost">
  Learn more
</Button>
```
- **Background**: Transparent
- **Text**: Muted foreground
- **Hover**: Secondary background

#### Outline Button
```tsx
<Button variant="outline">
  See more
</Button>
```
- **Border**: 2px border color
- **Background**: Transparent
- **Hover**: Secondary background

### Sizes

| Size | Padding | Text | Usage |
|------|---------|------|-------|
| **sm** | `px-3 py-1.5` | `text-sm` | Secondary actions |
| **md** | `px-4 py-2` | `text-sm` | Default |
| **lg** | `px-6 py-3` | `text-base` | Primary CTA |

## Cards

### Standard Card
```tsx
<div className="rounded-lg border border-border bg-card p-6">
  {/* content */}
</div>
```

### Interactive Card (with hover)
```tsx
<div className="rounded-lg border border-border bg-card p-6 hover:shadow-md transition-shadow">
  {/* content */}
</div>
```

## Forms

### Input Field
```tsx
<input className="rounded-md border border-input bg-background px-4 py-2" />
```

### Form Label
```tsx
<label className="text-sm font-medium text-foreground">
  Label text
</label>
```

## Navigation

### Navbar
- **Background**: `bg-background/95 backdrop-blur-sm`
- **Border**: `border-b border-border`
- **Height**: `py-3.5`
- **Links**: Hover to `text-foreground`

### Footer
- **Background**: `bg-secondary`
- **Text**: `text-muted-foreground`
- **Links**: Hover to `text-primary`

## Animations & Transitions

### Standard Transitions
```css
transition-colors duration-200   /* Color changes */
transition-all duration-300      /* All properties */
transition-shadow duration-200   /* Shadow changes */
```

### Hover States
- **Text**: Color transition
- **Buttons**: Shadow + slight scale
- **Cards**: Shadow increase
- **Links**: Color change + underline

## Accessibility

### Color Contrast
- **WCAG AA**: 4.5:1 (normal text)
- **WCAG AAA**: 7:1 (enhanced)

### Interactive Elements
- **Focus State**: Blue ring (primary color)
- **Min Touch Target**: 44x44px
- **Keyboard Navigation**: Full support
- **ARIA Labels**: All interactive elements

## Responsive Breakpoints

| Screen | Prefix | Width |
|--------|--------|-------|
| Mobile | None | < 640px |
| Small | `sm:` | ≥ 640px |
| Medium | `md:` | ≥ 768px |
| Large | `lg:` | ≥ 1024px |
| XL | `xl:` | ≥ 1280px |

### Mobile-First Strategy
- Start with mobile styles
- Add larger screens with prefixes
- Example: `text-lg md:text-xl lg:text-2xl`

## Component Examples

### Hero Section
```tsx
<section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/40">
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
  </div>
  <div className="relative mx-auto max-w-7xl px-6 py-24">
    {/* content */}
  </div>
</section>
```

### Feature Card
```tsx
<div className="rounded-lg border border-border bg-card p-6 hover:shadow-md transition-shadow">
  <h3 className="text-lg font-semibold text-foreground">Feature</h3>
  <p className="mt-2 text-sm text-muted-foreground">Description</p>
</div>
```

### CTA Button Group
```tsx
<div className="flex flex-col gap-4 sm:flex-row">
  <Button size="lg" asChild>
    <Link href="/products">Primary CTA</Link>
  </Button>
  <Button variant="outline" size="lg" asChild>
    <Link href="/contact">Secondary CTA</Link>
  </Button>
</div>
```

## Dark Mode (Future)

The design system is prepared for dark mode support using CSS variables and the `@media (prefers-color-scheme: dark)` query.

Current variables are ready to be duplicated for dark mode variants.

## Usage Guidelines

1. **Always use semantic tokens** - Never use `bg-white` or `text-black`
2. **Respect whitespace** - Use proper spacing for hierarchy
3. **Maintain consistency** - Use the spacing scale consistently
4. **Test accessibility** - Verify contrast and keyboard navigation
5. **Mobile first** - Design for mobile, enhance for larger screens
6. **Performance** - Minimize custom CSS, use Tailwind utilities

## References

- Stripe Design: https://stripe.com
- Notion Design: https://notion.so
- Tailwind CSS: https://tailwindcss.com
- OKLCH Color Space: https://oklch.com
