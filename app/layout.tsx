import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Amita } from 'next/font/google'

const amita = Amita({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Scroll Perspective',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={amita.className}>{children}</body>
    </html>
  )
}
