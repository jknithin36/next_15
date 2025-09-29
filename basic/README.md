# Next.js 15 + React 19 — Day 1 Notes

Simple notes covering key topics from Day 1 of learning Next.js 15 and React 19.

---

## 1. React 19 — Server Actions

- Functions executed directly on the **server**.
- Eliminates need for separate APIs for small tasks (e.g., saving form data).

**Example:**

```tsx
// app/actions.ts
"use server";

export async function addName(formData: FormData) {
  const name = String(formData.get("name") || "");
  console.log("Save in DB:", name);
}
tsx// app/page.tsx
import { addName } from "./actions";

export default function Page() {
  return (
    <form action={addName}>
      <input name="name" placeholder="Your name" />
      <button type="submit">Save</button>
    </form>
  );
}

2. Basics of Next.js

Built on React.
Provides routing, layouts, SEO, and Server Components.
Uses file-system routing: folders define paths, page.tsx defines UI.


3. Server vs Client Components
Server Components (Default)

Safe for sensitive data (e.g., secrets).
Can fetch data directly.
Cannot use hooks or handle events.

Example:
tsx// server-demo/page.tsx
export default async function Page() {
  const res = await fetch("https://dummyjson.com/products/1");
  const data = await res.json();
  return <div>{data.title}</div>;
}
Client Components

Add "use client" directive at the top.
Can use hooks (useState, useEffect) and handle events (e.g., button clicks).

Example:
tsx// client-demo/Counter.tsx
"use client";
import { useState } from "react";

export default function Counter() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>Count: {n}</button>;
}

4. Routing System

Folders in app/ define URL paths.
page.tsx inside a folder creates the UI for that route.

Example:
textapp/
 └─ profile/
     └─ page.tsx   → /profile

5. Nested Routes

Subfolders create nested routes.

Example:
textapp/
 └─ profile/
     ├─ page.tsx          → /profile
     └─ account/
         └─ page.tsx      → /profile/account

6. Dynamic Routes

Use square brackets [param] for dynamic segments.

Example:
textapp/
 └─ product/
     └─ [id]/
         └─ page.tsx   → /product/123
tsx// app/product/[id]/page.tsx
export default function Page({ params }: { params: { id: string } }) {
  return <h1>Product ID: {params.id}</h1>;
}

7. Catch-All & Optional Routes

[...slug]: Captures all URL segments.
[[...slug]]: Optional, works with or without params.

Example:
text/docs/a/b/c   → [...slug]
/explore      → [[...slug]]
/explore/x/y  → [[...slug]]

8. Layouts

app/layout.tsx: Root layout for shared UI across all pages.
Folder-specific layouts for sections.

Example:
tsx// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav>Global Nav</nav>
        {children}
      </body>
    </html>
  );
}

9. Route Groups

Use (group) to organize routes without affecting URLs.

Example:
textapp/
 └─ (auth)/
     ├─ login/page.tsx     → /login
     └─ register/page.tsx  → /register

10. Client-Side Hooks

Link: Navigation without page refresh.
useRouter(): Programmatic navigation (push, replace, back, forward).
usePathname(): Get current URL path.
useSearchParams(): Read query parameters.

Example:
tsx"use client";
import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function NavClient() {
  const router = useRouter();
  const path = usePathname();
  const params = useSearchParams();

  return (
    <div>
      <Link href="/about">Go About</Link>
      <button onClick={() => router.push("/home")}>Go Home</button>
      <p>Path: {path}</p>
      <p>ID: {params.get("id")}</p>
    </div>
  );
}

11. Special Files

not-found.tsx: Custom 404 page.
loading.tsx: Automatic loading state UI.
error.tsx: Error boundary for handling errors.


12. Metadata (SEO)

Add static or dynamic metadata for SEO.

Static Example:
tsxexport const metadata = {
  title: "About Us",
  description: "Simple about page",
};
Dynamic Example:
tsxexport async function generateMetadata({ params }: { params: { id: string } }) {
  return { title: `Product ${params.id}` };
}
```
