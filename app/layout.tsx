import "./globals.css";

export const metadata = {
  title: "AutomateFlow",
  description: "AI Automation Agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-lightbg text-gray-900">
        {children}
      </body>
    </html>
  );
}