import { projects, type Project } from "@/data/projects";
import NavButton from "@/components/navButton";
import Image from "next/image";
import { notFound } from "next/navigation";
import ProjectLink from "@/components/projectLink";
import { ViewTransition } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const componentMap: Record<string, React.ComponentType> = {
  EuroDollarConverter: dynamic(
    () => import("@/components/euroDollarConverter"),
  ),
  Circustrain: dynamic(() => import("@/components/circustrain")),
  Sudoku: dynamic(() => import("@/components/sudoku")),
};

interface Params {
  id: string;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params;
  const project: Project | undefined = projects.find(
    (project) => project.id === id,
  );

  if (!project) notFound();

  const { title, description, images, iFrameUrl, websiteUrl, componentName } =
    project;

  const CustomComponent = componentName ? componentMap[componentName] : null;

  return (
    <div className="flex h-screen w-screen px-4 md:px-20 lg:px-40 pt-10 md:pt-0">
      <ViewTransition name="projects">
        <Link
          href="/projects"
          className="invisible 2xl:visible absolute font-mono text-black subpixel-antialiased text-9xl/[1.5] left-0 top-1/2 rotate-90 -translate-x-1/4 -translate-y-1/4 border border-black rounded-md px-4 py-3"
        >
          Projects
        </Link>
      </ViewTransition>
      <NavButton
        classNames="visible 2xl:invisible"
        text="👈Projects"
        href="/projects"
      />
      <div className="flex w-full flex-col gap-4 items-center justify-start pt-4 md:px-20 lg:px-30 xl:px-40 md:pt-0 md:mt-36 h-fit font-bold text-6xl">
        <ViewTransition name={`project-${id}`}>
          <h3 className="font-semibold font-sans text-2xl">{title}</h3>
        </ViewTransition>
        <p className="font-normal text-base">{description}</p>
        {CustomComponent && <CustomComponent />}
        {iFrameUrl && (
          <iframe
            className="w-full min-h-[500px] border rounded-xl"
            src={iFrameUrl}
            allow="microphone"
            allowFullScreen
          />
        )}
        {websiteUrl && (
          <ProjectLink href={websiteUrl} name="Ga naar website →" />
        )}
        {images && (
          <div className="flex gap-4 flex-row items-center flex-wrap w-screen px-10 pb-10 justify-center">
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
