import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Team from "@/components/Team";
import React from "react";

type Props = {};

function meet({}: Props) {
  return (
    <div>
      <Header />
      <Team />
      <Footer />
    </div>
  );
}

export default meet;
