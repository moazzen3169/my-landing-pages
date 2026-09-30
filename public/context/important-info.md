
## Project Identity & Purpose

This project is a collection of multiple independent e-commerce landing pages built inside a single Next.js application.

The primary purpose of this project is to create high-quality, visually distinct, production-style e-commerce landing pages that can be presented as portfolio/demo work to clients.

This is NOT a single e-commerce website.

It is a **Landing Page Collection / Showcase Platform** containing multiple independent storefront experiences.

The project must therefore be designed around two equally important goals:

1. **Shared technical infrastructure**
2. **Strict visual and structural isolation between landing pages**

The shared infrastructure exists to reduce unnecessary duplication.

The landing pages must remain visually, structurally, and conceptually independent.

---

# 1. Technology Stack

The project uses:

* React
* Next.js
* TypeScript
* Tailwind CSS

Additional libraries may be introduced only when they provide clear value and are consistent with the existing architecture.

Do not introduce a new dependency simply because it is convenient for implementing one small feature.

Before adding a dependency:

1. Check whether the functionality already exists in the project.
2. Check whether it can be implemented cleanly with existing tools.
3. Consider the impact on bundle size and maintainability.
4. Follow the existing project conventions.

---

# 2. Core Project Concept

The application contains multiple e-commerce landing pages.

The current business domains include:

* Men's Sport
* Men's Formal
* Women's Sport
* Women's Formal
* Kids
* Beauty / Health / Care
* Bags
* Shoes

These categories describe the business/domain of a landing page.

They do NOT define the visual design of the landing page.

For example:

Two landing pages can both belong to:

`women-sport`

but have completely different:

* layouts
* typography
* colors
* spacing
* hero sections
* product card designs
* navigation
* animations
* visual hierarchy
* section order
* imagery
* composition

Therefore:

**Category and visual identity must never be treated as the same concept.**

---

# 3. Landing Pages Are Independent Experiences

Every landing page is an independent storefront experience.

Each landing page has:

* its own URL
* its own visual identity
* its own layout
* its own composition
* its own section order
* its own content
* potentially its own mock dataset
* potentially its own theme
* potentially its own product presentation

A landing page must NOT accidentally inherit visual decisions from another landing page.

Example:

If `/shop/women-sport-v1` uses:

* rounded cards
* pastel colors
* large typography
* soft shadows

this does NOT mean `/shop/men-formal-v1` should use the same visual decisions.

The second landing may instead use:

* sharp corners
* monochrome colors
* serif typography
* editorial layout
* minimal shadows

Both pages can still use the same technical foundation.

---

# 4. Critical Rule: Do Not Mix Landing Pages

This is one of the most important rules in the entire project.

Never mix the following between unrelated landing pages unless the sharing is intentional and explicitly defined:

* CSS
* Tailwind classes
* themes
* typography
* colors
* spacing systems
* hero compositions
* section layouts
* product card designs
* navigation designs
* imagery
* mock data
* content
* animations
* page-specific components

Do not copy visual implementation from one landing page into another simply because it already exists.

Existing code should only be reused when it represents a genuinely reusable abstraction.

---

# 5. Shared Foundation vs Landing-Specific Implementation

The project intentionally separates reusable infrastructure from landing-specific design.

## Shared Foundation

The following may be shared:

* TypeScript types
* utility functions
* generic UI primitives
* accessibility utilities
* image utilities
* generic data helpers
* product data contracts
* category data contracts
* generic product logic
* generic layout utilities
* animation primitives
* responsive utilities
* shared constants
* generic hooks

Examples:

```text
Button
Container
IconButton
Badge
Price
Rating
ProductGrid
ProductCard primitive
Modal
Drawer
Input
```

However, a shared component must remain genuinely generic.

---

# 6. Do Not Create Giant Universal Components

Avoid components such as:

```tsx
<Hero
  variant="modern"
  theme="dark"
  layout="split"
  imagePosition="right"
  rounded
  compact
  editorial
  premium
  animation="..."
  mobileLayout="..."
  ...
/>
```

