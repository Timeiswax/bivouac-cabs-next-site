import { Playfair_Display } from "next/font/google";
import "./globals.css";

 // import Font Awesome CSS
 import "@fortawesome/fontawesome-svg-core/styles.css";
 import { config } from "@fortawesome/fontawesome-svg-core";
 config.autoAddCss = false;

const font = Playfair_Display({ subsets: ["latin"] });

export const metadata = {
  title: "Bivouac Cabs",
  description: "Bivouac Cabs the Band",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
