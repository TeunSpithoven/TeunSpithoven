"use client";

import { FormEvent, useState } from "react";

export default function EuroDollarConverter() {
  const [course, setCourse] = useState(1.06);
  const [euro, setEuro] = useState(0);
  const [dollar, setDollar] = useState(0);
  const [convertedEuros, setConvertedEuros] = useState(0);
  const [convertedDollars, setConvertedDollars] = useState(0);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (euro > 0) {
      setConvertedDollars(euro * course);
    }
    if (dollar > 0) {
      setConvertedEuros(dollar / course);
    }
  }

  return (
    <div className="bg-gray-100 text-base border-black border-2">
      <nav className="flex flex-row gap-28 bg-white p-2 pr-4 drop-shadow-sm justify-between">
        <div className="flex gap-2">
          <div>◩</div>
          <div>Euro - US Dollar Converter</div>
        </div>
        <div className="flex gap-5">
          <div>─</div>
          <div>□</div>
          <div className="font-normal">x</div>
        </div>
      </nav>
      <form
        onSubmit={onSubmit}
        className="flex flex-row p-6 pb-8 gap-4 font-normal"
      >
        <div className="flex flex-col place-self-center">
          <label htmlFor="euroInput">euro</label>
          <input
            name="euroInput"
            type="number"
            placeholder="536"
            className="border-gray-500 border-2"
            onChange={(event) => {
              setEuro(Number(event.target.value));
            }}
          />
          <label htmlFor="dollarInput">dollar</label>
          <input
            name="dollarInput"
            type="number"
            placeholder="287"
            className="border-gray-500 border-2"
            onChange={(event) => {
              setDollar(Number(event.target.value));
            }}
          />
        </div>
        <div className="flex flex-col place-self-center gap-2">
          <label htmlFor="courseInput">koers</label>
          <input
            name="courseInput"
            type="number"
            placeholder="1.3763"
            step=".0001"
            value={course}
            onChange={(event) => {
              setCourse(Number(event.target.value));
            }}
          />
          <button
            type="submit"
            className="bg-gray-200 h-fit border-gray-300 gray- border-2"
          >
            convert
          </button>
        </div>
        <div className="place-self-center">
          <div>dollar: {convertedDollars}</div>
          <div>euro: {convertedEuros}</div>
        </div>
      </form>
    </div>
  );
}
