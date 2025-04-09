import "@/styles/globals.css";
import "@/styles/list.module.css";
import '@/styles/common.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
