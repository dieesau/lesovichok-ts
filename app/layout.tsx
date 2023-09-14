import '../css/globals.scss'
import '../css/none-style.scss'

import type {Metadata } from 'next'
export const metadata: Metadata = {
  title: 'ЛЕСОВИК',
  description: 'ФЕСТИВАЛЬ ЛЕСОВИК МОСКВА 2023',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
