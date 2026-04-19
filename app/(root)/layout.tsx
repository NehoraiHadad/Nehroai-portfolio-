import '../globals.css';
import type { Metadata } from 'next';
import { fontVariables } from '@/lib/fonts';
import { siteDescription, siteOwnerName, siteTitle, siteUrl } from '@/lib/site-metadata';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteOwnerName,
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: siteOwnerName,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className={fontVariables} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
