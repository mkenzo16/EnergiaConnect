import './globals.css';

export const metadata = {
  title: 'EnergiaConnect',
  description: 'Gerenciamento de energia solar comunitária',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
