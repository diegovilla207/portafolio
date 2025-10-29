import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './styles/globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navbar from '@/components/Navbar'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Diego Villanueva Fernandez | Robotics Engineer',
  description: 'Robotics & Digital Systems Engineering Student | Programming Mentor | Innovator',
  keywords: 'robotics, engineering, programming, digital systems',
  authors: [{ name: 'Diego Villanueva Fernandez' }],
  openGraph: {
    title: 'Diego Villanueva Fernandez | Robotics Engineer',
    description: 'Robotics & Digital Systems Engineering Student | Programming Mentor | Innovator',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

