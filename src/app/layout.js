import { Poppins } from "next/font/google"
import "./globals.css";

export const metadata = {
  title: "Test Project",
  description: "This is a test project.",
};

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"]
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
