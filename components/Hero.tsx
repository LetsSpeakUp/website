import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Hero({}: Props) {
  const container = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 1,
        duration: 1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="h-screen">
      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center text-black dark:text-gray-100">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            viewport={{ once: true }}
            className="mx-auto max-w-xl text-center cursor-default"
          >
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Understand User Flow.
              <strong className="font-extrabold text-yellow-600 sm:block">
                Let's Speak Up.
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed tracking-widest">
              Communicate with confidence, succeed with ease
            </p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap justify-center gap-4"
            >
              <a
                className="block w-full rounded bg-yellow-600 px-12 py-3 text-sm font-medium text-black shadow hover:bg-yellow-700 focus:outline-none focus:ring active:bg-yellow-500 sm:w-auto transition-all"
                href="/get-started"
              >
                Get Started
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
