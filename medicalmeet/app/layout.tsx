import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider  } from '@clerk/nextjs'
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import {dark} from "@clerk/themes"

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Doctor App",
  description: "Doctor Apomement App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      baseTheme: dark,
    }}>
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen"> {children}</main>
        </ThemeProvider>
        <footer className="bg-muted/50 py-12">
          <div className="container mx-auto px-4 text-center text-gray-200">
            <p>© ${new Date().getFullYear()} Doctor App</p>
          </div>
        </footer>

      </body>

    </html>
    </ClerkProvider>
  );
}
