import BlogCards from "@/components/BlogCards";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { useScroll, useSpring, motion } from "framer-motion";

type Props = {};

function blog({}: Props) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  return (
    <div className="dark:bg-[#151515] bg-gray-100">
      <motion.div
        className="sticky h-1 top-0 bg-yellow-500 will-change-transform z-50 max-w-full"
        style={{ scaleX }}
      />
      <Header />
      <div className="text-center dark:bg-[#151515]">
        <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-gray-100 group relative">
          From the <span className="text-yellow-300">Blog</span>
        </h1>

        <p className="max-w-lg mx-auto mt-4 text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
          veritatis sint autem nesciunt, laudantium quia tempore delect
        </p>
      </div>

      <div className="mt-8 lg:-mx-6 lg:flex lg:items-center mx-auto px-6 py-10 max-w-full">
        <img
          className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96 shadow-lg"
          src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />

        <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
          <p className="text-sm text-yellow-300 uppercase">category</p>

          <a
            href="#"
            className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white"
          >
            All the features you want to know
          </a>

          <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            veritatis sint autem nesciunt, laudantium quia tempore delect
          </p>

          <a
            href="#"
            className="inline-block mt-2 text-yellow-300 underline hover:text-yellow-500"
          >
            Read more
          </a>

          <div className="flex items-center mt-6">
            <img
              className="object-cover object-center w-10 h-10 rounded-full"
              src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
              alt=""
            />

            <div className="mx-4">
              <h1 className="text-sm text-gray-700 dark:text-gray-200">
                Amelia. Anderson
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Lead Developer
              </p>
            </div>
          </div>
        </div>
      </div>

      <BlogCards />
      <Footer />
    </div>
  );
}

export default blog;
