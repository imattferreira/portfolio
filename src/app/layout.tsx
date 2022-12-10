type RootLayoutProps = {
  children: React.ReactNode;
}

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
    <head />
    <body>{children}</body>
    </html>
  );
}

export default RootLayout;
