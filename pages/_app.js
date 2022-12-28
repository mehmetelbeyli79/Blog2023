/* Inter Fontunu fontu belirtilmemiş her yerde kullanmak için Projeye Dahil Ettim */
import { Inter } from "@next/font/google";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
// ``
import Layout from "./components/layout";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <main className={`${inter.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}

export default MyApp;
