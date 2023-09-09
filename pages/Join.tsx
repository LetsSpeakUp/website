import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JoinUs from "@/components/JoinUs";
import Head from "next/head";
import React from "react";

type Props = {};

function Join({}: Props) {
  return (
    <div className="bg-[#f9fafb] dark:bg-gradient-to-t from-slate-900 to-neutral-950">
          <Head>
        <title>Join  Us</title>
      </Head>
      <Header />
      <JoinUs />
      <Footer />
    </div>
  );
}

export default Join;