A component with excessive configuration is usually a sign that multiple distinct designs have been forced into one abstraction.

If two designs are visually and structurally different, they should generally be separate components.

For example:

```text
HeroCentered
HeroSplit
HeroEditorial
HeroMinimal
```

is often better than one enormous:

```text
Hero
```

with dozens of configuration options.

The goal is not maximum code reuse.

The goal is:

**maximum useful reuse without destroying design independence.**

---

# 7. The Reuse Principle

Follow this principle:

> Reuse infrastructure, not identity.

Shared:

* primitives
* logic
* contracts
* utilities
* behavior

Independent:

* composition
* visual identity
* page structure
* content
* imagery
* theme
* layout

Do not optimize for the smallest possible number of components.

Optimize for maintainability and visual independence.

---

# 8. URL Architecture

Every landing page must have its own dedicated URL.

Use semantic URLs.

Examples:

```text
/shop/men-sport
/shop/men-formal
/shop/women-sport
/shop/women-formal
/shop/kids
/shop/beauty
/shop/bags
/shop/shoes
```

If multiple designs exist within the same business domain, they may use:

```text
/shop/women-sport-v1
/shop/women-sport-v2
/shop/women-sport-v3
```

Do NOT use meaningless URLs such as:

```text
/page1
/page2
/test
/test2
/final
/final2
```

unless they are explicitly temporary during development.

---

# 9. Main Showcase Page

The root route:

```text
/
```

is the project showcase/catalog page.

It exists to provide convenient access to all landing pages.

It should provide:

* landing page preview
* landing page name
* category
* short description
* link to the landing page
* optional tags
* optional technologies
* optional status

It may also provide category filtering.

Example categories:

```text
All
Men
Women
Kids
Beauty
Bags
Shoes
```

The root page must NOT become tightly coupled to individual landing page implementations.

It should consume landing metadata from a centralized registry.

---

# 10. Landing Registry

Landing pages should be registered in a central configuration/data source.

Example conceptual structure:

```ts
{
  slug: "women-sport-v1",
  category: "women-sport",
  title: "Women's Sport",
  description: "...",
  theme: "minimal",
  dataset: "womenSportDefault"
}
```

The registry should describe the landing.

It should not contain the entire UI implementation.

Do not put huge JSX structures inside configuration objects.

---

# 11. Landing Identity

Each landing should have an identifiable configuration.

Conceptually:

```text
Landing
├── slug
├── category
├── title
├── description
├── theme
├── dataset
├── sections
└── optional metadata
```

This allows the application to distinguish:

```text
women-sport-v1
women-sport-v2
women-formal-v1
men-formal-v1
```

even when multiple pages belong to the same business category.

---

# 12. Data Architecture

Mock data is a first-class part of this project.

Do not place large mock datasets directly inside React components.

Do not hardcode product arrays inside page components.

Data must live in a dedicated data layer.

Conceptually:

```text
data/
├── products/
├── categories/
├── brands/
├── testimonials/
├── reviews/
├── banners/
└── ...
```

The UI consumes data.

The UI should not define the data.

---

# 13. Product Data Model

All product-oriented pages should follow a shared product contract whenever possible.

A basic product may contain:

```ts
type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;

  price: number;
  compareAtPrice?: number;

  images: string[];

  category: string;
  brand?: string;

  rating?: number;
  reviewCount?: number;

  badge?: string;

  colors?: ProductColor[];
  sizes?: string[];

  stock?: number;
};
```

The exact implementation may evolve.

The important principle is:

**The shared schema defines the contract, not the actual content.**

---

# 14. Domain-Specific Product Data

Different business domains may require different product structures.

For example:

### Fashion

May contain:

```text
sizes
colors
material
fit
collection
```

### Electronics

May contain:

```text
specifications
warranty
storage
connectivity
```

### Beauty

May contain:

```text
skinType
ingredients
volume
usage
benefits
```

Do not force every domain into a giant universal Product type containing dozens of unrelated optional properties.

