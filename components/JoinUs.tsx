import React from "react";
import e from "@/public/images/e.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

function JoinUs({}: Props) {
  return (
    <div>
      <section className="overflow-hidden sm:grid sm:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.5, }}
          viewport={{ once: true }}
          className="p-8 md:p-12 lg:px-16 lg:py-24"
        >
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-yellow-300 md:text-3xl">
              We&apos;re always looking for new talent!
            </h2>
            <h4 className="text-md tracking-widest font-light text-gray-900 dark:text-white md:text-xl">
              And you look like the perfect addition!
            </h4>

            <p className="hidden text-gray-500 dark:text-gray-300 md:mt-4 md:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed. Quam a scelerisque amet
              ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
              quisque ut interdum tincidunt duis.
            </p>

            <div className="mt-4 md:mt-8">
              <button className="group relative inline-flex items-center justify-center overflow-hidden shadow-md rounded-full border border-yellow-600  hover:bg-yellow-500 px-8 py-3 mb-8 text-white focus:outline-none focus:ring active:bg-yellow-500 hover:text-black transition">
                <span className="absolute -end-full transition-all group-hover:end-4">
                  <svg
                    className="h-5 w-5 rtl:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>

                <span className="text-sm font-medium transition-all group-hover:me-4">
                  Sure I&apos;m in!
                </span>
              </button>
            </div>
          </div>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.7 }}
          viewport={{ once: true }}
          alt="Join Us"
          src="https://images.unsplash.com/photo-1555725305-e823b44548de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
          className="h-56 w-full object-cover sm:h-full pr-3"
        />
      </section>

{/* STEPS */}
      <motion.div   initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{once:true}}
           className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:mx-auto">
           Get started in a few   <span className="text-yellow-500 dark:text-yellow-300">easy</span> steps!
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>
        <motion.div   initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, type: 'spring', stiffness: 100 }}
          viewport={{once:true}}className="grid gap-8 row-gap-0 lg:grid-cols-3">
          <div className="relative text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-500 sm:w-20 sm:h-20">
              <svg
                className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-2 text-2xl font-extrabold">
              Step{" "}
              <span className="text-yellow-500 dark:text-yellow-300">1</span>
            </h6>
            <p className="max-w-md mb-3 text-sm text-gray-900 dark:text-gray-100 sm:mx-auto">
              Lookout flogging bilge rat main sheet bilge water nipper fluke to
              go on account heave down clap
            </p>

            <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
              <svg
                className="w-8 text-gray-700 transform rotate-90 lg:rotate-0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line
                  fill="none"
                  strokeMiterlimit="10"
                  x1="2"
                  y1="12"
                  x2="22"
                  y2="12"
                />
                <polyline
                  fill="none"
                  strokeMiterlimit="10"
                  points="15,5 22,12 15,19 "
                />
              </svg>
            </div>
          </div>
          <div className="relative text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-500 sm:w-20 sm:h-20">
              <svg
                className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-2 text-2xl font-extrabold">
              Step{" "}
              <span className="text-yellow-500 dark:text-yellow-300">2</span>
            </h6>
            <p className="max-w-md mb-3 text-sm text-gray-900 dark:text-gray-100 sm:mx-auto">
              They urge you to put down your sword and come join the winners. In
              22 years the only &apos;winners&apos;
            </p>

            <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
              <svg
                className="w-8 text-gray-700 transform rotate-90 lg:rotate-0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line
                  fill="none"
                  strokeMiterlimit="10"
                  x1="2"
                  y1="12"
                  x2="22"
                  y2="12"
                />
                <polyline
                  fill="none"
                  strokeMiterlimit="10"
                  points="15,5 22,12 15,19 "
                />
              </svg>
            </div>
          </div>
          <div className="relative text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-500 sm:w-20 sm:h-20">
              <svg
                className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-2 text-2xl font-extrabold">
              Step{" "}
              <span className="text-yellow-500 dark:text-yellow-300">3</span>
            </h6>
            <p className="max-w-md mb-3 text-sm text-gray-900 dark:text-gray-100 sm:mx-auto">
              Start interacting, educating and learning from the community!
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default JoinUs;
