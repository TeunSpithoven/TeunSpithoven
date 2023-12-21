"use client";

import { useState } from "react";

export default function Circustrain() {
  const [type, setType] = useState("");
  const [size, setSize] = useState("");

  const onChangeType = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType(event.target.id);
  };
  function onChangeSize(event: React.ChangeEvent<HTMLInputElement>) {
    setSize(event.target.id);
  }

  function onAdd() {
    console.log(type);
    console.log(size);
  }

  return (
    <div className="flex flex-col text-base bg-gray-400/70 p-4 w-full">
      {/* Inputs */}
      <div className="flex flex-row gap-2">
        {/* Type selection */}
        <div className="flex flex-col w-full">
          Type selection
          <div>
            <input
              id="carnivoreButton"
              type="radio"
              name="selectType"
              onChange={onChangeType}
            />
            <label htmlFor="carnivoreButton">Carnivore</label>
          </div>
          <div>
            <input
              id="herbivoreButton"
              type="radio"
              name="selectType"
              onChange={onChangeType}
            ></input>
            <label htmlFor="herbivoreButton">Herbivore</label>
          </div>
        </div>
        {/* Size selection */}
        <div className="flex flex-col w-full" onChange={onChangeSize}>
          Size selection
          <div>
            <input
              id="selectSmall"
              type="radio"
              name="selectSize"
              onChange={onChangeSize}
            ></input>
            <label htmlFor="selectSmall">Small</label>
          </div>
          <div>
            <input
              id="selectMedium"
              type="radio"
              name="selectSize"
              onChange={onChangeSize}
            ></input>
            <label htmlFor="selectMedium">Medium</label>
          </div>
          <div>
            <input
              id="selectLarge"
              type="radio"
              name="selectSize"
              onChange={onChangeSize}
            ></input>
            <label htmlFor="selectLarge">Large</label>
          </div>
        </div>
        <button onClick={onAdd} className="w-full h-full border-2 border-white rounded-md hover:border-blue-600 active:border-white">
          Add
        </button>
        <button className="w-full h-full border-2 border-white rounded-md hover:border-blue-600 active:border-white">
          Calculate
        </button>
      </div>

      {/* Lists */}
      <div className="flex flex-row">
        <div>Animal list</div>
        <div>Train</div>
      </div>
    </div>
  );
}