Prefer domain-specific extensions where appropriate.

Conceptually:

```text
Product
├── FashionProduct
├── BeautyProduct
├── ElectronicsProduct
└── ...
```

Only create domains that are actually needed by the project.

---

# 15. Shared Mock Data

If multiple landing pages can naturally use the same dataset, they may share it.

Example:

```text
women-sport-v1
women-sport-v3
```

may both use:

```text
womenSportDefault
```

This is encouraged when the content is genuinely appropriate for both pages.

However, sharing data is NOT mandatory.

---

# 16. Separate Mock Data When Necessary

If two landing pages require different products, create separate datasets.

For example:

```text
womenSportDefault
womenSportPremium
womenFormalDefault
menFormalLuxury
kidsSummer
beautySkincare
bagsLuxury
shoesSport
```

Do not modify a shared dataset merely to satisfy the requirements of one landing page if those modifications would affect other pages.

If a change is specific to one landing page, create a dedicated dataset.

---

# 17. Important Data Isolation Rule

Never mutate a shared dataset inside a page.

Bad:

```ts
products.push(...)
products.sort(...)
products.splice(...)
```

if `products` is imported from shared mock data.

This can create unexpected behavior between pages.

Instead:

```ts
const products = [...sharedProducts];
```

or use non-mutating transformations:

```ts
const products = sharedProducts
  .filter(...)
  .map(...)
```

Shared data should be treated as immutable source data.

---

# 18. Product Components

Product-related UI should be reusable at the behavioral level.

Examples:

```text
ProductCard
ProductGrid
ProductPrice
ProductRating
ProductBadge
ProductGallery
ProductInfo
```

But the visual presentation may differ by landing.

For example:

```text
ProductCardMinimal
ProductCardEditorial
ProductCardLuxury
ProductCardSport
```

may all be valid.

Do not force every landing page to use the same product card design.

---

# 19. Themes

Themes should be isolated from page structure.

A theme may define:

* colors
* typography
* border radius
* shadows
* surface colors
* spacing tokens
* visual accents

A landing should be able to use its own theme.

Example conceptually:

```text
themes/
├── minimal
├── luxury
├── sport
├── editorial
└── beauty
```

However, theme names are not mandatory.

The important rule is:

**Changing one landing's theme must not unintentionally change another landing.**

---

# 20. Avoid Global Styling That Changes Individual Landings

Be extremely careful with:

```css
body { ... }
```

or broad selectors such as:

```css
button { ... }
h1 { ... }
section { ... }
.card { ... }
```

A global style can unintentionally modify every landing page.

Prefer scoped classes, CSS variables, component-level styling, and explicit theme boundaries.

If a global change is necessary, verify every landing page after the change.

---

# 21. Tailwind Rules

Tailwind utility classes should remain intentional and readable.

Do not create arbitrary styling patterns repeatedly when a proper abstraction already exists.

However, do not create a generic abstraction merely to avoid repeating a few Tailwind classes.

Good abstraction:

```text
Container
Section
Button
```

Potentially bad abstraction:

```text
UniversalLandingSectionWithTwentyVariants
```

---

# 22. Landing-Specific Components

If a section is unique to one landing page, it may live inside that landing's own component area.

Example:

```text
components/
└── landing/
    ├── women-sport-v1/
    │   ├── Hero.tsx
    │   ├── FeaturedCollection.tsx
    │   └── EditorialBanner.tsx
    │
    └── men-formal-v1/
        ├── Hero.tsx
        ├── Collection.tsx
        └── Lookbook.tsx
```

This prevents page-specific UI from contaminating shared components.

---

# 23. Section Reuse

A section may be shared only when the structure is genuinely reusable.

For example:

```text
Testimonials
FAQ
ProductGrid
Newsletter
```

can potentially be shared.

But if two sections only look vaguely similar while having different composition and hierarchy, keep them separate.

Do not force visual similarity into a reusable component.

---

# 24. Never Copy an Entire Landing Page to Create Another One

When creating a new landing page:

