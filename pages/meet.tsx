import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProgressBar from "@/components/ProgressBar";
import Team from "@/components/Team";
import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";
import Ishaan from "@/public/images/Ishaan.jpg";
import Head from "next/head";
import Link from "next/link";

type Props = {};

function meet({}: Props) {
  return (
    <div className="bg-gradient-to-tr from-yellow-100 via-neutral-200 to-yellow-100/70 dark:bg-gradient-to-t dark:from-slate-900 dark:to-neutral-950">
      <Head>
        <title>Meet the Team</title>
      </Head>
      <ProgressBar />
      <Header />

      <section className="container px-6 mx-auto text-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:mx-auto">
                Our{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500">
                  Core Team
                </span>
              </h2>
              <p className="text-base text-gray-700 dark:text-gray-300 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque (The Three Main Founding Members)
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
            >
              <div>
                <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                  <Image
                    className="object-cover w-full h-56 md:h-64 xl:h-80"
                    src={Ishaan}
                    alt="Member"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                    <p className="mb-1 text-lg font-bold text-gray-100">
                      Ishaan
                    </p>
                    <p className="mb-4 text-xs text-gray-100">Web Developer</p>
                    <p className="mb-4 text-xs tracking-wide text-gray-400">
                      Vincent Van Gogh’s most popular painting, The Starry
                      Night.
                    </p>
                    <div className="flex items-center justify-center space-x-3">
                      <SocialIcon
                        url="https://github.com/Ishaan2053"
                        target="_blank"
                        style={{ height: 35, width: 35 }}
                        bgColor="white"
                      />

                      <SocialIcon
                        url="https://twitter.com/Ishaan2053"
                        target="_blank"
                        style={{ height: 35, width: 35 }}
                        bgColor="white"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                  <Image
                    className="object-cover w-full h-56 md:h-64 xl:h-80"
                    src={Ishaan}
                    alt="Member"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                    <p className="mb-1 text-lg font-bold text-gray-100">
                      Marta Clermont
                    </p>
                    <p className="mb-4 text-xs text-gray-100">
                      Design Team Lead
                    </p>
                    <p className="mb-4 text-xs tracking-wide text-gray-400">
                      Amet I love liquorice jujubes pudding croissant I love
                      pudding.
                    </p>
                    <div className="flex items-center justify-center space-x-3">
                      <SocialIcon
                        url="github.com/Ishaan2053"
                        target="_blank"
                        style={{ height: 35, width: 35 }}
                        bgColor="white"
                      />

                      <SocialIcon
                        url="https://twitter.com/Ishaan2053"
                        target="_blank"
                        style={{ height: 35, width: 35 }}
                        bgColor="white"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                  <img
                    className="object-cover w-full h-56 md:h-64 xl:h-80"
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt="Member"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                    <p className="mb-1 text-lg font-bold text-gray-100">
                      Anthony Geek
                    </p>
                    <p className="mb-4 text-xs text-gray-100">
                      CTO, Lorem Inc.
                    </p>
                    <p className="mb-4 text-xs tracking-wide text-gray-400">
                      Apple pie macaroon toffee jujubes pie tart cookie
                      caramels.
                    </p>
                    <div className="flex items-center justify-center space-x-3">
                      <SocialIcon
                        url="github.com/Ishaan2053"
                        target="_blank"
                        style={{ height: 35, width: 35 }}
                        bgColor="white"
                      />

                      <SocialIcon
                        url="https://twitter.com/Ishaan2053"
                        target="_blank"
                        style={{ height: 35, width: 35 }}
                        bgColor="white"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <Team />
       {/* CTA */}
      <section className="overflow-hidden dark:bg-gray-900 sm:grid sm:grid-cols-2 sm:items-center">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </h2>

            <p className="hidden text-gray-500 dark:text-gray-400 md:mt-4 md:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed. Quam a scelerisque amet
              ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
              quisque ut interdum tincidunt duis.
            </p>

           <Link href="/Join"> <button
            className="group relative inline-flex items-center justify-center overflow-hidden shadow-md rounded-full border border-yellow-600 hover:bg-gradient-to-r from-yellow-500 to-yellow-600/80 px-8 py-3 m-5 dark:text-white text-black focus:outline-none focus:outline-yellow-300 focus:ring active:bg-yellow-500 hover:text-black transition-all"
        
          >
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
              Take me There!
            </span>
            
          </button></Link>
          </div>
        </div>

        <img
          alt="Violin"
          src="https://images.unsplash.com/photo-1484959014842-cd1d967a39cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
        />
      </section>
      <Footer />
    </div>
  );
}

export default meet;
