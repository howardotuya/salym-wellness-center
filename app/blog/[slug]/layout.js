import '../../globals.css'

export const metadata = {
  title: "NH - Individual",
  description: "Nothin Here",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
