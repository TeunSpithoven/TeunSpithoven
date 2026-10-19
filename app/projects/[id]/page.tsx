import {
  projects,
  type EmbeddedComponentName,
  type Project,
  type ProjectComponent,
} from "@/data/projects";
import NavButton from "@/components/navButton";
import Image from "next/image";
import { notFound } from "next/navigation";
import ProjectLink from "@/components/projectLink";
import Persona from "@/components/persona";
import ProblemAndGoalStatement from "@/components/problemAndGoalStatement";
import BigBulletList from "@/components/bigBulletList";
import JourneyMap from "@/components/journeyMap";
import { ViewTransition, type ReactNode } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const componentMap: Record<EmbeddedComponentName, React.ComponentType> = {
  EuroDollarConverter: dynamic(
    () => import("@/components/euroDollarConverter"),
  ),
  Circustrain: dynamic(() => import("@/components/circustrain")),
  Sudoku: dynamic(() => import("@/components/sudoku")),
};

function renderProjectComponent(
  component: ProjectComponent,
  key: string,
): ReactNode {
  if (component.componentName === "Persona") {
    return <Persona key={key} {...component} />;
  }

  if (component.componentName === "ProblemAndGoalStatement") {
    return <ProblemAndGoalStatement key={key} {...component} />;
  }

  if (component.componentName === "BigBulletList") {
    return <BigBulletList key={key} {...component} />;
  }

  if (component.componentName === "JourneyMap") {
    return <JourneyMap key={key} {...component} />;
  }

  const CustomComponent = componentMap[component.componentName];
  return <CustomComponent key={key} />;
}

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

  const { title, description, images, iFrameUrl, websiteUrl, components } =
    project;

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
      <div className="project-page-content flex w-full flex-col items-start justify-start pt-4 md:px-20 lg:px-30 xl:px-40 md:pt-0 md:mt-36 h-fit">
        <ViewTransition name={`project-${id}`}>
          <h1>{title}</h1>
        </ViewTransition>
        <p>{description}</p>
        {components && (
          <div className="flex w-full flex-col items-center pb-10">
            {components.map((component, index) =>
              renderProjectComponent(
                component,
                `${component.componentName}-${index}`,
              ),
            )}
          </div>
        )}
        {project.sections && (
          <div className="flex w-full flex-col gap-8 pb-10">
            {project.sections.map((section) => (
              <section
                className="flex w-full flex-col items-start gap-4"
                key={section.title}
              >
                <h2>{section.title}</h2>
                {section.description && <p>{section.description}</p>}
                {section.components && (
                  <div className="flex w-full flex-col items-center gap-6">
                    {section.components.map((component, index) =>
                      renderProjectComponent(
                        component,
                        `${section.title}-${component.componentName}-${index}`,
                      ),
                    )}
                  </div>
                )}
              </section>
            ))}
          </div>
        )}
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
          <div className="flex w-full flex-wrap items-start justify-start gap-4 pb-10">
            {images.map((image) => (
              <Image
                className="h-auto max-w-full object-contain"
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
