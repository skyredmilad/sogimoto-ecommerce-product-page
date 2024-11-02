import React from 'react';

import '../styles/globals.css';
import HeaderLayout from '@/components/layouts/HeaderLayout';
import FooterLayout from '@/components/layouts/FooterLayout';

export const metadata = {
  title: 'Sogimoto - Apple watch ultra 9',
  description: 'Apple watch ultra 9',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <HeaderLayout />
        {children}
        <FooterLayout />
      </body>
    </html>
  )
}
