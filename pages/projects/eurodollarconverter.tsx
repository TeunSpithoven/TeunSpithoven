import Image from "next/image";
import Link from "next/link";

export default function EuroDollarConverter() {
  return (
    <div className="h-screen px-4 md:px-20 lg:px-40 pt-10 md:pt-0">
      <Link href={"/projects"} className="absolute left-5 md:left-20 top-5 md:top-20">
        👈Projects
      </Link>
      <div
        className={
          "flex flex-col gap-4 items-center justify-start pt-4 md:pt-0 md:justify-center h-full font-bold text-6xl"
        }
      >
        <h3 className="font-semibold font-sans text-3xl">
          Euro to Dollar converter
        </h3>
        <p className={"text-xl"}>
          In my first semester I learned my first programming language: C#.
          During this semester I learned about programming by making practical
          assignments, by making an application that converts euros to dollars.
        </p>
        <Image
          src="/assets/S1/eurodollarconverter.png"
          alt="euro to dollar converter"
          width={800}
          height={500}
        />
      </div>
    </div>
  );
}
