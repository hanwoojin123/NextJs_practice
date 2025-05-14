import "@/assets/css/reset.css";
import "@/assets/css/fonts.css";
import "@/assets/css/common.css";

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
