import '../../globals.css'

export const metadata = {
  title: "The Healing Powers of Methyl Cream",
  description: "Methyl cream, a natural remedy derived from medicinal plants has gained popularity for its remarkable healing properties. This blog post explores the benefits and uses of methyl cream in promoting overall well-being and addressing various health concerns. Discover how this herbal preparation can enhance your journey towards optimal health and vitality.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
