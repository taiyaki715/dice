"use client";

import { NextUIProvider } from '@nextui-org/react'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <NextUIProvider>
        <body>{children}</body>
      </NextUIProvider>
    </html>
  );
}
