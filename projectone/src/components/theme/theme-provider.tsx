"use client";

import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps,
} from "next-themes";
import Header from "../layout/header";
import { cn } from "@/lib/utils"; // Assuming cn is a utility function for merging classes

interface ExtendedThemeProviderProps extends ThemeProviderProps {
  containerClassName?: string;
}

export default function ThemeProvider({
  children,
  containerClassName,
  ...props
}: ExtendedThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <Header />

      {/* FIX: Removed default padding (px-4 sm:px-6 lg:px-8) to eliminate the hydration error 
          caused by the class change from the server render. The main element is now 
          a simple full-width wrapper. Pages like AuthLayout or other content must 
          apply their own internal spacing/padding.
      */}
      <main className={cn(containerClassName)}>{children}</main>
    </NextThemesProvider>
  );
}
