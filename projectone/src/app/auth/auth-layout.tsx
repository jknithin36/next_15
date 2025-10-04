"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import LoginForm from "./login-form";
import RegisterForm from "./register-form";
import { useRouter } from "next/navigation";

export default function AuthLayout() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

  // Tokens
  const PrimaryAccent = "hsl(142, 70%, 55%)"; // mint/green
  const SoftBackground = "hsl(40, 60%, 98%)"; // warm cream
  const SoftBorder = "hsl(40, 25%, 90%)";
  const Heading = "#111827"; // neutral-900
  const Body = "#4B5563"; // neutral-600

  return (
    <section
      className="relative min-h-screen antialiased"
      style={{ backgroundColor: SoftBackground }}
    >
      {/* Left accent bar */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 h-full w-2 sm:w-3"
        style={{ backgroundColor: PrimaryAccent }}
      />

      {/* Content grid */}
      <div className="relative z-10 grid min-h-[calc(100vh-64px)] grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left: headline + tagline only (clean, no chips/pill) */}
        <aside className="flex items-center px-6 pb-12 pt-2 lg:px-12">
          <div className="max-w-xl">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-[1.04] tracking-tight"
              style={{ color: Heading }}
            >
              Write with calm.
              <br className="hidden sm:block" />
              Publish with clarity.
            </h1>

            {/* subtle accent underline */}
            <div
              className="mt-4 h-1 w-20 rounded-full"
              style={{ backgroundColor: PrimaryAccent }}
            />

            <p className="mt-6 text-lg leading-relaxed" style={{ color: Body }}>
              A quiet place to collect your thoughts, shape longer stories, and
              share them on your terms—without the noise.
            </p>
          </div>
        </aside>

        {/* Right: auth card */}
        <main className="flex items-start justify-start px-6 pb-20 pt-6 lg:items-center lg:px-0">
          <div className="w-full max-w-md lg:ml-6 xl:ml-12">
            <div
              className="rounded-2xl border bg-white"
              style={{
                borderColor: SoftBorder,
                boxShadow:
                  "0 22px 40px -24px rgba(17, 24, 39, 0.22), 0 10px 18px -12px rgba(17, 24, 39, 0.10)",
              }}
            >
              <div className="px-8 py-10 sm:px-10 sm:py-12">
                <div className="mb-8 text-left">
                  <h2
                    className="text-3xl font-bold tracking-tight"
                    style={{ color: Heading }}
                  >
                    Join <span style={{ color: PrimaryAccent }}>Slug</span>
                  </h2>
                  <p className="mt-1 text-sm" style={{ color: Body }}>
                    Your writing, beautifully organized.
                  </p>
                </div>

                <Tabs
                  value={activeTab}
                  onValueChange={(v) => setActiveTab(v as "login" | "register")}
                  className="w-full"
                >
                  <TabsList
                    // clean pill container
                    className="inline-flex h-10 items-center rounded-full border bg-neutral-50 p-1"
                    style={{ borderColor: SoftBorder }}
                  >
                    <TabsTrigger
                      value="login"
                      className="
    inline-flex items-center justify-center whitespace-nowrap
    rounded-full px-4 text-sm font-medium text-neutral-700
    data-[state=active]:bg-white data-[state=active]:text-neutral-900
    focus-visible:outline-2 focus-visible:outline-offset-2
    focus-visible:outline-[hsl(142,70%,55%)]
  "
                    >
                      Sign in
                    </TabsTrigger>

                    <TabsTrigger
                      value="register"
                      className="
    inline-flex items-center justify-center whitespace-nowrap
    rounded-full px-4 text-sm font-medium text-neutral-700
    data-[state=active]:bg-white data-[state=active]:text-neutral-900
    focus-visible:outline-2 focus-visible:outline-offset-2
    focus-visible:outline-[hsl(142,70%,55%)]
  "
                    >
                      Create account
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="login" className="mt-6">
                    <LoginForm primaryColor={PrimaryAccent} />
                  </TabsContent>

                  <TabsContent value="register" className="mt-6">
                    <RegisterForm
                      primaryColor={PrimaryAccent}
                      onSuccess={() => router.push("/")}
                    />
                  </TabsContent>
                </Tabs>

                <p className="mt-8 text-center text-xs" style={{ color: Body }}>
                  By continuing, you agree to our Terms and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
