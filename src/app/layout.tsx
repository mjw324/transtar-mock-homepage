import {Noto_Sans, Nunito} from "next/font/google";
import "./globals.css";

const nunito = Nunito({subsets: ['latin']});
const noto = Noto_Sans({subsets: ['latin']});

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={noto.className}>{children}</body>
        </html>
    );
}
