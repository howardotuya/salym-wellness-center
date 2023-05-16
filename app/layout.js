import './globals.css';

export const metadata = {
  title: "Welcome to Salym Wellness Centre - Your Path to Natural Health and Wellness",
  description: "Discover the power of nature at Salym Wellness Centre. Explore our range of herbal products, clinical sessions, and naturopathic therapies. Join our community for expert guidance on holistic well-being and unlock the secrets to a healthier, balanced life.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