Do NOT:

1. Copy the previous landing directory.
2. Change a few colors.
3. Replace the images.
4. Rename it.
5. Consider it a new design.

That creates visual duplication and makes the portfolio look repetitive.

Instead, use the shared foundation and design the new landing independently.

---

# 25. Prevent Cross-Landing Changes

Before modifying a shared component, ask:

> Does this change affect every landing page?

If yes:

1. Determine whether the change is truly intended globally.
2. Check all affected landing pages.
3. Verify responsive behavior.
4. Verify themes.
5. Verify product presentation.
6. Verify the showcase page.

If the change is needed only for one landing page, do not modify a global component unnecessarily.

Prefer a page-specific component or variant.

---

# 26. Responsive Design

Every landing page must be responsive.

At minimum verify:

* mobile
* tablet
* desktop
* large desktop where relevant

Do not build only the desktop version and patch mobile later.

Mobile layout may intentionally differ from desktop layout.

Do not assume that desktop composition should simply shrink.

---

# 27. Images and Assets

Keep assets organized by landing/domain.

Prefer a structure such as:

```text
public/
└── landings/
    ├── women-sport-v1/
    ├── women-formal-v1/
    ├── men-sport-v1/
    ├── men-formal-v1/
    ├── kids-v1/
    ├── beauty-v1/
    ├── bags-v1/
    └── shoes-v1/
```

Avoid meaningless asset names:

```text
image1.png
image2.png
new.png
final.png
final2.png
```

Use semantic names.

Example:

```text
hero-model.webp
product-dress-01.webp
collection-summer.webp
editorial-banner.webp
```

Do not reuse an asset from another landing simply because it is already available unless the reuse is intentional.

---

# 28. Image Optimization

Use Next.js image optimization where appropriate.

Avoid unnecessarily huge images.

Prefer modern formats such as:

* WebP
* AVIF

when appropriate.

Do not load large images at full resolution if the rendered size is small.

---

# 29. Animation

Animations can be shared as primitives.

Examples:

```text
FadeIn
Reveal
SlideUp
Stagger
ScaleIn
```

But animation behavior should not make every landing feel identical.

Each landing should have its own motion language when appropriate.

Do not add animation just because the library supports it.

Animation must support:

* hierarchy
* interaction
* storytelling
* perceived quality

without harming performance.

---

# 30. Server and Client Components

Use Next.js Server Components by default.

Only use Client Components when necessary.

Examples that may require Client Components:

* state
* event handlers
* browser APIs
* interactive filters
* cart interactions
* sliders
* interactive menus

Do not add:

```tsx
"use client";
```

to an entire page simply because one small component requires interactivity.

Keep client boundaries as small as practical.

---

# 31. Performance

Because this project may eventually contain many landing pages, performance matters.

Pay attention to:

* image sizes
* unnecessary JavaScript
* unnecessary Client Components
* large dependencies
* animation cost
* duplicate assets
* excessive DOM complexity
* font loading
* lazy loading

Do not optimize prematurely at the expense of architecture, but do not knowingly introduce expensive patterns.

---

# 32. SEO

Each landing page should have appropriate metadata.

At minimum:

* title
* description

Where appropriate:

* Open Graph metadata
* social preview image
* canonical URL
* structured data

Metadata should describe the specific landing page.

Do not use one generic title for every landing.

---

# 33. Accessibility

All landing pages should consider:

* semantic HTML
* keyboard navigation
* focus states
* accessible buttons
* accessible links
* meaningful alt text
* sufficient contrast
* form labels
* ARIA only when necessary

Do not sacrifice accessibility for visual effects.

---

# 34. Navigation

The showcase page must link to every landing.

Each landing should have predictable navigation.

However, navigation itself may be visually different between landing pages.

For example:

```text
Landing A:
minimal navbar

Landing B:
large editorial navbar

Landing C:
transparent overlay navbar
```

The functionality may be shared, but the visual implementation does not have to be.

---

# 35. Cart and E-commerce Functionality

