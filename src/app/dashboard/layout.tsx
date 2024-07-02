import Layout from '@/components/Layout'
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
        <AuthProvider>
          <Layout>{children}</Layout>
        </AuthProvider>
      </body>
    </html>
  )
}
