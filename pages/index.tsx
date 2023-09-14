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
import ProgressBar from "@/components/ProgressBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="scrollbar scrollbar-thumb-yellow-500 scrollbar-track-gray-900 bg-gradient-to-tr from-yellow-100 via-neutral-200 to-yellow-100/70 dark:bg-gradient-to-t dark:from-slate-900 dark:via-slate-800 dark:to-neutral-950">
      <Head>
        <title>Let&apos;s Speak Up</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProgressBar />

      <Header />
      <Hero />

      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl max-w-fit font-bold tracking-tight sm:text-4xl text-black dark:text-gray-100 relative group cursor-default">
              Things we{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500">
                Believe
              </span>{" "}
              In
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-yellow-400 transition-all group-hover:w-full"></span>
            </h2>
            <h3 className="text-lg max-w-fit tracking-widest sm:text-lg text-black dark:text-gray-300 pt-5">
              Our Values
            </h3>
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

      {/* STATS */}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 100, delay: 1 }}
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Statistics That <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-500">Tell the Tale</span>
            </h2>

            <p className="mt-4 text-gray-700 dark:text-gray-400 sm:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              dolores laborum labore provident impedit esse recusandae facere
              libero harum sequi.
            </p>
          </div>

          <div className="mt-8 sm:mt-12">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex flex-col rounded-lg bg-orange-200 px-4 py-8 text-center dark:bg-yellow-500 hover:dark:bg-yellow-600 hover:shadow-lg transition">
                <dt className="order-last text-lg font-medium text-yellow-950 dark:text-white/75 ">
                  Events Organized
                </dt>
                <CountUp className="text-4xl font-extrabold text-yellow-800 dark:text-yellow-100 md:text-5xl" duration={5} end={50} suffix="+" />
              </div>

              <div className="flex flex-col rounded-lg bg-orange-200 px-4 py-8 text-center dark:bg-yellow-500 hover:dark:bg-yellow-600 hover:shadow-lg transition">
                <dt className="order-last text-lg font-medium text-yellow-950 dark:text-white/75">
                  Official
                </dt>

                <CountUp className="text-4xl font-extrabold text-yellow-800 dark:text-yellow-100 md:text-5xl" duration={5} end={150} suffix="+" />
              </div>

              <div className="flex flex-col rounded-lg bg-orange-200 px-4 py-8 text-center dark:bg-yellow-500 hover:dark:bg-yellow-600 hover:shadow-lg transition">
                <dt className="order-last text-lg font-medium text-yellow-950 dark:text-white/75">
                 Members
                </dt>
                <CountUp className="text-4xl font-extrabold text-yellow-800 dark:text-yellow-100 md:text-5xl" duration={5} end={407}  />
              </div>
            </dl>
          </div>
        </div>
      </motion.div>

      <Testimonials />

      <FAQ />

      <section id="footer" className="bottom-0">
        <Footer />
      </section>
    </div>
  );
}
