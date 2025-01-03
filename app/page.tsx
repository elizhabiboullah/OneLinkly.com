import { redirect } from 'next/navigation'
import { Metadata } from 'next'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: 'https://onelinkly.com',
    siteName: siteConfig.name,
    images: [
      {
        url: 'https://onelinkly.com/onelinkly.png',
        width: 1200,
        height: 630,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: ['https://onelinkly.com/onelinkly.png'],
    creator: '@onelinkly',
  },
}

export default function Home() {
  redirect('https://onelinkly.com/dashboard/')
}
