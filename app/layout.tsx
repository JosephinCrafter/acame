import '@/app/ui/global.css';
import { inter } from '@/app/ui/font';
import { lusitana } from '@/app/ui/font';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lusitana.variable} antialiased`}>{children}</body>
    </html>
  );
}
