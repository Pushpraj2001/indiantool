import { Inter } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Indian Tools - Your All-in-One Toolset',
  description: 'Collection of powerful online tools with Indian essence',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-orange-100 via-white to-green-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900`}>
        <Header />
        <main className="min-h-screen container mx-auto px-4">{children}</main>
        <Footer />
      </body>
    </html>
  )
}