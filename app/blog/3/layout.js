import '../../globals.css'

export const metadata = {
  title: "The Art of French Cooking: Mastering Classic Recipes",
  description: "If you love French cuisine, you've probably heard of Julia Child's 'Mastering the Art of French Cooking.' This classic cookbook has been the go-to guide for home cooks looking to learn the fundamentals of French cuisine for over 50 years. In this blog post, we'll explore why this book is a must-have for anyone looking to master the art of French cooking.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
