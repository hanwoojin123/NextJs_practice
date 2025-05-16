import "@/styles/css/reset.css";
import "@/styles/css/fonts.css";
import "@/styles/css/common.css";
import React from "react";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="ko">
            <body>
                {children}
            </body>
        </html>
    );
}