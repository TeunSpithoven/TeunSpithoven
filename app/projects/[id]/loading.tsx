import NavButton from "@/components/navButton";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="h-screen px-4 md:px-20 lg:px-40 pt-10 md:pt-0 hover:cursor-wait">
      <NavButton text="👈Projects" href="/projects" />
      <div
        className={
          "flex flex-col gap-4 items-center justify-start pt-4 md:px-20 lg:px-30 xl:px-40 md:pt-0 md:justify-center h-full font-bold text-6xl"
        }
      >
        <h3 className="font-semibold font-sans text-3xl">loading</h3>
        <p className={"text-xl"}>loading...</p>
      </div>
    </div>
  );
}
