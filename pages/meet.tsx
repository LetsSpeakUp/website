import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Team from "@/components/Team";
import React from "react";

type Props = {};

function meet({}: Props) {
  return (
    <div className="bg-[#f9fafb] dark:bg-gradient-to-t from-slate-900 to-neutral-950">
      <Header />
      <Team />
      <Footer />
    </div>
  );
}

export default meet;
