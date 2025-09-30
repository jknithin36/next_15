// src/app/data-fetching/page.tsx
import React from "react";

export default function Page() {
  return (
    <div className="space-y-8">
      <section className="doc-section">
        <h2>Server Component Fetch</h2>
        <p className="doc-muted mt-2">
          Fetch on the server with caching options like
          <code className="doc-code"> force-cache</code>,
          <code className="doc-code"> reload</code>, and
          <code className="doc-code"> no-store</code>.
        </p>
      </section>

      <section className="doc-section">
        <h2>useEffect</h2>
        <p className="doc-muted mt-2">
          Client-side fetch after render using{" "}
          <code className="doc-code">useEffect</code>.
        </p>
      </section>

      <section className="doc-section">
        <h2>use hook + Suspense</h2>
        <p className="doc-muted mt-2">
          Read promises with <code className="doc-code">use</code> inside
          <code className="doc-code"> &lt;Suspense&gt;</code>.
        </p>
      </section>

      <section className="doc-section">
        <h2>SWR</h2>
        <p className="doc-muted mt-2">
          Third-party fetching with caching, focus revalidation, and
          <code className="doc-code"> mutate()</code>.
        </p>
      </section>
    </div>
  );
}
