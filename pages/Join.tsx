import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JoinUs from "@/components/JoinUs";
import Head from "next/head";
import React from "react";
import { motion } from "framer-motion";
import ProgressBar from "@/components/ProgressBar";

type Props = {};

function Join({}: Props) {
  return (
    <div className="bg-gradient-to-tr from-yellow-100 via-neutral-200 to-yellow-100/70 dark:bg-gradient-to-t dark:from-slate-900 dark:to-neutral-950">
          <Head>
        <title>Join  Us</title>
      </Head>
      <ProgressBar />
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center cursor-default p-8"
      >
        <h1 className="text-2xl font-semibold text-gray-800 lg:text-4xl dark:text-gray-100 relative group ">
          Opportunity Hunting? <span className="text-yellow-300">Join Us!</span>
          {/* <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full"></span> */}
        </h1>

        <p className="max-w-lg mx-auto mt-4 text-gray-500 dark:text-gray-400">
          Let&apos;s get you ahead of the curve, come join the Community! It&apos;s totally free!
        </p>
      </motion.div>
      <JoinUs />
      <Footer />
    </div>
  );
}

export default Join;
