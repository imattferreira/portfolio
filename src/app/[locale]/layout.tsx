import { useLocale } from "next-intl";
import { notFound } from 'next/navigation';

type RootLayoutProps = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

function RootLayout({ children, params }: RootLayoutProps) {
  const locale = useLocale();

  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
    <head />
    <body>{children}</body>
    </html>
  );
}

export default RootLayout;
