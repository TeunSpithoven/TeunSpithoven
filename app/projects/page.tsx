import ProjectColumn from "@/components/projectColumn";
import ProjectLink from "@/components/projectLink";
import NavButton from "@/components/navButton";

export default function NewProjectsPage() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col lg:flex-row items-start gap-10">
          <NavButton text="🏠Home" href="/" />
          <ProjectColumn title="Semester 1">
            <ProjectLink
              name="Euro-Dollar converter"
              href="/projects/eurodollarconverter"
            />
            <ProjectLink
              name="Shop Register System"
              href="/projects/shop-register-system"
            />
            <ProjectLink name="StudyCluster" href="/projects/studycluster" />
          </ProjectColumn>
          <ProjectColumn title="Semester 2">
            <ProjectLink name="Circus Train" href="/projects/circustrain" />
            <ProjectLink
              name="Bolus Calculator"
              href="/projects/bolus-calculator"
            />
            <ProjectLink name="Dream Journal" href="/projects/dream-journal" />
          </ProjectColumn>
          <ProjectColumn title="Semester 3">
            <ProjectLink name="Ninja Game" href="/projects/ninja-game" />
            <ProjectLink name="Bimpi" href="/projects/bimpi" />
          </ProjectColumn>
        </div>
      </div>
    </>
  );
}
