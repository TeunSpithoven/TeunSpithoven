import EuroDollarConverter from "@/components/euroDollarConverter";
import NavButton from "@/components/navButton";
import Image from "next/image";

export default function eurodollarconverter() {
  return (
    <div className="flex h-screen w-screen px-4 md:px-20 lg:px-40 pt-10 md:pt-0">
      <NavButton text="👈Projects" href="/projects" />
      <div className="flex w-full flex-col gap-4 items-center justify-start pt-4 md:px-20 lg:px-30 xl:px-40 md:pt-0 md:mt-36 h-fit font-bold text-6xl">
        <h3 className="font-semibold font-sans text-3xl">
          euro dollar converter
        </h3>
        <p className="text-xl">
          In my first semester I learned my first programming language: C#.
          During this semester I learned about programming by making practical
          assignments, by making an application that converts euros to dollars.
          This is the project recreated in javascript.
        </p>
        <EuroDollarConverter />
        <p className="text-xl">Screenshot of the original project:</p>

        <Image
          className="object-contain text-md"
          key={"eurodollarconverter"}
          src={"/assets/S1/eurodollarconverter.png"}
          alt="original eurodollarconverter"
          width={500}
          height={1000}
        />
      </div>
    </div>
  );
}
