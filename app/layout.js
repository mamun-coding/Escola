import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import Topbar from './Components/Topbar/Topbar'


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata = {
  title: 'Your App Title',
  description: 'Your app description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased font-sans flex flex-col min-h-screen`}>
        <Topbar/>
        <NavBar/>
        <main className="flex-grow">
          {children}
        </main>
        {/* <Footer/> */}
      </body>
    </html>
  )
}