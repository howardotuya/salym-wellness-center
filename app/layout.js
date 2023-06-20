import "./globals.css";

export const metadata = {
  title:
    "Welcome to Salym Wellness Centre - Your Path to Natural Health and Wellness",
  description:
    "Discover the power of nature at Salym Wellness Centre. Explore our range of herbal products, clinical sessions, and naturopathic therapies. Join our community for expert guidance on holistic well-being and unlock the secrets to a healthier, balanced life.",
  icons: {
    icon: [{ url: "/favicon.png" }],
    shortcut: ["/favicon.png"],
    apple: [{ url: "/favicon.png" }],
  },
  openGraph: {
    title: "Welcome to Salym Wellness Centre - Your Path to Natural Health and Wellness",
    description: "Discover the power of nature at Salym Wellness Centre. Explore our range of herbal products, clinical sessions, and naturopathic therapies. Join our community for expert guidance on holistic well-being and unlock the secrets to a healthier, balanced life.",
    url: "https://salymwellness.center",
    siteName: "Salym Wellness Centre",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  keywords: ["Salym Wellness Centre", "Salym wellness", "Salym center", "Herbal medical products", "Naturopathic wellness solutions", "Clinicals", "Productions", "Herbal therapy", "Physical therapy", "Counseling", "Massage", "Acupressure", "Naturopathy", "Immune booster", "Pure honey", "Methyl cream", "Herbal tea blends", "Antioxidant calming black soap", "Black oils", "Health and wellness", "Natural remedies", "Indigenous healthcare", "Resonating balance", "Herbal medicine solutions", "Safe and functional", "Accessible healthcare", "Organic production", "Raw materials for medicine production", "Healthy meal options", "Middle aged Nigerians", "Corporate professionals", "Business owners", "Pharmaceuticals", "Medical practitioners", "Newsletter", "Blog", "Community", "Lead generation", "Organic herbs", "Holistic healing", "Traditional medicine", "African herbs", "Wellness center", "Holistic therapies", "Stress relief", "Immune support", "Alternative medicine", "Herbal remedies", "Health products", "Plant-based medicine", "Lifestyle choices", "Wellness tips", "Health education", "Holistic approach", "Herbal blends", "African wellness", "Healing herbs", "Wellness community", "Self-care", "Wellness events", "Herbal consultations", "Herbal products for sale", "Herbal treatments", "Herbal formulas", "Herbal supplements", "Herbal extracts", "Herbal remedies for common ailments", "Herbal recipes", "Natural skincare", "Herbal cosmetics", "Herbal teas", "Herbal remedies for digestion", "Herbal remedies for sleep", "Herbal remedies for anxiety", "Herbal remedies for immune system", "Herbal remedies for pain relief", "Herbal remedies for energy boost"]
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
