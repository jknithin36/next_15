# Documentaion

Topic 1 - React 19 — Server Actions

Functions that run directly on the server.

Useful for handling forms, saving data, and performing secure operations without separate API routes.

Topic 2 - Basics of Next.js

Next.js is built on React and adds routing, layouts, server components, server actions, SEO, and more.

Routing is based on the folder structure.

Topic 3 - Layouts

A layout is a shared UI wrapper.

Root layout (app/layout.tsx) wraps the whole application.

You can also create layouts for specific sections (e.g., a sidebar for dashboard pages).

Topic 4 - Server Components vs Client Components

By default → Server Component

Server Components can:

Fetch data directly on the server.

Access backend resources securely.

Keep sensitive information safe (not exposed to the client).

What Server Components cannot do:

Use React hooks (useState, useEffect, etc.).

Handle client-side events like button clicks.

Client Components:

Add "use client" at the top.

Can use hooks and handle events.

Topic 5 - Routing

Folder name = route name.

Inside each folder, create page.tsx.

Example:

app/profile/page.tsx → /profile

For client-side components, use "use client" at the top.

Nested Routes

Subfolders create nested routes.

Example:

app/profile/page.tsx → /profile
app/profile/account/page.tsx → /profile/account

Dynamic Routes

For routes with dynamic values (like product detail or user profile).

Use square brackets.

Example:

app/product/[id]/page.tsx → /product/123

Access dynamic values with params.

Use async functions if you need to fetch data.

Topic 6 - Catch-All and Optional Catch-All Routes

Catch-All: [...slug] → captures multiple segments.
Example: /mobile/apple/1000.

Optional Catch-All: [[...slug]] → same as above, but not required.

Use double brackets [[]] for optional.

Topic 7 - Client-Side Hooks

Link → navigate between pages without full reload.

useRouter() → programmatic navigation (push, replace, back, forward).

usePathname() → get the current path. Useful for conditional UI.

useSearchParams
useSearchParams

Topic 8 - Not Found Page

Create not-found.tsx for a custom 404 page.

Can exist at root level or inside specific routes.

Usually, one root-level file is enough.

Topic 8 - Loading States

Create loading.tsx to show loading UI while data is being fetched.

Can exist at global level or per route.

Automatically rendered when needed.

Topic 9 - Error Handling

Create error.tsx to handle unexpected errors and display fallback UI.

Must be a client component.

Topic 9 - Route Groups

Use parentheses ( ) to group routes without affecting the URL.

Example:

<pre>
app/(auth)/login/page.tsx → /login
app/(auth)/forgot-password/page.tsx → /forgot-password
</pre>

Topic 10 - Metadata

Very important for SEO.

Can be static or dynamic.

Static example:

```tsx
export const metadata = {
  title: "About Us",
  description: "This is the About page",
};
```

Dynamic example:

```tsx
export async function generateMetadata({ params }) {
  return { title: `Product ${params.id}` };
}
```
