"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// ThemeProvider component to wrap the app and provide theme support
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    // Wrap the app in the NextThemesProvider to enable theme support
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
