import "@/app/ui/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <h1 className="text-blue-500 mb-2">Title</h1>
        {children}
      </body>
    </html>
  );
}
