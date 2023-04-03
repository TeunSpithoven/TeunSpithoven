import Image from "next/image";
import Link from "next/link";

export default function CircusTrain() {
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
        <h3 className="font-semibold font-sans text-3xl">Circus Train</h3>
        <p className={"text-xl"}>
          In semester 2 of the study, i wrote a program that sorts circus
          animals into train wagons in the most efficient way, without braking
          any of the given rules. My application designing skills improved a lot
          because of this exercise.
        </p>
        <Image
          src="/assets/S2/circustreinflowchart.png"
          alt="circus train flowchart"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
