import React from "react";
import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Sushant from "@/public/Sushant.png"
import Ishaan from "@/public/Ishaan.jpg"

type Props = {};

function Testimonials({}: Props) {
  return (
    <div>
      <section className="flex">
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1}}
          className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
        >
          <h2 className="text-4xl max-w-fit font-bold tracking-tight sm:text-5xl text-black dark:text-gray-100 relative group cursor-default">
            See What <span className="text-yellow-300">The Community</span> Has to say
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-yellow-400 transition-all group-hover:w-full"></span>
          </h2>
          <h3 className="text-2xl max-w-fit font-light tracking-widest sm:text-lg text-black dark:text-gray-300 pt-5">Testmonials from our community members</h3>

          <motion.div
            initial={{ opacity: 0, x: 250, y:0, scale:0.9}}
            whileInView={{ opacity: 1, y: 0, x: 0, scale:1 }}
            transition={{ duration: 1 }}
            className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8"
          >
            <blockquote className="rounded-lg border border-yellow-500 p-8 hover:shadow-lg transition-all hover:scale-105">
              <div className="flex items-center gap-4">
              <Image src={Sushant} height={65} width={65} className="rounded-full object-cover object-center" alt="Sushant Sharma"/>

                <div>
                  <div className="flex justify-start gap-0.5 text-yellow-500">
                    <StarIcon className="h-4 w-4" />
                    <StarIcon className="h-4 w-4" />
                    <StarIcon className="h-4 w-4" />
                    <StarIcon className="h-4 w-4" />
                    <StarIcon className="h-4 w-4" />
                  </div>

                  <p className="mt-1 text-lg font-medium text-gray-700 dark:text-gray-100">
                    Avantika Shrivastava
                  </p>
                </div>
              </div>

              <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt voluptatem alias ut provident sapiente repellendus.
              </p>
            </blockquote>

            <blockquote className="rounded-lg border border-yellow-500 p-8 hover:shadow-lg transition-all hover:scale-105">
              <div className="flex items-center gap-4">
              <Image src={Sushant} height={65} width={65} className="rounded-full object-cover object-center" alt="Sushant Sharma"/>

                <div>
                  <div className="flex justify-start gap-0.5 text-yellow-500 ">
                    <StarIcon className="h-4 w-4" />
                    <StarIcon className="h-4 w-4" />
                    <StarIcon className="h-4 w-4" />
                    <StarIcon className="h-4 w-4" />
                    <StarIcon className="h-4 w-4" />
                  </div>

                  <p className="mt-1 text-lg font-medium text-gray-700 dark:text-gray-100">
                    Siddhant Shrivastava
                  </p>
                </div>
              </div>

              <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt voluptatem alias ut provident sapiente repellendus.
              </p>
            </blockquote>
            <blockquote className="rounded-lg border border-yellow-500 p-8 hover:shadow-lg transition-all hover:scale-105">
              <div className="flex items-center gap-4">
              <Image src={Sushant} height={65} width={65} className="rounded-full object-cover object-center" alt="Sushant Sharma"/>

                <div>
                  <div className="flex justify-start gap-0.5 text-yellow-500 ">
                    <StarIcon className="h-4 w-4" />
                    <StarIcon className="h-4 w-4" />
                    <StarIcon className="h-4 w-4" />
                    <StarIcon className="h-4 w-4" />
                    <StarIcon className="h-4 w-4" />
                  </div>

                  <p className="mt-1 text-lg font-medium text-gray-700 dark:text-gray-100">
                    Siddhant Shrivastava
                  </p>
                </div>
              </div>

              <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt voluptatem alias ut provident sapiente repellendus.
              </p>
            </blockquote>
            <blockquote className="rounded-lg border border-yellow-500 p-8 hover:shadow-lg transition-all hover:scale-105">
              <div className="flex items-center gap-4">
              <Image src={Sushant} height={65} width={65} className="rounded-full object-cover object-center" alt="Sushant Sharma"/>

                <div>
                  <div className="flex justify-start gap-0.5 text-yellow-500 ">
                    <StarIcon className="h-4 w-4" />
                    <StarIcon className="h-4 w-4" />
                    <StarIcon className="h-4 w-4" />
                    <StarIcon className="h-4 w-4" />
                    <StarIcon className="h-4 w-4" />
                  </div>

                  <p className="mt-1 text-lg font-medium text-gray-700 dark:text-gray-100">
                    Siddhant Shrivastava
                  </p>
                </div>
              </div>

              <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt voluptatem alias ut provident sapiente repellendus.
              </p>
            </blockquote>
            <blockquote className="rounded-lg border border-yellow-500 p-8 hover:shadow-lg transition-all hover:scale-105">
              <div className="flex items-center gap-4">
              <Image src={Sushant} height={65} width={65} className="rounded-full object-cover object-center" alt="Sushant Sharma"/>

                <div>
                  <div className="flex justify-start gap-0.5 text-yellow-500 ">
                    <StarIcon className="h-4 w-4" />
                    <StarIcon className="h-4 w-4" />
                    <StarIcon className="h-4 w-4" />
                    <StarIcon className="h-4 w-4" />
                    <StarIcon className="h-4 w-4" />
                  </div>

                  <p className="mt-1 text-lg font-medium text-gray-700 dark:text-gray-100">
                    Siddhant Shrivastava
                  </p>
                </div>
              </div>

              <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt voluptatem alias ut provident sapiente repellendus.
              </p>
            </blockquote>

            <blockquote className="rounded-lg border border-yellow-500 p-8 hover:shadow-lg transition-all hover:scale-105">
              <div className="flex items-center gap-4">
              <Image src={Ishaan} height={65} width={65} className="rounded-full object-cover object-center" alt="Ishaan"/>

                <div>
                  <div className="flex justify-start gap-0.5 text-yellow-500">
                    <StarIcon className="h-4 w-4" />
                    <StarIcon className="h-4 w-4" />
                    <StarIcon className="h-4 w-4" />
                    <StarIcon className="h-4 w-4" />
                    <StarIcon className="h-4 w-4" />
                  </div>

                  <p className="mt-1 text-lg font-medium text-gray-700 dark:text-gray-100">
                  Ishaan
                  </p>
                </div>
              </div>

              <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt voluptatem alias ut provident sapiente repellendus.
              </p>
            </blockquote>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

export default Testimonials;