These pages are primarily portfolio/demo experiences.

Do not build a full production commerce backend unless explicitly requested.

Mock functionality is acceptable for:

* cart
* wishlist
* search
* filtering
* sorting
* product selection
* checkout preview

Keep the architecture ready for future integration, but do not introduce unnecessary backend complexity.

---

# 36. Do Not Introduce Backend Complexity Without Requirement

Do not add:

* database
* authentication
* payment gateway
* CMS
* API server
* external commerce platform

unless explicitly requested.

The current project is primarily a frontend showcase with structured mock data.

---

# 37. Data Registry

The project may use a central dataset registry.

Conceptually:

```ts
const productDatasets = {
  womenSportDefault,
  womenSportPremium,
  womenFormalDefault,
  menSportDefault,
  menFormalDefault,
  kidsDefault,
  beautyDefault,
  bagsDefault,
  shoesDefault,
};
```

Landing configuration can reference a dataset by key.

Example:

```ts
{
  slug: "women-sport-v1",
  dataset: "womenSportDefault"
}
```

This allows the landing to select data without hardcoding the dataset implementation inside the page.

---

# 38. Separation of Concerns

Keep these concepts separate:

```text
Landing
Category
Theme
Dataset
Components
Content
Assets
Routing
```

They are related, but they are not the same thing.

Example:

```text
Landing:
women-sport-v2

Category:
women-sport

Theme:
editorial

Dataset:
womenSportPremium

Assets:
landings/women-sport-v2/

Route:
/shop/women-sport-v2
```

Do not merge these concepts into one giant configuration or component.

---

# 39. Naming Conventions

Use descriptive names.

Prefer:

```text
WomenSportLanding
WomenSportHero
WomenSportFeaturedCollection
WomenFormalHero
BeautyProductCard
```

when something is truly page/domain-specific.

Prefer:

```text
ProductCard
ProductGrid
Container
Button
```

for genuinely shared components.

Avoid vague names:

```text
Box
Thing
Section1
ComponentA
NewComponent
Test
Temp
Final
Final2
```

---

# 40. Before Creating a New Component

Before creating a component, determine:

1. Is this truly shared?
2. Is the structure generic?
3. Will multiple landing pages use it?
4. Would sharing it reduce duplication without coupling visual identities?
5. Does an existing component already solve the problem?

If the answer is no, keep it local to the landing page.

---

# 41. Before Modifying a Shared Component

Before changing any shared component:

1. Find every place where it is used.
2. Determine which landing pages are affected.
3. Determine whether the change is intentional globally.
4. If the change is only for one landing, do not modify the shared component.
5. Create a specific component or variant if necessary.
6. Test affected landing pages.

Never assume that a shared component is used by only one page.

---

# 42. Before Creating a New Landing

Follow this sequence:

### Step 1 — Define identity

Determine:

* category
* target audience
* visual direction
* typography
* color palette
* visual tone

### Step 2 — Define dataset

Decide whether to:

* reuse an existing dataset
* create a new dataset
* extend an existing domain dataset

### Step 3 — Define layout

Determine:

* navbar
* hero
* categories
* featured products
* collections
* promotional sections
* testimonials
* newsletter
* footer

### Step 4 — Build page-specific components

Create components only where necessary.

### Step 5 — Connect shared infrastructure

Use:

* shared product types
* shared utilities
* shared primitives
* shared data contracts

### Step 6 — Add route

Create the dedicated URL.

### Step 7 — Register landing

Add the landing to the central landing registry.

### Step 8 — Add showcase entry

Make sure the root showcase page can access it.

### Step 9 — Test isolation

Verify that adding the new landing did not change any existing landing.

---

# 43. New Landing Page Checklist

Before considering a landing complete:

* [ ] Dedicated URL exists
* [ ] Landing is registered
* [ ] Landing appears on showcase page
* [ ] Visual identity is distinct
* [ ] Product dataset is correct
* [ ] Assets are organized
* [ ] Responsive design works
* [ ] Navigation works
* [ ] Product cards work
* [ ] No unrelated landing styles were imported
* [ ] No unrelated landing data was imported
* [ ] No global styling was accidentally changed
* [ ] Metadata exists
* [ ] Images are optimized
* [ ] Accessibility basics are covered
* [ ] No unnecessary Client Components were introduced

