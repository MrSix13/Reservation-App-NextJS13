import { Nunito } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar/Navbar'
import ClientOnly from './components/ClientOnly'
import Modal from './components/modals/Modal'
import { RegisterModal } from './components/modals'
import { ToaesterProvider } from './providers'


const font = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={font.className}>
        <ClientOnly>
          <ToaesterProvider />
          <RegisterModal />
          <Navbar />

        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
