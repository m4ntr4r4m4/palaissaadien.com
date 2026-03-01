import './globals.css';

export const metadata = {
  title: 'Palais Saadien — Prototype',
  description: 'Modern Next.js prototype front page for Palais Saadien.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
