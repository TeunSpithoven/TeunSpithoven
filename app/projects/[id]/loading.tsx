import NavButton from "@/components/navButton";

export default function ProjectLoading() {
  return (
    <div className="h-screen px-4 md:px-20 lg:px-40 pt-10 md:pt-0">
      <NavButton text="👈Projects" href="/projects" />
      <div className="flex flex-col gap-4 items-center justify-start pt-4 md:px-20 lg:px-30 xl:px-40 md:pt-0 md:justify-center h-full font-bold text-6xl">
        <div className="font-semibold font-sans text-3xl w-1/2">
        </div>
        <div className="w-full h-32 bg-gray-300 rounded animate-pulse"></div>
        <div className="flex gap-4 flex-row items-start flex-wrap w-full justify-center ">
          <div className="w-full h-80 bg-gray-300 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
