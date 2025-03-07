"use client";

import VisitorTracker from "@/components/VisitorTracker";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <VisitorTracker />
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        storageKey="theme"
        disableTransitionOnChange={false}
        enableColorScheme>
        {children}
      </NextThemesProvider>
    </>
  );
}
