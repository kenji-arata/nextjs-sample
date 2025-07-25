"use client";
import { clickCount, text } from "../../globalState/sample";
import { useAtom } from "jotai";

export default function Page() {
  const [count, setCount] = useAtom(clickCount);
  const [message, setMessage] = useAtom(text);

  return (
    <>
      <div className="mb-2">
        <button
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
          className={`
      bg-blue-500 hover:bg-yellow-500 
      p-3 rounded-full font-bold transition duration-300
      text-white
  `}
        >
          click!!: {count}
        </button>
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          message
        </label>
        <textarea
          id="message"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write!!"
          value={message}
          onChange={(v) => {
            setMessage(v.target.value);
          }}
        />
      </div>
    </>
  );
}
