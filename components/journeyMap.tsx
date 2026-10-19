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
      <table>
        <thead>
          <tr>
            <th className="border border-black p-1" scope="col"></th>
            {stages.map(({ action }, index) => (
              <th className="border border-black p-1" scope="col" key={action}>
                Stap {index + 1}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="border border-black p-1" scope="row">
              Actie
            </th>
            {stages.map(({ action }) => (
              <td className="border border-black p-1" key={action}>
                {action}
              </td>
            ))}
          </tr>
          <tr>
            <th className="border border-black p-1" scope="row">
              Takenlijst
            </th>
            {stages.map(({ action, tasks }) => (
              <td className="border border-black p-1" key={action}>
                <ul className="list-inside">
                  {tasks.map((task) => (
                    <li key={task}>{task}</li>
                  ))}
                </ul>
              </td>
            ))}
          </tr>
          <tr>
            <th className="border border-black p-1" scope="row">
              Gevoel
            </th>
            {stages.map(({ action, feelings }) => (
              <td className="border border-black p-1" key={action}>
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
      <h4>Verbeter mogelijkheden</h4>
      <ul>
        {improvements.map((improvement) => (
          <li key={improvement}>{improvement}</li>
        ))}
      </ul>
    </article>
  );
}
