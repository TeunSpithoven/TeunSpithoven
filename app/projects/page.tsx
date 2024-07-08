"use client";

import ProjectColumn from "@/components/projectColumn";
import ProjectLink from "@/components/projectLink";
import NavButton from "@/components/navButton";
import { useState } from "react";

export default function ProjectList() {
  const [ActivePage, SetActivePage] = useState("eurodollarconverter");

  return (
    <div className="h-screen">
      <NavButton text="🏠" href="/" />
      <div className="justify-center w-full md:justify-start flex-row gap-5 flex p-5 h-full">
        <div className="bg-slate-800 p-3 rounded-xl flex flex-col w-full md:w-1/3 gap-4 items-center justify-start font-bold text-2xl overflow-x-visible overflow-y-scroll">
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
            <ProjectLink name="Appsemble" href="/projects/s6-group" />
            <ProjectLink
              name="Boerenboodschap"
              href="/projects/s6-individual"
            />
          </ProjectColumn>
          <ProjectColumn title="Semester 7">
            <ProjectLink
              name="Sound Source Localisation"
              href="/projects/s7-group"
            />
            <ProjectLink
              name="Racket Spanning Meter"
              href="/projects/s7-individual"
            />
          </ProjectColumn>
        </div>
        <div className="bg-slate-800 flex w-2/3 rounded-xl p-3 h-full">
          {ActivePage}
          <div className="bg-slate-500 p-5"></div>
        </div>
      </div>
    </div>
  );
}
