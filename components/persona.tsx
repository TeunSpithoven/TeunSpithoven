"use client";

import Image from "next/image";
import { useState } from "react";
import type { PersonaSection } from "@/data/projects";

export default function Persona({
  name,
  imageUrl,
  demographics,
  quote,
  goals,
  frustrations,
  story,
}: PersonaSection) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className="persona-card flex w-full flex-col gap-12 rounded-xl border border-gray-300 bg-white p-6 shadow-sm md:flex-row">
      <div className="flex shrink-0 flex-col items-center gap-6 md:w-60">
        {!imageUrl || imageFailed ? (
          <div
            role="img"
            aria-label={`Portrait of ${name}`}
            className="flex h-60 w-60 items-center justify-center rounded-md bg-gray-200 text-gray-600"
          >
            {name.charAt(0).toUpperCase()}
          </div>
        ) : (
          <Image
            src={imageUrl}
            alt={name}
            width={160}
            height={160}
            className="h-60 w-60 rounded-md object-cover"
            onError={() => setImageFailed(true)}
          />
        )}
        <h3>{name}</h3>
        <section>
          <h4>Demographics</h4>
          <dl className="space-y-1 text-gray-700">
            <div>
              <dt className="inline font-bold">Leeftijd: </dt>
              <dd className="inline">{demographics.age}</dd>
            </div>
            <div>
              <dt className="inline">Geslacht: </dt>
              <dd className="inline">{demographics.gender}</dd>
            </div>
            {demographics.education && (
              <div>
                <dt className="inline font-bold">Opleiding: </dt>
                <dd className="inline">{demographics.education}</dd>
              </div>
            )}
            <div>
              <dt className="inline font-bold">Gezin: </dt>
              <dd className="inline">{demographics.family}</dd>
            </div>
            <div>
              <dt className="inline font-bold">Beroep: </dt>
              <dd className="inline">{demographics.occupation}</dd>
            </div>
          </dl>
        </section>
      </div>

      <div className="flex flex-col gap-6">
        {quote && (
          <blockquote className="text-center text-gray-600 my-12">
            “{quote}”
          </blockquote>
        )}

        <section className="flex flex-row gap-6">
          <section className="w-full">
            <h4>Doelen</h4>
            <ul className="list-inside list-disc space-y-1 text-gray-700">
              {goals.map((goal) => (
                <li key={goal}>{goal}</li>
              ))}
            </ul>
          </section>
          <section className="w-full">
            <h4>Frustraties</h4>
            <ul className="list-inside list-disc space-y-1 text-gray-700">
              {frustrations.map((frustration) => (
                <li key={frustration}>{frustration}</li>
              ))}
            </ul>
          </section>
        </section>

        <section className="sm:col-span-2">
          <h4>Verhaal</h4>
          <p className="text-gray-700">{story}</p>
        </section>
      </div>
    </article>
  );
}
