
import { ThemeProvider } from "../components/ThemeProvider";
import Script from "next/script";

{/* Styles */}
import "../styles/_layout.scss";
import "../styles/_theme-globals.scss";

export const metadata = {
  title: "Home",
  description: "Minha HomePage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Bootstrap CSS */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />

        {/* Bootstrap Icons */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"
        />
      </head>

      {/* >>> necessário para o footer ficar fixo no final <<< */}
      <body>
        <ThemeProvider>
          <main>
            {children}
          </main>
        </ThemeProvider>

        {/* Bootstrap JS */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}