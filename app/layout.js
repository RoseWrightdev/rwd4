import './globals.css'

export const metadata = {
  title: 'RoseWright.dev',
  description: 'RoseWright.dev',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
