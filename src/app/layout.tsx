import "./globals.css"

export const metadata = {
  title: "Beyond Vitality Dashboard",
  description: "Your dashboard for everything",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <body className="bg-background text-foreground">{children}</body>
    </html>
  )
}
