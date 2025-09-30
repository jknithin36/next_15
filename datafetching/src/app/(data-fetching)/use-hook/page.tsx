// app/(datafetching)/use-hook/page.tsx
import { Suspense, use } from "react";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email?: string;
  image?: string;
}

interface UserResponse {
  users: User[];
}

async function getUsers(): Promise<UserResponse> {
  const res = await fetch("https://dummyjson.com/users", {
    cache: "force-cache",
  });
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}

export default function UseHookExample() {
  const usersPromise = getUsers();

  return (
    <div className="min-h-screen bg-[var(--bg)] py-10 px-6">
      <div className="doc-container">
        {/* Page header */}
        <header className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-[var(--text)]">
            use() Hook + Suspense
          </h1>
          <p className="doc-muted mt-1">
            Demonstrating the React <code className="doc-code">use()</code> hook
            to unwrap promises in server components, rendered inside{" "}
            <code className="doc-code">&lt;Suspense&gt;</code>.
          </p>
        </header>

        {/* Suspense boundary */}
        <Suspense
          fallback={
            <div className="border border-[var(--border)] bg-[var(--card)] rounded-xl p-6 text-center doc-muted">
              Loading users…
            </div>
          }
        >
          <UsersList usersPromise={usersPromise} />
        </Suspense>
      </div>
    </div>
  );
}

function UsersList({ usersPromise }: { usersPromise: Promise<UserResponse> }) {
  const data = use(usersPromise);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {data.users.slice(0, 12).map((user) => (
        <article
          key={user.id}
          className="flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-sm hover:shadow-md transition-shadow"
        >
          {/* Avatar */}
          <div className="h-12 w-12 overflow-hidden rounded-full bg-[#f3f4f6] shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={
                user.image ??
                `https://api.dicebear.com/7.x/initials/svg?seed=${user.firstName}+${user.lastName}`
              }
              alt={`${user.firstName} ${user.lastName}`}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Info */}
          <div>
            <p className="font-medium text-[var(--text)]">
              {user.firstName} {user.lastName}
            </p>
            {user.email && (
              <p className="text-sm doc-muted truncate max-w-[200px]">
                {user.email}
              </p>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
