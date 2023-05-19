import { projects } from "@/data/projects";
import Project from "@/components/project";

export default function ProjectPage({ params }: { params: any }) {
  const project = projects.find((project) => project.id === params.id);

  if (!project) return <div>404 page not found</div>;

  return (
    <Project
      title={project.title}
      description={project.description}
      image={project.image}
    />
  );
}
