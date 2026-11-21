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
import MarkdownContent from "@/components/markdownContent";
import LazyImages from "@/components/lazyImages";

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
    <div className="flex min-h-screen w-screen px-4 md:pl-20 lg:pl-40 pt-10 md:pt-0 pb-2">
      <ViewTransition name="projects">
        <Link
          href="/projects"
          className="invisible xl:visible fixed font-mono text-black subpixel-antialiased text-9xl/[1.5] left-0 top-1/2 rotate-90 -translate-x-1/4 -translate-y-1/4 border border-black rounded-md px-4 py-3"
        >
          Projects
        </Link>
      </ViewTransition>
      <NavButton
        classNames="visible xl:invisible"
        text="👈Projects"
        href="/projects"
      />
      <div className="project-page-content flex w-full flex-col items-start justify-start pt-4 md:pl-20 lg:pl-30 xl:pl-40 md:pt-0 md:mt-36 h-fit">
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
        {project.sections?.map((section) => (
          <section
            className="flex w-full flex-col items-start"
            key={section.h2Heading ?? section.h3Heading}
          >
            {section.h2Heading && <h2>{section.h2Heading}</h2>}
            {section.h3Heading && <h3>{section.h3Heading}</h3>}
            {section.description && <p>{section.description}</p>}
            {section.markdownContent && (
              <MarkdownContent content={section.markdownContent} />
            )}
            {section.lazyImages && (
              <LazyImages images={section.lazyImages} />
            )}
            {section.components && (
              <div className="flex w-full flex-col items-center">
                {section.components.map((component, index) =>
                  renderProjectComponent(
                    component,
                    `${section.h2Heading ?? section.h3Heading}-${component.componentName}-${index}`,
                  ),
                )}
              </div>
            )}
          </section>
        ))}
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
            {images.map((image, index) => (
              <Image
                className="h-auto max-w-full object-contain"
                key={image}
                src={image}
                alt="project image"
                width={500}
                height={1000}
                preload={index <= 2}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
