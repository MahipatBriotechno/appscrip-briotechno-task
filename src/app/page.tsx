import Image from "next/image";
import Home from "./pages/home";
import Header from "./components/header";
import Footer from "./components/footer";
import Head from "next/head";

export default function App() {
  return (
    <main className="">
      <Header />
      <Home />
      <Footer />
    </main>
  );
}
