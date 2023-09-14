import BlogCards from "@/components/BlogCards";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { useScroll, useSpring, motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Sushant from "@/public/images/Sushant.png";
import ProgressBar from "@/components/ProgressBar";

type Props = {};

function blog({}: Props) {

  return (
    <div className="bg-gradient-to-tr from-yellow-100 via-neutral-200 to-yellow-100/70 dark:bg-gradient-to-t dark:from-slate-900 dark:to-neutral-950">
      <Head>
        <title>Our Blogs</title>
      </Head>
      <ProgressBar />
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
        viewport={{ once: true }}
        className="text-center cursor-default pt-10"
      >
        <h1 className="text-3xl font-semibold text-gray-800 lg:text-4xl dark:text-gray-100 relative group select-none">
          From the{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-600/80 dark:bg-gradient-to-r dark:from-yellow-300 dark:to-yellow-500">
            Blog
          </span>
          {/* <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full"></span> */}
        </h1>

        <p className="max-w-lg mx-auto mt-4 text-gray-500 dark:text-gray-400">
          As we speak, so as we write. Discover the thoughts of our community,
          penned down in our own personal space
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-8 lg:-mx-6 lg:flex lg:items-center mx-auto px-6 py-10 max-w-full"
      >
        <img
          className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96 hover:shadow-lg"
          src="https://images.unsplash.com/photo-1551731409-43eb3e517a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80"
          alt=""
        />

        <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
          <p className="text-sm text-yellow-500 dark:text-yellow-300 uppercase">
            category
          </p>

          <a
            href="#"
            className="block mt-4 text-2xl font-semibold text-gray-800 dark:text-white"
          >
            How to be An Effective Public Speaker?
          </a>

          <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            veritatis sint autem nesciunt, laudantium quia tempore delect
          </p>

          <a
            href="#"
            className="inline-block mt-2 text-yellow-500 dark:text-yellow-300 underline hover:text-yellow-500 transition"
          >
            Read more
          </a>

          <div className="flex items-center mt-6">
            {/* <img
              className="object-cover object-center w-10 h-10 rounded-full"
              src="@/public/sushant.png"
              alt="Author"
            /> */}
            <Image
              src={Sushant}
              height={40}
              width={40}
              className="rounded-full object-cover object-center"
              alt="Sushant Sharma"
            />

            <div className="mx-4">
              <h1 className="text-sm text-gray-700 dark:text-gray-200">
                Sushant Sharma
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Co-founder
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <BlogCards />
      <Footer />
    </div>
  );
}

export default blog;
