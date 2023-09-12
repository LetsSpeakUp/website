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
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center cursor-default p-8"
      >
        <h1 className="text-2xl font-semibold text-gray-800 lg:text-4xl dark:text-gray-100 relative group ">
          All <span className="text-yellow-300">About Us!</span>
          {/* <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full"></span> */}
        </h1>

        <p className="max-w-lg mx-auto mt-4 text-gray-500 dark:text-gray-400">
          The story of how we came to be, our motives, goals, and much more
        </p>
      </motion.div>
      <section>
        <FAQ />
      </section>
      <Footer />
    </div>
  );
}
