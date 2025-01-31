import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin'
import type { Metadata } from 'next'
import { extractRouterConfig } from 'uploadthing/server'

import { ourFileRouter } from '@/app/api/uploadthing/core'
import ClientProvider from '@/providers/ClientProvider'

import './globals.css'

export const metadata: Metadata = {
  title: 'Kedai Om Jhon',
  description: 'Website jualan kedai om jhon',
  category: 'ecommerce',
  authors: { name: 'lalosianturi' },
  keywords: [
    'Next.js',
    'React',
    'JavaScript',
    'Perabotan',
    'Kebutuhan Pokok',
    'Makanan Ringan',
    'Minuman',
  ],
  creator: 'Tio Fulalo Simatupang',
  publisher: 'Tio Fulalo Simatupang',
  openGraph: {
    title: 'Kedai Om Jhon',
    description: 'Website jualan kedai om jhon',
    url: '/',
    siteName: 'Kedai Om Jhon',
    images: '/images/screenshot.png',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kedai Om Jhon',
    description: 'Website jualan kedai om jhon',
    images: ['/images/screenshot.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <ClientProvider>
          <NextSSRPlugin
            /**
             * The `extractRouterConfig` will extract **only** the route configs
             * from the router to prevent additional information from being
             * leaked to the client. The data passed to the client is the same
             * as if you were to fetch `/api/uploadthing` directly.
             */
            routerConfig={extractRouterConfig(ourFileRouter)}
          />
          {children}
        </ClientProvider>
      </body>
    </html>
  )
}
