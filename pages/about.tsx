import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Head from "next/head";

type Props = {};

export default function about({}: Props) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  return (
    <div>
      <Head>
        <title>About Us</title>
      </Head>
      {/* Progress bar */}
      <motion.div
        className="sticky h-1 top-0 bg-yellow-500 will-change-transform z-50 max-w-full"
        style={{ scaleX }}
      />
      <Header />
      <section>
        <FAQ />
      </section>
      <Footer />
    </div>
  );
}
