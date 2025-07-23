import "@/app/ui/global.css";
import { comic } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <h1 className="text-5xl mb-2">Title</h1>
        <div className={`${comic.className}`}>{children}</div>
      </body>
    </html>
  );
}
