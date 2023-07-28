import { Mulish } from "@next/font/google"
import "./globals.css"

const mulishFont = Mulish({
  variable: "--mulish",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  display: "optional",
  subsets: ["latin"],
  fallback: ["Helvetica", "Arial", "sans-serif"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${mulishFont.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  )
}
