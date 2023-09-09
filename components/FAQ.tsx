import React from "react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { MinusCircleIcon } from "@heroicons/react/24/outline";

type Props = {};

function FAQ({}: Props) {
  return (
    <div className="flex justify-center">
      <div className="flex-col space-y-6 p-5 px-3 max-w-3xl">
        <h1 className="font-semibold text-2xl md:text-5xl text-black dark:text-yellow-300 text-center mt-5 group relative">
          <span>Frequently Asked Questions</span> 
          <span className="absolute -bottom-1 left-0 w-0 h-1 bg-yellow-400 transition-all group-hover:w-full"/>
        </h1>
        <h2 className="font-light text-md md:text-xl text-black dark:text-gray-300 text-center pb-5">
          Everything you need to know about us
        </h2>

        <details
          className="group rounded-lg bg-gray-50 border hover:border-yellow-500 dark:bg-gray-900 p-6 hover:shadow-lg transition-all [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 dark:text-gray-100">
            <h2 className="font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing?
            </h2>

            <span className="relative h-5 w-5 shrink-0 tranisiton all hover:animate-pulse">
              <PlusCircleIcon className="group-open:opacity-0" />

              <MinusCircleIcon className="opacity-0 group-open:opacity-100" />
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700 dark:text-yellow-200">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
            veritatis molestias culpa in, recusandae laboriosam neque aliquid
            libero nesciunt voluptate dicta quo officiis explicabo consequuntur
            distinctio corporis earum similique!
          </p>
        </details>
        <details
          className="group rounded-lg bg-gray-50 dark:bg-gray-900 p-6 hover:shadow-lg transition-all [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 dark:text-gray-100">
            <h2 className="font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing?
            </h2>

            <span className="relative h-5 w-5 shrink-0 tranisiton all hover:animate-pulse">
              <PlusCircleIcon className="group-open:opacity-0" />

              <MinusCircleIcon className="opacity-0 group-open:opacity-100" />
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700 dark:text-yellow-200">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
            veritatis molestias culpa in, recusandae laboriosam neque aliquid
            libero nesciunt voluptate dicta quo officiis explicabo consequuntur
            distinctio corporis earum similique!
          </p>
        </details>
        <details
          className="group rounded-lg bg-gray-50 dark:bg-gray-900 p-6 hover:shadow-lg transition-all [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 dark:text-gray-100">
            <h2 className="font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing?
            </h2>

            <span className="relative h-5 w-5 shrink-0 tranisiton all hover:animate-pulse">
              <PlusCircleIcon className="group-open:opacity-0" />

              <MinusCircleIcon className="opacity-0 group-open:opacity-100" />
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700 dark:text-yellow-200">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
            veritatis molestias culpa in, recusandae laboriosam neque aliquid
            libero nesciunt voluptate dicta quo officiis explicabo consequuntur
            distinctio corporis earum similique!
          </p>
        </details>
        <details
          className="group rounded-lg bg-gray-50 dark:bg-gray-900 p-6 hover:shadow-lg transition-all [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 dark:text-gray-100">
            <h2 className="font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing?
            </h2>

            <span className="relative h-5 w-5 shrink-0 tranisiton all hover:animate-pulse">
              <PlusCircleIcon className="group-open:opacity-0" />

              <MinusCircleIcon className="opacity-0 group-open:opacity-100" />
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700 dark:text-yellow-200">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
            veritatis molestias culpa in, recusandae laboriosam neque aliquid
            libero nesciunt voluptate dicta quo officiis explicabo consequuntur
            distinctio corporis earum similique!
          </p>
        </details>
        <details
          className="group rounded-lg bg-gray-50 dark:bg-gray-900 hover:shadow-lg transition-all p-6 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 dark:text-gray-100">
            <h2 className="font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing?
            </h2>

            <span className="relative h-5 w-5 shrink-0 tranisiton all hover:animate-pulse">
              <PlusCircleIcon className="group-open:opacity-0" />

              <MinusCircleIcon className="opacity-0 group-open:opacity-100" />
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700 dark:text-yellow-200">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
            veritatis molestias culpa in, recusandae laboriosam neque aliquid
            libero nesciunt voluptate dicta quo officiis explicabo consequuntur
            distinctio corporis earum similique!
          </p>
        </details>
        <details
          className="group rounded-lg bg-gray-50 dark:bg-gray-900 p-6 hover:shadow-lg transition-all [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 dark:text-gray-100">
            <h2 className="font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing?
            </h2>

            <span className="relative h-5 w-5 shrink-0 tranisiton all hover:animate-pulse">
              <PlusCircleIcon className="group-open:opacity-0" />

              <MinusCircleIcon className="opacity-0 group-open:opacity-100" />
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700 dark:text-yellow-200">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
            veritatis molestias culpa in, recusandae laboriosam neque aliquid
            libero nesciunt voluptate dicta quo officiis explicabo consequuntur
            distinctio corporis earum similique!
          </p>
        </details>

        <details className="group rounded-lg bg-gray-50 dark:bg-gray-900 p-6 hover:shadow-lg transition-all [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 dark:text-gray-100">
            <h2 className="font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing?
            </h2>

            <span className="relative h-5 w-5 shrink-0 hover:animate-pulse">
              <PlusCircleIcon className="group-open:opacity-0" />

              <MinusCircleIcon className="opacity-0 group-open:opacity-100" />
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
            veritatis molestias culpa in, recusandae laboriosam neque aliquid
            libero nesciunt voluptate dicta quo officiis explicabo consequuntur
            distinctio corporis earum similique!
          </p>
        </details>
      </div>
    </div>
  );
}

export default FAQ;
