"use client";

import ProjectColumn from "@/components/projectColumn";
import ProjectLink from "@/components/projectLink";
import NavButton from "@/components/navButton";
import { ViewTransition } from "react";
import { useScrollRestoration } from "@/hooks/useScrollRestoration";

export default function ProjectList() {
  useScrollRestoration();

  return (
    <>
      <div className="h-screen flex px-4 md:px-20 lg:px-40 pt-10 md:pt-0">
        <ViewTransition name="projects">
          <h2 className="hidden 2xl:block absolute font-mono text-black subpixel-antialiased text-9xl/[1.5] left-0 top-1/2 rotate-90 -translate-x-1/4 -translate-y-1/4 px-4 py-3">
            Projects
          </h2>
        </ViewTransition>
        <NavButton text="🏠Home" href="/" />
        <div className="flex h-fit flex-col gap-4 items-center justify-start pt-4 md:px-20 lg:px-30 xl:px-40 md:pt-0 md:mt-36 font-bold text-2xl">
          <div className="flex flex-col-reverse gap-4 items-start pb-28">
            <ProjectColumn title="Semester 1">
              <ViewTransition name="project-eurodollarconverter">
                <ProjectLink
                  name="Euro-Dollar converter"
                  href="/projects/eurodollarconverter"
                />
              </ViewTransition>
              <ViewTransition name="project-shop-register-system">
                <ProjectLink
                  name="Shop Register System"
                  href="/projects/shop-register-system"
                />
              </ViewTransition>
              <ViewTransition name="project-studycluster">
                <ProjectLink
                  name="StudyCluster"
                  href="/projects/studycluster"
                />
              </ViewTransition>
            </ProjectColumn>
            <ProjectColumn title="Semester 2">
              <ViewTransition name="project-circustrain">
                <ProjectLink name="Circus Train" href="/projects/circustrain" />
              </ViewTransition>
              <ViewTransition name="project-bolus-calculator">
                <ProjectLink
                  name="Bolus Calculator"
                  href="/projects/bolus-calculator"
                />
              </ViewTransition>
              <ViewTransition name="project-dream-journal">
                <ProjectLink
                  name="Dream Journal"
                  href="/projects/dream-journal"
                />
              </ViewTransition>
            </ProjectColumn>
            <ProjectColumn title="Semester 3">
              <ViewTransition name="project-ninja-game">
                <ProjectLink name="Ninja Game" href="/projects/ninja-game" />
              </ViewTransition>
              <ViewTransition name="project-bimpi">
                <ProjectLink name="Bimpi" href="/projects/bimpi" />
              </ViewTransition>
              <ViewTransition name="project-lees-dit-niet">
                <ProjectLink
                  name="Lees dit niet"
                  href="/projects/lees-dit-niet"
                />
              </ViewTransition>
            </ProjectColumn>
            {/* <ProjectColumn title="Semester 4">
              <ViewTransition name="project-cyber">
                <ProjectLink name="Cyber" href="/projects/cyber" />
              </ViewTransition>
            </ProjectColumn>
            <ProjectColumn title="Semester 5">
              <ViewTransition name="project-quizapp">
                <ProjectLink name="Quiz App" href="/projects/quiz-app" />
              </ViewTransition>
              <ViewTransition name="project-pro6pp">
                <ProjectLink name="Pro6pp Admin CMS" href="/projects/pro6pp" />
              </ViewTransition>
            </ProjectColumn> */}
            <ProjectColumn title="Semester 6">
              <ViewTransition name="project-s6-group">
                <ProjectLink name="Appsemble" href="/projects/s6-group" />
              </ViewTransition>
              <ViewTransition name="project-s6-individual">
                <ProjectLink
                  name="Boerenboodschap"
                  href="/projects/s6-individual"
                />
              </ViewTransition>
            </ProjectColumn>
            <ProjectColumn title="Semester 7">
              <ViewTransition name="project-s7-group">
                <ProjectLink
                  name="Sound Source Localisation"
                  href="/projects/s7-group"
                />
              </ViewTransition>
              <ViewTransition name="project-s7-individual">
                <ProjectLink
                  name="Racket Spanning Meter"
                  href="/projects/s7-individual"
                />
              </ViewTransition>
            </ProjectColumn>
          </div>
        </div>
      </div>
    </>
  );
}
