// app/loading.tsx  (Server Component; no "use client")
import { Loader2 } from "lucide-react";

const PrimaryAccent = "hsl(142,70%,55%)";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-background/60 backdrop-blur-sm">
      <div className="flex items-center gap-3 rounded-xl border bg-background/80 p-4 shadow-lg">
        <Loader2
          className="h-5 w-5 animate-spin"
          style={{ color: PrimaryAccent }}
        />
        <span className="text-sm text-muted-foreground">Loading…</span>
      </div>
    </div>
  );
}
