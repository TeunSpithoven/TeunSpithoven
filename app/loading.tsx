import Image from "next/image";
import lowquality from "@/public/assets/portret/teun_spithoven_low_quality.webp";
import ProjectLink from "@/components/projectLink";

export default function Loading() {
  return (
    <>
      <div
        className={
          "flex flex-col md:flex-row items-center md:justify-between gap-10 absolute w-full h-screen px-4 md:px-20 lg:px-40 py-20"
        }
      >
        {/* Text and links */}
        <div className={"justify-center md:w-1/2 md:pt-0"}>
          <div
            className={"flex flex-col gap-2 items-center font-bold text-6xl"}
          >
            <div
              data-testid="introduction"
              className={"mb-4 md:mb-24 text-2xl"}
            >
              <p>Hello! I am Teun. Software Engineer.</p>
              <p>Welcome to my portfolio.</p>
            </div>
            {/* Links */}
            <ProjectLink
              data-testid="projectsButton"
              name="Projects"
              href="/projects"
            />
          </div>
        </div>
        {/* Image */}
        <div
          className={
            "flex order-first md:order-last w-1/4 md:w-1/2 justify-center items-center"
          }
        >
          <Image
            className="rounded-full border-4 border-black dark:border-white bg-slate-400 blur"
            src={lowquality}
            alt={"portret photo of Teun Spithoven with transparent background"}
            width={500}
            height={500}
          />
        </div>
      </div>
    </>
  );
}
