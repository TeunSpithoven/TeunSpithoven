import { projects } from "@/data/projects";
import NavButton from "@/components/navButton";
import Image from "next/image";

export default function ProjectPage({ params }: { params: any }) {
  const project = projects.find((project) => project.id === params.id);

  if (!project) return <div>404 page not found</div>;

  const title = project.title;
  const description = project.description;
  const images = project.images;

  return (
    <div className="h-screen px-4 md:px-20 lg:px-40 pt-10 md:pt-0">
      <NavButton text="👈Projects" href="/projects" />
      <div
        className={
          "flex flex-col gap-4 items-center justify-start pt-4 md:px-20 lg:px-30 xl:px-40 md:pt-0 md:justify-center h-full font-bold text-6xl"
        }
      >
        <h3 className="font-semibold font-sans text-3xl">{project.title}</h3>
        <p className={"text-xl"}>{project.description}</p>
        {images && (
          <div className="flex gap-4 flex-row items-start flex-wrap w-full justify-center">
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
