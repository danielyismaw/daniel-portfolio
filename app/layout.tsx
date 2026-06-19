import "./globals.css";

export const metadata = {
  title: "Daniel Yismaw Portfolio",
  description: "Telecom Engineer | Full Stack Developer | AI Researcher",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
