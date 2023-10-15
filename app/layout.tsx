import { Urbanist } from 'next/font/google'

import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

import './globals.css'

const font = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'Dropship - High-Quality Products, Great Deals',
  description: 'Discover the best place for all your purchases. Your Dropship Store offers a wide range of high-quality products, including electronics, fashion, home decor, and more. Use Dropship® to design a beautiful website store with ease. Start a dropshipping business with only a few clicks! An easy-to-use online store builder trusted by millions of stores. Jumpstart your dropshipping business with us. Start your free trial today. Drop Shipping Integration. Social Media Integration. Unlimited 24/7 support. Full blogging platform.',
  keywords: 'dropshipping, online store, high-quality products, great deals, electronics, fashion, home decor, Shopify, website builder, dropshipping integration, social media integration, free trial, bangalore, karnataka, tamilnadu, india',
  author: 'drop ship',
  image: 'https://res.cloudinary.com/do7ntibpe/image/upload/v1697378708/dropship-coming-soon.jpg',
  canonical: 'https://dropships.vercel.app',
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
