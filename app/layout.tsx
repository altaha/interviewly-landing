import './css/style.css'

import { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Header from '@/components/ui/header'
import Banner from '@/components/banner'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Interviewly.ai",
  description: "Interviewly.ai is your AI Interview Coach. Practice and Ace your interviews with the help of an AI mock Interviewer.",
  keywords: ["Mock Interview", "GPT", "AI"],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://interviewly.ai",
  },
  openGraph: {
    type: "website",
    url: "https://interviewly.ai",
    title: "Interviewly: AI Interview Coach",
    description: "Practice and Ace your interviews with the help of an AI interview coach",
    siteName: "Interviewly AI",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}>
        <div className="Simpleflex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
          {/*<Banner />*/}
        </div>
      </body>
    </html>
  )
}
