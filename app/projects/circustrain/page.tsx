import Circustrain from "@/components/circustrain/circustrain";
import NavButton from "@/components/navButton";
import Image from "next/image";

export default function circustrain() {
  const images: Array<string> = [
    "/assets/S2/circustrein-screenshot.png",
    "/assets/S2/circustreinflowchart.png",
    "/assets/S2/circustrein-solution.png",
  ];

  return (
    <div className="h-screen px-4 md:px-20 lg:px-40 pt-10 md:pt-0">
      <NavButton text="👈Projects" href="/projects" />
      <div className="flex flex-col gap-4 items-center justify-start pt-4 md:px-20 lg:px-30 xl:px-40 md:pt-0 md:mt-36 h-full font-bold text-6xl">
        {/* Title and description of the project */}
        <h3 className="font-semibold font-sans text-3xl">
          Circus Train
        </h3>
        <p className="text-xl">
          A C# .NET application that sorts circus animals into train wagons in
          the most efficient way, without braking any of the given rules. My
          application designing skills improved a lot because of this exercise.
          For this project I also wrote unit- and integration tests. Below is a
          recreation of the project in javascript.
        </p>

        {/* The Circustrain component */}
        <Circustrain />

        {/* Render the array of images */}
        <p className="text-xl">Screenshots of the original project:</p>
        {images && (
          <div className="flex gap-4 flex-row items-start flex-wrap w-screen px-10 pb-10 justify-center">
            {images.map((image) => (
              <Image
                className="object-contain text-md"
                key={image}
                src={image}
                alt="project image"
                width={500}
                height={1000}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