---

# 44. Things the Agent Must NOT Do

The following behaviors are prohibited unless explicitly requested.

### Do not:

* merge multiple landing pages into one design
* copy the complete design of one landing into another
* globally change typography for a page-specific requirement
* globally change colors for a page-specific requirement
* modify shared components to solve a local problem
* mutate shared mock data
* place large mock datasets inside components
* hardcode products inside UI components
* use meaningless route names
* create giant components with excessive variants
* create unnecessary dependencies
* add a backend without a requirement
* add authentication without a requirement
* add a database without a requirement
* add payment integration without a requirement
* remove existing landing pages
* rename routes without checking dependencies
* move assets without checking references
* replace a dataset globally when only one landing needs a change
* introduce global CSS casually
* add `"use client"` unnecessarily
* rewrite unrelated files during a local change
* refactor the entire project for a small feature
* delete existing functionality merely to simplify implementation

---

# 45. Avoid Unrelated Refactoring

When asked to implement a feature or fix a bug:

Do not automatically refactor unrelated code.

Keep changes focused.

For example, if the task is:

> Add a filter to the women's sport landing.

Do not:

* redesign the entire ProductCard system
* rename all data files
* restructure every landing
* replace the global theme system
* rewrite unrelated components

unless the task genuinely requires it.

Small changes should remain small.

---

# 46. Protect Existing Landing Pages

Existing landing pages are considered working portfolio assets.

Treat them as stable.

When adding or modifying another landing:

**Do not assume existing pages can change freely.**

After changes to shared code, check affected existing pages.

The project should support incremental growth without regressions.

---

# 47. Dependency Direction

Prefer this dependency direction:

```text
Shared Types / Utilities
        ↓
Shared UI Primitives
        ↓
Domain Components
        ↓
Landing-Specific Components
        ↓
Landing Page
```

Avoid circular dependencies.

A shared component should not depend on a specific landing page.

For example:

Bad:

```text
ProductCard
   ↓
WomenSportLanding
```

Good:

```text
ProductCard
   ↑
WomenSportLanding
```

The landing uses the shared component.

The shared component does not know the landing exists.

---

# 48. Page-Specific Code Must Stay Page-Specific

If a component exists only because of one landing's design, keep it inside that landing's scope.

Do not move it to global shared components merely because it might theoretically be reusable.

Wait until there is a genuine reuse case.

This prevents premature abstraction.

---

# 49. Do Not Over-Abstract

Avoid abstraction for abstraction's sake.

Three similar-looking components do not automatically require one generic component.

A good abstraction should:

* remove meaningful duplication
* improve consistency
* remain understandable
* avoid excessive configuration
* not couple unrelated landing pages

If abstraction makes the code harder to understand, reconsider it.

---

# 50. Visual Quality Is a First-Class Requirement

This is a portfolio project.

Therefore visual quality is not secondary to architecture.

Every landing should feel intentionally designed.

Avoid:

* generic layouts
* repetitive hero sections
* identical card grids
* identical spacing patterns
* identical color palettes
* copied section ordering
* obvious template reuse

The technical foundation may be shared.

The final visual experiences should not feel like the same website with different products.

---

# 51. Content Should Match the Domain

Mock content must make sense for the landing category.

Examples:

Men's Sport:

```text
Training
Running
Outdoor
Performance
Athletic Wear
```

Men's Formal:

```text
Suits
Blazers
Dress Shirts
Formal Shoes
Accessories
```

Women's Sport:

```text
Activewear
Running
Yoga
Training
Athleisure
```

Women's Formal:

```text
Dresses
Evening Wear
Blazers
Heels
Accessories
```

Kids:

```text
Boys
Girls
School
Play
Seasonal
```

Beauty:

