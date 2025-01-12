// import { JetBrains_Mono } from "next/font/google";
// import "./globals.css";
// import Header from "@/components/Header";
// import PageTransition from "@/components/PageTransition";
// import StairTransition from "@/components/StairTransition";

// const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"],weight:["100","200","300","400","500","600","700","800"],
//   variable: '--font-jetbrainsMono'
//  });

// export const metadata = {
//   title: "Bechir Ghouma",
//   description: "Portfolio",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={jetbrainsMono.variable}>
//       <Header />
//       <StairTransition />
//       <PageTransition >
//         {children}
//       </PageTransition>
      
//       </body>
//     </html>
//   );
// }
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Bechir Ghouma",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        {/* Optional: Apple Touch Icon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        {/* Optional: Web App Manifest */}
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
