import React from "react";

type Props = {};

function JoinUs({}: Props) {
  return (
    <div>
      <h1 className="text-5xl font-semibold text-center p-8 text-black dark:text-yellow-300 bg-gray-50 dark:bg-[#151515] tracking-widest">
        Join Us
      </h1>
      <section className="overflow-hidden bg-gray-50 dark:bg-[#151515] sm:grid sm:grid-cols-2">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-yellow-300 md:text-3xl">
              We're always looking for new talent!
            </h2>
            <h4 className="text-md tracking-widest font-light text-gray-900 dark:text-white md:text-xl">
              We're always looking for new talent!
            </h4>

            <p className="hidden text-gray-500 dark:text-gray-300 md:mt-4 md:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed. Quam a scelerisque amet
              ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
              quisque ut interdum tincidunt duis.
            </p>

            <div className="mt-4 md:mt-8">
              <a
                href="#form"
                className="inline-block rounded bg-yellow-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-gray-100 shadow-md"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>

        <img
          alt="Student"
          src="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="h-56 w-full object-cover sm:h-full"
        />
      </section>

      <section className="bg-gray-100 dark:bg-[#151515] text-black dark:text-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <p className="max-w-xl text-lg ">
                At the same time, the fact that we are wholly owned and totally
                independent from manufacturer and other group control gives you
                confidence that we will only recommend what is right for you.
              </p>

              <div className="mt-8">
                <a href="" className="text-2xl font-bold text-yellow-500">
                  0151 475 4450
                </a>
              </div>
            </div>

            <div className="rounded-lg bg-gray-300 dark:bg-gray-900 p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form action="" className="space-y-4">
                <div>
                  <label className="sr-only" for="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border-yellow-500 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" for="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded-lg border-yellow-500 p-3 text-sm"
                      placeholder="Email address"
                      type="email"
                      id="email"
                    />
                  </div>

                  <div>
                    <label className="sr-only" for="phone">
                      Phone
                    </label>
                    <input
                      className="w-full rounded-lg border-yellow-500 p-3 text-sm"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                    />
                  </div>
                </div>

                <div>
                  <label className="sr-only" for="message">
                    Message
                  </label>

                  <textarea
                    className="w-full rounded-lg bg-gray-950 border-yellow-500 p-3 text-sm"
                    placeholder="Message"
                    rows="8"
                    id="message"
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg border border-yellow-600 px-5 py-3 font-medium text-black dark:text-white sm:w-auto"
                  >
                    Send Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default JoinUs;
