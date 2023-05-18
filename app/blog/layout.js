import '../globals.css'

export const metadata = {
  title: "Salym Wellness Centre Blog - Unveiling the Secrets of Natural Health",
  description: "Dive into the world of natural health and wellness through the Salym Wellness Centre Blog. Discover insightful articles, expert tips, and evidence-based information on herbal therapy, physical therapy, counseling, naturopathy, and more. Empower yourself with knowledge for a healthier lifestyle.",
  openGraph: {
    title: "Salym Wellness Centre Blog - Unveiling the Secrets of Natural Health",
    description: "Dive into the world of natural health and wellness through the Salym Wellness Centre Blog. Discover insightful articles, expert tips, and evidence-based information on herbal therapy, physical therapy, counseling, naturopathy, and more. Empower yourself with knowledge for a healthier lifestyle.",
    url: "https://salymwellness.center/blog",
    siteName: "Salym Wellness Centre",
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
