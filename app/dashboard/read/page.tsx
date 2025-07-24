"use client";
import { clickCount, text } from "../../../globalState/sample";
import { useAtomValue } from "jotai";

export default function Page() {
  const count = useAtomValue(clickCount);
  const message = useAtomValue(text);

  return (
    <div>
      <div className="mb-1">count: {count}</div>
      <div>message: {message}</div>
    </div>
  );
}
