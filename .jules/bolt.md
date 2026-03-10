## 2025-05-22 - [Optimizing TTI by removing artificial delays]
**Learning:** Artificial delays (like `setTimeout`) used to simulate data fetching in components directly hurt the perceived performance and Time to Interactive (TTI). Static data should be rendered immediately.
**Action:** Always check for and remove hardcoded mock delays in components.

## 2025-05-22 - [Static data allocation in React components]
**Learning:** Defining static arrays (like navigation links or feature lists) inside component bodies causes re-allocation on every render. This is particularly noticeable in components that re-render frequently (e.g., `Navbar` on scroll).
**Action:** Move static data arrays outside of component definitions to ensure they are allocated only once.
