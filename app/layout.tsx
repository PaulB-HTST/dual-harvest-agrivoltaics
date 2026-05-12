import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Dual Harvest Agrivoltaics | UK Agrivoltaic Consultancy',
    template: '%s | Dual Harvest Agrivoltaics',
  },
  description: 'Independent agrivoltaic consultancy advising farmers, landowners, Local Authorities, and developers across the full range of agrivoltaic configurations for UK conditions. Harvesting land. Harvesting light.',
  keywords: ['agrivoltaics', 'agrivoltaic', 'solar farming', 'vertical bifacial PV', 'floatovoltaic', 'VBPV', 'solar consultancy', 'UK', 'Dual Harvest'],
  authors: [{ name: 'Paul Bird', url: 'https://dualharvestagrivoltaics.co.uk' }],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://dualharvestagrivoltaics.co.uk',
    siteName: 'Dual Harvest Agrivoltaics',
    title: 'Dual Harvest Agrivoltaics | UK Agrivoltaic Consultancy',
    description: 'Independent agrivoltaic consultancy covering the full range of configurations for UK conditions. Harvesting land. Harvesting light.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dual Harvest Agrivoltaics',
    description: 'Independent agrivoltaic consultancy. Harvesting land. Harvesting light.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
