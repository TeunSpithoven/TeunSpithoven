import type { Metadata } from "next";
import Image from "next/image";
import teunspithoven from "@/public/assets/portret/teun_spithoven_transparent-half.webp";
import ProjectLink from "@/components/projectLink";
import Link from "next/link";
import { ViewTransition } from "react";

export const metadata: Metadata = {
  openGraph: {
    description: "Portfolio van mijn ICT avonturen tot nu toe",
    url: "https://teunspithoven.nl/",
    images: [
      {
        url: "https://teunspithoven.nl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fteun_spithoven_transparent_rotated_and_cropped.cf0d9bfa.png&w=1080&q=75",
      },
    ],
  },
  other: {
    "theme-color": "#43B581",
  },
};

export default function Home() {
  return (
    <>
      <script async src="https://api.uxsniff.com/cdn/js/uxsnf_track.js" />
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />

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
              className={"font-mono mb-4 md:mb-24 text-2xl"}
            >
              <p>Hello! I am Teun. Software Engineer.</p>
              <p>Welcome to my portfolio.</p>
            </div>
            {/* Links */}
            <ViewTransition name="projects">
              <ProjectLink
                data-testid="projectsButton"
                name="Projects"
                href="/projects"
              />
            </ViewTransition>
          </div>
        </div>
        {/* Image */}
        <div
          className={
            "flex order-first md:order-last w-1/4 md:w-1/2 justify-center items-center"
          }
        >
          <Link
            href="https://github.com/TeunSpithoven"
            className="p-1 md:p-4 md:mb-48 xl:mb-52 absolute rounded-full text-transparent"
          >
            link
          </Link>
          <Image
            className="rounded-full border-4 border-black dark:border-white bg-slate-400"
            src={teunspithoven}
            alt={"portret photo of Teun Spithoven with transparent background"}
            width={500}
            height={500}
            loading="eager"
          />
        </div>
      </div>
    </>
  );
}
