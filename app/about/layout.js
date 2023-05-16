import '../globals.css'

export const metadata = {
  title: "About Salym Wellness Centre - Embracing Nature for Optimal Wellness",
  description: "Description: Learn about Salym Wellness Centre's mission to bring harmony between health, nature, and indigenous sources in healthcare. Explore our commitment to providing naturopathic wellness solutions, high-quality herbal products, and a holistic approach to well-being.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
