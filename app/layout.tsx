import { Footer, NavBar } from '@/Components'
import './globals.css'

export const metadata = {
  title: 'Car show Case ',
  description: 'Discover the best cars in the world ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <NavBar />
        {children}
        <Footer/>
      </body>
    </html>
  )
}
