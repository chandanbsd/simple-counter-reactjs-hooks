import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="bg-sky-800	">
      <h1 className="text-5xl text-slate-50 text-center pt-10 decoration-2	">
        Counter Application
      </h1>
      <h3 className="mt-10 text-3xl text-slate-50 text-center decoration-2	">
        Counter Value = {counter}
      </h3>
      <button
        className="flex w-64 w-full bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 hover:from-indigo-600 hover:via-pink-600 hover:to-red-600 focus:outline-none text-white text-2xl uppercase font-bold shadow-md rounded-lg mx-auto p-5 m-10"
        onClick={() => setCounter(counter + 1)}
      >
        <div className="col-span-1 pt-1.5"> Increment </div>
        <div className="col-span-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
            />
          </svg>
        </div>
      </button>
      <button
        className="flex w-64 max-w-xs w-full bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 hover:from-indigo-600 hover:via-pink-600 hover:to-red-600 focus:outline-none text-white text-2xl uppercase font-bold shadow-md rounded-lg mx-auto p-5"
        onClick={() => setCounter(counter - 1)}
      >
        <div className="col-span-1 pt-1.5"> Decrement </div>
        <div className="col-span-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
            />
          </svg>
        </div>
      </button>
      <button
        className="flex w-64  w-full bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 hover:from-indigo-600 hover:via-pink-600 hover:to-red-600 focus:outline-none text-white text-2xl uppercase font-bold shadow-md rounded-lg mx-auto p-5 mt-10"
        onClick={() => setCounter(0)}
      >
        <div className="col-span-1 pt-1.5"> Reset </div>
        <div className="col-span-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
            />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default App;
