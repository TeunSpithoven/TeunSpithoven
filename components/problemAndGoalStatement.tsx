import Image from "next/image";
import type { ProblemAndGoalStatementSection } from "@/data/projects";

export default function ProblemAndGoalStatement({
  personaName,
  personaImageUrl,
  problemStatement,
  goalStatement,
}: ProblemAndGoalStatementSection) {
  return (
    <article className="flex w-full flex-col bg-white shadow-sm">
      <div className="flex items-center gap-2">
        {personaImageUrl ? (
          <Image
            src={personaImageUrl}
            alt=""
            aria-hidden="true"
            width={32}
            height={32}
            className="h-8 w-8 rounded-full object-cover"
          />
        ) : (
          <span
            aria-hidden="true"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-sm text-gray-700"
          >
            {personaName.charAt(0).toUpperCase()}
          </span>
        )}
        <h3 className="m-0 leading-none">{personaName}</h3>
      </div>
      <div className="grid w-full gap-6 md:grid-cols-2">
        <section className="flex flex-col gap-2">
          <h4>Problem statement</h4>
          <p>{problemStatement}</p>
        </section>
        <section className="flex flex-col gap-2">
          <h4>Goal statement</h4>
          <p>{goalStatement}</p>
        </section>
      </div>
    </article>
  );
}
