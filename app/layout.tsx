import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from './i18n/LanguageContext'

export const metadata: Metadata = {
  title: 'Mentara - Your Offline Second Brain',
  description: 'Mentara is a privacy-first note-taking app that keeps your thoughts secure on your device. No accounts, no cloud, no tracking.',
  keywords: 'notes, second brain, offline, privacy, note-taking, iOS, Android',
  authors: [{ name: 'SYNTALYS TECH' }],
  openGraph: {
    title: 'Mentara - Your Offline Second Brain',
    description: 'Privacy-first note-taking. Your thoughts stay on your device.',
    url: 'https://mentarapp.com',
    siteName: 'Mentara',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mentara - Your Offline Second Brain',
    description: 'Privacy-first note-taking. Your thoughts stay on your device.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
