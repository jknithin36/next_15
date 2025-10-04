// app/not-found.tsx
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const PrimaryAccent = "hsl(142,70%,55%)";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-screen-xl px-4 sm:px-6">
      <section className="grid min-h-[60vh] grid-cols-1 items-center gap-10 py-20 lg:grid-cols-2">
        <div className="justify-self-center">
          <Image
            src="/imagenotfound.png"
            alt="Calm waterside illustration."
            width={480}
            height={640}
            priority
            className="w-full max-w-md rounded-2xl border border-black/5 bg-white shadow-lg h-auto"
          />
        </div>

        {/* Copy + actions */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Page not found</h1>
          <p className="mt-3 text-muted-foreground">
            The page you’re looking for doesn’t exist or may have moved.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              asChild
              className="border-none font-medium"
              style={{
                backgroundColor: PrimaryAccent,
                backgroundImage:
                  "linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(0,0,0,0.05))",
              }}
            >
              <Link href="/">Go to Home</Link>
            </Button>

            <Button variant="outline" asChild>
              <Link href="/create/post">Start writing</Link>
            </Button>
          </div>

          <p className="mt-8 text-xs text-muted-foreground">
            If this seems wrong, please let us know.
          </p>
        </div>
      </section>
    </main>
  );
}
