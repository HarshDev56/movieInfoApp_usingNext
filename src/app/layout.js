import Header from './components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import { Mulish } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
const mulish = Mulish({
  weight:['300','400','500','600','700','800','900'],
  subsets: ['latin'],
  display:'swap'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={mulish.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
