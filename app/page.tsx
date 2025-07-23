import "@/app/ui/global.css";
import { vt323 } from "@/app/ui/fonts";

export default function Home() {
  return (
    <>
      <div className={`${vt323.className}`}>hogehoge</div>
      <div
        className={`
      my-4 text-center
      font-bold text-5xl tracking-tight
      bg-gradient-to-r from-green-500 via-blue-500 to-pink-500
      bg-clip-text text-transparent 
  `}
      >
        Home
      </div>
    </>
  );
}
