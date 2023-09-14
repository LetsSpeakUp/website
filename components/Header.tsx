import React from "react";
import Button from "@/components/Button";
import { Bars3Icon } from "@heroicons/react/24/solid";
import logo from "@/public/logo.png";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return (
    <motion.div
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1,type: 'spring', delay:0.5}}
    viewport={{once:true}}
    >
      <header className="shadow-md bg-transparent">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <Link className="block text-yellow-600 dark:text-teal-300" href="/">
                <span className="sr-only">Home</span>
                  <Image src={logo} alt="" className="w-12 h-12" />
              </Link>{" "}
            
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul  className="flex items-center gap-6 text-sm">
                  <li>
                    <Link
                      className="relative group text-gray-500 transition hover:text-yellow-500 dark:text-white dark:hover:text-yellow-300"
                      href="/about"
                    >
                      <span> About</span>
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full"></span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-500 transition hover:text-yellow-500/75 dark:text-white dark:hover:text-yellow-300 group relative"
                      href="/meet"
                    >
                      <span>Meet the Team</span>
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full" />
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-500 transition hover:text-yellow-500/75 dark:text-white dark:hover:text-yellow-300 group relative"
                      href="/Join"
                    >
                      <span>Join Us</span>
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full" />
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-500 transition hover:text-yellow-500/75 dark:text-white dark:hover:text-yellow-300 group relative"
                      href="/blog"
                    >
                      <span> Our Blogs</span>
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full" />
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <Button />
                </div>

                <div className="block md:hidden">
                  <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-500/75 dark:bg-gray-800 dark:text-white dark:hover:text-yellow-300">
                    <Bars3Icon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </motion.div>
  );
}
