import * as React from "react";

export const Button = () => {
  return (
    <div className="rounded-md ">
      <a href="https://turborepo.org/docs/getting-started">
        <div className="flex w-full items-center justify-center rounded-md border border-transparent bg-black px-8 py-3 text-base font-medium text-white no-underline hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-300 md:py-3 md:px-10 md:text-lg md:leading-6">
          Read the docs
          <span className="from-brandred to-brandblue ml-2 bg-gradient-to-r bg-clip-text text-transparent">
            →
          </span>
        </div>
      </a>
    </div>
  );
};
