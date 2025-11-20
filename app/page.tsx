import { ModeToggle } from "../components/theme-button";

export default function Home() {
  return (
    <>
      <div className="flex absolute top-9 right-10 items-center z-10">
        <ModeToggle />
      </div>
      <textarea
        className="w-full h-[calc(100vh-60px)] p-10 border-none outline-none resize-none font-[inherit] text-base leading-[1.6] bg-transparent text-inherit tab-[4]"
        placeholder="Start typing..."
      ></textarea>
    </>
  );
}
