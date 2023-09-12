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
    <div className="scrollbar scrollbar-thumb-yellow-500 scrollbar-track-gray-900 bg-neutral-100 dark:bg-gradient-to-t from-slate-900 via-slate-800 to-neutral-950">
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
          <h2 className="text-3xl max-w-fit font-bold tracking-tight sm:text-4xl text-black dark:text-gray-100 relative group cursor-default">
            Things we <span className="text-yellow-300">Believe</span> In
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

      <motion.div  initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: 'spring', stiffness: 100, delay:1 }}
        viewport={{ once: true }} className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:mx-auto">
           
            Statistics that <span className="text-yellow-500 dark:text-yellow-300">Tell The Tale</span>
          </h2>
          <p className="text-base text-gray-700 md:text-lg dark:text-gray-300">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
        <div className="text-center md:border-r">
        <CountUp start={0} end={50} suffix="+" className="text-4xl font-bold lg:text-5xl xl:text-6xl text-yellow-500 dark:text-yellow-300" />
          <p className="text-sm font-medium tracking-widest text-gray-800 dark:text-gray-100 uppercase lg:text-base">
            Events Organized
          </p>
        </div>
        <div className="text-center md:border-r">
        <CountUp start={0} end={400} suffix="+" className="text-4xl font-bold lg:text-5xl xl:text-6xl text-yellow-500 dark:text-yellow-300" />
          <p className="text-sm font-medium tracking-widest text-gray-800 dark:text-gray-100 uppercase lg:text-base">
            Members
          </p>
        </div>
        <div className="text-center md:border-r">
       
          <CountUp start={0} end={400} suffix="+" className="text-4xl font-bold lg:text-5xl xl:text-6xl text-yellow-500 dark:text-yellow-300" />
          <p className="text-sm font-medium tracking-widest text-gray-800 dark:text-gray-100 uppercase lg:text-base">
            Users
          </p>
        </div>
        <div className="text-center">
        <CountUp start={0} end={400} suffix="+" className="text-4xl font-bold lg:text-5xl xl:text-6xl text-yellow-500 dark:text-yellow-300" />
          <p className="text-sm font-medium tracking-widest text-gray-800 dark:text-gray-100 uppercase lg:text-base">
            Cookies
          </p>
        </div>
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
