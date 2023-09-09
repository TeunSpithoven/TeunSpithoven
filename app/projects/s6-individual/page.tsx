import NavButton from "@/components/navButton";

export default function S6IndividualProject() {
  return (
    <div className="h-screen px-4 md:px-20 lg:px-40 pt-10 md:pt-0">
      <NavButton text="👈Projects" href="/projects" />
      <div className="flex flex-col gap-4 items-center justify-start pt-4 md:px-20 lg:px-30 xl:px-40 md:pt-0 md:mt-36 h-full font-bold text-6xl">
        <h3 className="font-semibold font-sans text-3xl">
          S6 individual project
        </h3>
        <p className="text-xl">to be filled</p>
      </div>
    </div>
  );
}
