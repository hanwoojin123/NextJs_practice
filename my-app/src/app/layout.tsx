import "@/styles/css/reset.css";
import "@/styles/css/fonts.css";
import "@/styles/css/common.css";

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
