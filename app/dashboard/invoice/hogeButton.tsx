export default function HogeButton() {
  return (
    <>
      <button
        className={`
        bg-blue-500 hover:bg-yellow-500 
        p-3 rounded-full font-bold transition duration-300
        text-white
    `}
      >
        Hoge Button
      </button>
    </>
  );
}
