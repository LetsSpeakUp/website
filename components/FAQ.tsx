// pages/faq.tsx
import React, { useState } from "react";
import { motion, } from "framer-motion";

export default function FAQ() {
  return (
    <motion.div   initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 1 }}
    viewport={{ once: true }} className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:mx-auto">
            Got Questions? We&apos;ve <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500">Got you Covererd</span>  
          </h2>
          <p className="text-base text-gray-700  dark:text-gray-300 md:text-lg">
            Everything you need to know about Let&apos;s Speak Up
          </p>
        </div>
      </div>
      <div className="max-w-screen-xl sm:mx-auto">
        <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-medium">
                The quick, brown fox jumps over a lazy dog?
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Space, the final frontier. These are the voyages of the Starship
                Enterprise. Its five-year mission: to explore strange new
                worlds.
                <br />
                <br />
                Many say exploration is part of our destiny, but it’s actually
                our duty to future generations.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
                The first mate and his Skipper too will do?
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Well, the way they make shows is, they make one show. That
                show&apos;s called a pilot.
                <br />
                <br />
                Then they show that show to the people who make shows, and on
                the strength of that one show they decide if they&apos;re going to
                make more shows. Some pilots get picked and become television
                programs.Some don&apos;t, become nothing. She starred in one of the
                ones that became nothing.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
                Is the Space Pope reptilian!?
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                A flower in my garden, a mystery in my panties. Heart attack
                never stopped old Big Bear. I didn&apos;t even know we were calling
                him Big Bear.
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-medium">
                How much money you got on you?
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                The first mate and his Skipper too will do their very best to
                make the others comfortable in their tropic island nest.
                <br />
                <br />
                Michael Knight a young loner on a crusade to champion the cause
                of the innocent. The helpless. The powerless in a world of
                criminals who operate above the law. Here he comes Here comes
                Speed Racer. He&apos;s a demon on wheels.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
                Galaxies Orion&apos;s sword globular star cluster?
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                A business big enough that it could be listed on the NASDAQ goes
                belly up. Disappears!
                <br />
                <br />
                It ceases to exist without me. No, you clearly don&apos;t know who
                you&apos;re talking to, so let me clue you in.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium">
                When has justice ever been as simple as a rule book?
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                This is not about revenge. This is about justice. A lot of
                things can change in twelve years, Admiral. Well, that&apos;s
                certainly good to know. About four years. I got tired of hearing
                how young I looked.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
