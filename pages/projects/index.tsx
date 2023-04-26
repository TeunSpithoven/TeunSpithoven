import Link from "next/link";
import ProjectColumn from "@/components/projectColumn";
import ProjectLink from "@/components/projectLink";
import Head from "next/head";

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Teun Spithoven</title>
        <meta name="description" content="Teun's portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta content="Teun Spithoven" property="og:title" />
        <meta
          content="Portfolio van mijn ICT avonturen tot nu toe"
          property="og:description"
        />
        <meta content="https://teunspithoven.nl/" property="og:url" />
        <meta
          content="https://teunspithoven.nl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fteun_spithoven_transparent_rotated_and_cropped.cf0d9bfa.png&w=1080&q=75"
          property="og:image"
        />
        <meta content="#43B581" data-react-helmet="true" />
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
      </Head>
      <div className="flex flex-col lg:flex-row justify-center gap-10 h-screen">
        <Link href={"/"} className="absolute left-20 top-20">
          🏠Home
        </Link>
        <ProjectColumn title="Semester 1">
          <ProjectLink
            name="Euro-Dollar converter"
            href="/projects/eurodollarconverter"
          />
          <ProjectLink
            name="Shop Register System"
            href="/projects/shop-register-system"
          />
        </ProjectColumn>
        <ProjectColumn title="Semester 2">
          <ProjectLink name="Circus Train" href="/projects/circustrain" />
          <ProjectLink
            name="Bolus Calculator"
            href="/projects/bolus-calculator"
          />
          <ProjectLink name="Dream Journal" href="/projects/dream-journal" />
          <ProjectLink name="StudyCluster" href="/projects/studycluster" />
        </ProjectColumn>
        <ProjectColumn title="Semester 3">
          <ProjectLink name="Ninja Game" href="/projects/ninja-game" />
          <ProjectLink name="Bimpi" href="/projects/bimpi" />
        </ProjectColumn>
      </div>
    </>
  );
}
