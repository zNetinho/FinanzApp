import Layout from '@/components/Layout'
import { ThemeProvider } from '@/components/theme-provider'
import { AuthProvider } from '@/providers/Auth'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | FinanzApp',
    default: 'Home | FinanzApp',
  },
  description: 'Generated by create next app',
}

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <Layout>{children}</Layout>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