```text
Skincare
Haircare
Makeup
Body Care
Wellness
```

Bags:

```text
Handbags
Backpacks
Crossbody
Travel
Luxury
```

Shoes:

```text
Sneakers
Boots
Formal
Sandals
Running
```

Do not use obviously unrelated mock content.

---

# 52. Do Not Assume All E-commerce Pages Have the Same Sections

One landing may have:

```text
Hero
Categories
Featured Products
Testimonials
Newsletter
```

Another may have:

```text
Hero
Editorial Lookbook
Collections
Product Grid
Brand Story
```

Another may have:

```text
Hero
Trending
Best Sellers
Offers
Reviews
Newsletter
```

Section order should be based on the design concept.

There is no mandatory universal section order.

---

# 53. Shared E-commerce Behavior vs Shared Visual Design

The project should distinguish between:

### Shared behavior

* product selection
* price formatting
* filtering
* sorting
* cart logic
* wishlist behavior
* product data handling

and:

### Visual presentation

* card layout
* typography
* spacing
* colors
* section composition
* image treatment

Behavior can often be shared.

Visual presentation may remain independent.

---

# 54. When Unsure, Prefer Isolation

If the Agent is unsure whether something should be shared or local:

Prefer keeping it local until there is a clear reason to share it.

It is generally easier to extract a well-designed local component later than to untangle an over-generalized global component.

---

# 55. Change Management

Before making significant architectural changes:

1. Inspect the current project structure.
2. Read this document.
3. Identify existing conventions.
4. Check whether similar functionality already exists.
5. Determine which landing pages may be affected.
6. Make the smallest safe change.
7. Verify existing functionality.

Do not make assumptions about the current codebase without inspecting it.

---

# 56. Agent Operating Principle

The Agent must think of this project as:

> One technical platform containing many independent storefront experiences.

Not:

> One website with many pages.

This distinction is fundamental.

The platform should share infrastructure.

The storefronts should maintain independent identities.

---

# 57. Final Architecture Principle

The ideal architecture follows this relationship:

```text
                     E-COMMERCE SHOWCASE
                              │
                ┌─────────────┴─────────────┐
                │                           │
          Shared Foundation           Landing Registry
                │                           │
       ┌────────┼────────┐          ┌───────┼────────┐
       │        │        │          │       │        │
      UI      Types     Utils      Men     Women    Kids
       │        │        │          │       │        │
       └────────┼────────┘          └───────┼────────┘
                │                           │
                │                    Landing Instances
                │                           │
                │              ┌────────────┼────────────┐
                │              │            │            │
                │           Sport        Formal       Premium
                │
                ▼
          Data Contracts
                │
       ┌────────┼─────────┐
       │        │         │
   Shared    Domain    Custom
   Dataset   Dataset   Dataset
```

The most important rule is:

**Shared code must make development faster without making the landing pages look or behave the same.**

---

# 58. Definition of Done

A change is considered complete only when:

1. The requested feature works.
2. Existing landing pages remain functional.
3. No unrelated landing has been visually altered.
4. No unrelated dataset has been modified.
5. Responsive behavior has been considered.
6. The implementation follows the existing architecture.
7. Shared components remain genuinely reusable.
8. Page-specific requirements remain page-specific.
9. The root showcase remains accurate.
10. The code does not introduce unnecessary complexity.

---

# 59. Final Rule

When making any decision in this project, prioritize the following order:

1. **Do not break existing landing pages.**
2. **Preserve landing-page independence.**
3. **Keep data and UI separated.**
4. **Reuse infrastructure where appropriate.**
5. **Avoid premature abstraction.**
6. **Keep page-specific code isolated.**
7. **Maintain responsive and accessible UI.**
8. **Protect performance.**
9. **Keep changes focused.**
10. **Preserve visual quality and uniqueness.**

The project is expected to grow over time.

The architecture must therefore make it easy to add the next landing page without modifying or destabilizing existing landing pages.

Every new landing should be treated as a new independent storefront experience built on top of the same technical foundation.
