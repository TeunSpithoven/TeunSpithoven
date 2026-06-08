import { projects, type Project } from "@/data/projects";
import NavButton from "@/components/navButton";
import Image from "next/image";
import { notFound } from "next/navigation";
import ProjectLink from "@/components/projectLink";

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

  const { title, description, images, iFrameUrl, websiteUrl } = project;

  return (
    <div className="flex h-screen w-screen px-4 md:px-20 lg:px-40 pt-10 md:pt-0">
      <NavButton text="👈Projects" href="/projects" />
      <div className="flex w-full flex-col gap-4 items-center justify-start pt-4 md:px-20 lg:px-30 xl:px-40 md:pt-0 md:mt-36 h-fit font-bold text-6xl">
        <h3 className="font-semibold font-sans text-2xl">{title}</h3>
        <p className="font-normal text-base">{description}</p>
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
