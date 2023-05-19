import '../globals.css'

export const metadata = {
  title: "NH",
  description: "Nothin Here",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
