import Image from "next/image";
import type { JourneyMapSection } from "@/data/projects";

export default function JourneyMap({
  personaName,
  personaImageUrl,
  goal,
  stages,
  improvements,
}: JourneyMapSection) {
  return (
    <article className="flex w-full flex-col">
      <div className="flex items-center gap-2 my-3">
        <Image
          src={personaImageUrl}
          alt={personaName}
          width={32}
          height={32}
          className="h-8 w-8 rounded-full object-cover"
        />
        <h3 className="m-0 leading-none">{personaName}</h3>
      </div>
      <p>
        <strong>Doel:</strong> {goal}
      </p>
      <div
        className="w-full max-w-full overflow-x-auto overscroll-x-contain focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        role="region"
        aria-label={`Gebruikersreis van ${personaName}`}
        tabIndex={0}
      >
        <table className="w-full min-w-[40rem] table-fixed border-collapse">
          <caption className="sr-only">
            Gebruikersreis van {personaName}
          </caption>
          <thead>
            <tr>
              <th className="w-28 border border-black p-2" scope="col">
                <span className="sr-only">Onderdeel</span>
              </th>
              {stages.map(({ action }, index) => (
                <th
                  className="border border-black p-2 text-left"
                  scope="col"
                  key={action}
                >
                  Stap {index + 1}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th
                className="border border-black p-2 text-left align-top"
                scope="row"
              >
                Actie
              </th>
              {stages.map(({ action }) => (
                <td
                  className="break-words border border-black p-2 align-top"
                  key={action}
                >
                  {action}
                </td>
              ))}
            </tr>
            <tr>
              <th
                className="border border-black p-2 text-left align-top"
                scope="row"
              >
                Takenlijst
              </th>
              {stages.map(({ action, tasks }) => (
                <td
                  className="break-words border border-black p-2 align-top"
                  key={action}
                >
                  <ul className="list-inside">
                    {tasks.map((task) => (
                      <li key={task}>{task}</li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>
            <tr>
              <th
                className="border border-black p-2 text-left align-top"
                scope="row"
              >
                Gevoel
              </th>
              {stages.map(({ action, feelings }) => (
                <td
                  className="break-words border border-black p-2 align-top"
                  key={action}
                >
                  <ul className="list-inside">
                    {feelings.map((feeling) => (
                      <li key={feeling}>{feeling}</li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <h4>Verbeter mogelijkheden</h4>
      <ul className="prose-list">
        {improvements.map((improvement) => (
          <li key={improvement}>{improvement}</li>
        ))}
      </ul>
    </article>
  );
}
