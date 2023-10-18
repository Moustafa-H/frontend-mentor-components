import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Frontend Mentor Components',
  description: 'Built web components based on frontendmentor.io',
}

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en">
      <body>{ children }</body>
    </html>
  )
}

export default RootLayout