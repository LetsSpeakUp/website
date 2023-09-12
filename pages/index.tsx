import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { motion, useScroll, useSpring } from "framer-motion";
import FAQ from "@/components/FAQ";
import Head from "next/head";
import Image from "next/image";
import a from "@/public/images/a.jpg";
import b from "@/public/images/b.jpg";
import CountUp from "react-countup";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = scrollYProgress;
  return (
    <div className="scrollbar scrollbar-thumb-yellow-500 scrollbar-track-gray-900 bg-[#f9fafb] dark:bg-gradient-to-t from-slate-900 via-slate-800 to-neutral-950">
      <Head>
        <title>Let's Speak Up</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        className="sticky h-1 top-0 bg-gradient-to-r from-yellow-500 via-amber-600 to-yellow-500 will-change-transform z-50 max-w-full"
        style={{ scaleX }}
      />

      <Header />
      <Hero />

      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold sm:text-4xl text-black dark:text-gray-100 text-center relative group">
              <span>Lorem ipsum, dolor sit amet adipisicing elit.</span>
              <span className="absolute -bottom-1 right-0 w-0 h-1 bg-yellow-400 transition-all group-hover:w-full" />
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <Image
                alt="Party"
                src={a}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-16">
              <article className="space-y-4 text-black dark:text-gray-300">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                  qui hic atque tenetur quis eius quos ea neque sunt,
                  accusantium soluta minus veniam tempora deserunt? Molestiae
                  eius quidem quam repellat.
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolorum explicabo quidem voluptatum voluptas illo accusantium
                  ipsam quis, vel mollitia? Vel provident culpa dignissimos
                  possimus, perferendis consectetur odit accusantium dolorem
                  amet voluptates aliquid, ducimus tempore incidunt quas.
                  Veritatis molestias tempora distinctio voluptates sint! Itaque
                  quasi corrupti, sequi quo odit illum impedit!
                </p>
              </article>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="lg:py-16">
              <article className="space-y-4 text-black dark:text-gray-300">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                  qui hic atque tenetur quis eius quos ea neque sunt,
                  accusantium soluta minus veniam tempora deserunt? Molestiae
                  eius quidem quam repellat.
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolorum explicabo quidem voluptatum voluptas illo accusantium
                  ipsam quis, vel mollitia? Vel provident culpa dignissimos
                  possimus, perferendis consectetur odit accusantium dolorem
                  amet voluptates aliquid, ducimus tempore incidunt quas.
                  Veritatis molestias tempora distinctio voluptates sint! Itaque
                  quasi corrupti, sequi quo odit illum impedit!
                </p>
              </article>
            </div>
            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <Image
                alt="Party"
                src={b}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="d5589eeb-3fca-4f01-ac3e-983224745704"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#d5589eeb-3fca-4f01-ac3e-983224745704)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">The</span>
            </span>{" "}
            quick, brown fox jumps over a lazy dog
          </h2>
          <p className="text-base text-gray-700 md:text-lg dark:text-gray-300">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>
        <div className="relative w-full p-px mx-auto mb-4 overflow-hidden duration-300 lg:mb-8 lg:max-w-4xl group ">
          <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="relative flex flex-col items-center h-full py-10 duration-300 bg-transparent rounded-sm transition-color sm:items-stretch sm:flex-row">
            <div className="px-12 py-8 text-center">
              <CountUp
                start={0}
                end={400}
                duration={5}
                suffix="+"
                className="text-4xl font-bold text-deep-purple-accent-400 sm:text-5xl text-yellow-500 dark:text-yellow-300"
              />
              <p className="text-center md:text-base">
                Lorem ipsum dolor adipiscing sit amet, consectetur elit.
              </p>
            </div>
            <div className="w-56 h-1 transition duration-300 transform bg-gray-300 rounded-full group-hover:bg-deep-purple-accent-400 group-hover:scale-110 sm:h-auto sm:w-1" />
            <div className="px-12 py-8 text-center">
              <CountUp
                start={0}
                end={50}
                duration={5}
                suffix="+"
                className="text-4xl font-bold text-deep-purple-accent-400 sm:text-5xl text-yellow-500 dark:text-yellow-300"
              />
              <p className="text-center md:text-base">
               Online events organized by Let's Speak Up till date
              </p>
            </div>
          </div>
        </div>
        <p className="mx-auto mb-4 text-gray-600 sm:text-center lg:max-w-2xl lg:mb-6 md:px-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <Testimonials />

      <FAQ />

      <section id="footer" className="bottom-0">
        <Footer />
      </section>
    </div>
  );
}
