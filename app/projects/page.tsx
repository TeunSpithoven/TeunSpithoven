import ProjectColumn from "@/components/projectColumn";
import ProjectLink from "@/components/projectLink";
import NavButton from "@/components/navButton";

export default function ProjectList() {
  return (
    <>
      <div className="justify-center items-center h-full">
        <NavButton text="🏠Home" href="/" />
        <div className="flex flex-col-reverse items-center gap-10 p-4 pt-14">
          <div className="flex flex-col-reverse gap-4 items-start">
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
          {/* <ProjectColumn title="Semester 4">
            <ProjectLink name="Cyber" href="/projects/cyber" />
          </ProjectColumn>
          <ProjectColumn title="Semester 5">
            <ProjectLink name="Quiz App" href="/projects/quiz-app" />
            <ProjectLink name="Pro6pp Admin CMS" href="/projects/pro6pp" />
          </ProjectColumn> */}
          <ProjectColumn title="Semester 6">
            <ProjectLink name="Group Project" href="/projects/s6-group" />
            <ProjectLink
              name="Individual Project"
              href="/projects/s6-individual"
            />
          </ProjectColumn>
        </div>
        </div>
      </div>
    </>
  );
}
