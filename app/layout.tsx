import type { Metadata } from "next";
// import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import SmoothScroll from "@/components/providers/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";

// Fallback font variables (System fonts)
const outfitVariable = "font-sans";
const spaceGroteskVariable = "font-mono";

export const metadata: Metadata = {
  title: "Sunny Tyagi | Creative Developer",
  description: "Next-generation interactive portfolio of Sunny Tyagi, a Full-Stack Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased font-sans bg-neutral-950 text-neutral-50 selection:bg-cyan-500/30 selection:text-cyan-200`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll>
            <CustomCursor />
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
