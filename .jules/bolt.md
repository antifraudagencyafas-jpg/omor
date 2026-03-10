## 2025-05-22 - [Optimizing TTI by removing artificial delays]
**Learning:** Artificial delays (like `setTimeout`) used to simulate data fetching in components directly hurt the perceived performance and Time to Interactive (TTI). Static data should be rendered immediately.
**Action:** Always check for and remove hardcoded mock delays in components.

## 2025-05-22 - [Static data allocation in React components]
**Learning:** Defining static arrays (like navigation links or feature lists) inside component bodies causes re-allocation on every render. This is particularly noticeable in components that re-render frequently (e.g., `Navbar` on scroll).
**Action:** Move static data arrays outside of component definitions to ensure they are allocated only once.

## 2025-05-23 - [Handling external image hotlinking restrictions]
**Learning:** Some third-party image hosts block requests from unauthorized referrers, causing 403 Forbidden errors when trying to display product images on a new site. This impacts visual completeness and Largest Contentful Paint (LCP).
**Action:** Use `referrerPolicy="no-referrer"` in Next.js `Image` components to bypass these restrictions when displaying external assets like technical diagrams.
