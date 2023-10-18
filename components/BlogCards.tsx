import React from "react";

type Props = {};

export default function BlogCards({}: Props) {
  return (
    <div>
      <section className="bg-transparent flex flex-col items-center">
        <div className="container px-6 py-10 mx-auto">
          <div className="flex items-center justify-between cursor-default">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white relative group">
              Latest from <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-600/80 dark:bg-gradient-to-r dark:from-yellow-300 dark:to-yellow-500">Our members</span>
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-yellow-400 transition-all group-hover:w-full"></span>{" "}
            </h1>
          </div>

          <hr className="my-8 border-gray-400 dark:border-yellow-300" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            <div>
              <img
                className="object-cover object-center w-full h-64 rounded-lg lg:h-80 transition hover:shadow-lg"
                src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />

              <div className="mt-8">
                <span className="text-yellow-600 dark:text-yellow-300 uppercase">category</span>

                <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                  What do you want to know about UI
                </h1>

                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  est asperiores vel, ab animi recusandae nulla veritatis id
                  tempore sapiente
                </p>

                <div className="flex items-center justify-between mt-4">
                  <div>
                    <a
                      href="#"
                      className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500"
                    >
                      Sushant Sharma
                    </a>

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      February 1, 2023
                    </p>
                  </div>

                  <a
                    href="#"
                    className="inline-block text-yellow-600 dark:text-yellow-300 underline hover:text-yellow-500 transition"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>

            <div>
              <img
                className="object-cover object-center w-full h-64 rounded-lg lg:h-80 transition hover:shadow-lg"
                src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />

              <div className="mt-8">
                <span className="text-yellow-600 dark:text-yellow-300 uppercase">category</span>

                <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                  Why it is a no-brainer to ask for help
                </h1>

                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  est asperiores vel, ab animi recusandae nulla veritatis id
                  tempore sapiente
                </p>

                <div className="flex items-center justify-between mt-4">
                  <div>
                    <a
                      href="#"
                      className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500"
                    >
                      Siddhant Srivastava
                    </a>

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      February 6, 2023
                    </p>
                  </div>

                  <a
                    href="#"
                    className="inline-block text-yellow-600 dark:text-yellow-300 underline hover:text-yellow-500 transition"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>

            <div>
              <img
                className="object-cover object-center w-full h-64 rounded-lg lg:h-80 transition hover:shadow-lg"
                src="https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                alt=""
              />

              <div className="mt-8">
                <span className="text-yellow-600 dark:text-yellow-300 uppercase">category</span>

                <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                  Which services you get from Other People
                </h1>

                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  est asperiores vel, ab animi recusandae nulla veritatis id
                  tempore sapiente
                </p>

                <div className="flex items-center justify-between mt-4">
                  <div>
                    <a
                      href="#"
                      className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500"
                    >
                      Ayush Gupta
                    </a>

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      February 19, 2023
                    </p>
                  </div>

                  <a
                    href="#"
                    className="inline-block text-yellow-600 dark:text-yellow-300 underline hover:text-yellow-500 transition"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div>
              <img
                className="object-cover object-center w-full h-64 rounded-lg lg:h-80 transition hover:shadow-lg"
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29tbXVuY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                alt=""
              />

              <div className="mt-8">
                <span className="text-yellow-600 dark:text-yellow-300 uppercase">category</span>

                <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                  The ABCs of Explaining With Brevity
                </h1>

                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  est asperiores vel, ab animi recusandae nulla veritatis id
                  tempore sapiente
                </p>

                <div className="flex items-center justify-between mt-4">
                  <div>
                    <a
                      href="#"
                      className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500"
                    >
                      Ishaan
                    </a>

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      February 1, 2023
                    </p>
                  </div>

                  <a
                    href="#"
                    className="inline-block text-yellow-600 dark:text-yellow-300 underline hover:text-yellow-500 transition"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>

            <div>
              <img
                className="object-cover object-center w-full h-64 rounded-lg lg:h-80 transition hover:shadow-lg"
                src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />

              <div className="mt-8">
                <span className="text-yellow-600 dark:text-yellow-300 uppercase">category</span>

                <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                  Why it is a no-brainer to ask for help
                </h1>

                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  est asperiores vel, ab animi recusandae nulla veritatis id
                  tempore sapiente
                </p>

                <div className="flex items-center justify-between mt-4">
                  <div>
                    <a
                      href="#"
                      className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500"
                    >
                      Parth Gupta
                    </a>

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      February 6, 2023
                    </p>
                  </div>

                  <a
                    href="#"
                    className="inline-block text-yellow-600 dark:text-yellow-300 underline hover:text-yellow-500 transition"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>

            <div>
              <img
                className="object-cover object-center w-full h-64 rounded-lg lg:h-80 transition hover:shadow-lg"
                src="https://images.unsplash.com/photo-1555725305-e823b44548de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
              />

              <div className="mt-8">
                <span className="text-yellow-600 dark:text-yellow-300 uppercase">category</span>

                <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                  Mastering Audience Engagement
                </h1>

                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  est asperiores vel, ab animi recusandae nulla veritatis id
                  tempore sapiente
                </p>

                <div className="flex items-center justify-between mt-4">
                  <div>
                    <a
                      href="#"
                      className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500"
                    >
                      Avantika Srivastava
                    </a>

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      August 19, 2023
                    </p>
                  </div>

                  <a
                    href="#"
                    className="inline-block text-yellow-600 dark:text-yellow-300 underline hover:text-yellow-500 transition"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <button
            className="group relative inline-flex items-center justify-center overflow-hidden shadow-md rounded-full border border-yellow-600  hover:bg-gradient-to-r from-yellow-500 to-yellow-600/80 px-8 py-3 mb-8 dark:text-white text-black focus:outline-none focus:outline-yellow-300 focus:ring active:bg-yellow-500 hover:text-black transition"
        
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
              Load More
            </span>
          </button>
      </section>
    </div>
  );
}
