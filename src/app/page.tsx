import Image from "next/image";
import Home from "./pages/home";
import Header from "./components/header";
import Footer from "./components/footer";
import Head from "next/head";

export default function App() {
  return (
    <main className="">
      <Head>
        {/* Google Fonts link for "Simplon Norm" (example placeholder, verify correct name) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Simplon+Norm:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />
      <Home />
      <Footer />
    </main>
  );
}
