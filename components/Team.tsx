import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Image from "next/image";
import Ishaan from "@/public/images/Ishaan.jpg";
import Head from "next/head";

type Props = {};

function Team({}: Props) {
  return (
    <div>
      <Head>
        <title>Meet the Team</title>
      </Head>
      <section className="container px-6 py-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
            Our{" "}
            <span className="text-yellow-500 dark:text-yellow-300">
              Core Team
            </span>
          </h1>

          <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            incidunt ex placeat modi magni quia error alias, adipisci rem
            similique, at omnis eligendi optio eos harum.
          </p>

          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                Our talented team of{" "}
                <span className="text-yellow-500 dark:text-yellow-300">
                  individuals
                </span>
              </h2>
              <p className="text-base text-gray-700 dark:text-gray-300 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque rem aperiam, eaque ipsa quae.
              </p>
            </div>
            <motion.div   initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay:0.5 }}
          viewport={{ once: true }} className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
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
                        url="https://github.com/Ishaan2053" target="_blank"
                        style={{ height: 35, width: 35 }}
                        bgColor="white"
                      />

                      <SocialIcon
                        url="https://twitter.com/Ishaan2053" target="_blank"
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
                        url="github.com/Ishaan2053" target="_blank"
                        style={{ height: 35, width: 35 }}
                        bgColor="white"
                      />

                      <SocialIcon
                        url="https://twitter.com/Ishaan2053" target="_blank"
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
                        url="github.com/Ishaan2053" target="_blank"
                        style={{ height: 35, width: 35 }}
                        bgColor="white"
                      />

                      <SocialIcon
                        url="https://twitter.com/Ishaan2053" target="_blank"
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
                      Alice Melbourne
                    </p>
                    <p className="mb-4 text-xs text-gray-100">
                      Human Resources
                    </p>
                    <p className="mb-4 text-xs tracking-wide text-gray-400">
                      Lorizzle ipsum bling bling sit amizzle, consectetuer
                      adipiscing elit.
                    </p>
                    <div className="flex items-center justify-center space-x-3">
                      <SocialIcon
                        url="github.com/Ishaan2053" target="_blank"
                        style={{ height: 35, width: 35 }}
                        bgColor="white"
                      />

                      <SocialIcon
                        url="https://twitter.com/Ishaan2053" target="_blank"
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
                      Martin Garix
                    </p>
                    <p className="mb-4 text-xs text-gray-100">Good guy</p>
                    <p className="mb-4 text-xs tracking-wide text-gray-400">
                      Bacon ipsum dolor sit amet salami jowl corned beef,
                      andouille flank.
                    </p>
                    <div className="flex items-center justify-center space-x-3">
                      <SocialIcon
                        url="github.com/Ishaan2053" target="_blank"
                        style={{ height: 35, width: 35 }}
                        bgColor="white"
                      />

                      <SocialIcon
                        url="https://twitter.com/Ishaan2053" target="_blank"
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
                      Andrew Larkin
                    </p>
                    <p className="mb-4 text-xs text-gray-100">
                      Backend Developer
                    </p>
                    <p className="mb-4 text-xs tracking-wide text-gray-400">
                      Moonfish, steelhead, lamprey southern flounder tadpole
                      fish bigeye.
                    </p>
                    <div className="flex items-center justify-center space-x-3">
                      <SocialIcon
                        url="github.com/Ishaan2053" target="_blank"
                        style={{ height: 35, width: 35 }}
                        bgColor="white"
                      />

                      <SocialIcon
                        url="https://twitter.com/Ishaan2053" target="_blank"
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
                      Sophie Denmo
                    </p>
                    <p className="mb-4 text-xs text-gray-100">Designer</p>
                    <p className="mb-4 text-xs tracking-wide text-gray-400">
                      Veggies sunt bona vobis, proinde vos postulo esse magis
                      grape pea.
                    </p>
                    <div className="flex items-center justify-center space-x-3">
                      <SocialIcon
                        url="github.com/Ishaan2053" target="_blank"
                        style={{ height: 35, width: 35 }}
                        bgColor="white"
                      />

                      <SocialIcon
                        url="https://twitter.com/Ishaan2053" target="_blank"
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
                      Benedict Caro
                    </p>
                    <p className="mb-4 text-xs text-gray-100">
                      Frontend Developer
                    </p>
                    <p className="mb-4 text-xs tracking-wide text-gray-400">
                      I love cheese, especially airedale queso. Cheese and
                      biscuits halloumi.
                    </p>
                    <div className="flex items-center justify-center space-x-3">
                      <SocialIcon
                        url="github.com/Ishaan2053" target="_blank"
                        style={{ height: 35, width: 35 }}
                        bgColor="white"
                      />

                      <SocialIcon
                        url="https://twitter.com/Ishaan2053" target="_blank"
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
    </div>
  );
}

export default Team;
