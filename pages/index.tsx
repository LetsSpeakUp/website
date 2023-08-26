import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import Hero from "@/components/Hero";
import Button from "@/components/Button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <div>
      <Header />
      <Hero />
      <section id="footer" className="bottom-0">
        <Footer />
      </section>
     
      <Button/>




    </div>
  );
}
