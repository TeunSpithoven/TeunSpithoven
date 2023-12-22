"use client";

import { useState } from "react";
import { Conducteur } from "@/logic/models/Conductor";
import { Animal } from "@/logic/models/Animal";
import { Wagon } from "@/logic/models/Wagon";
import { Train } from "@/logic/models/Train";

export default function Circustrain() {
  const _conducteur = new Conducteur();

  const [type, setType] = useState<string>("");
  const [size, setSize] = useState<string>("");
  const [sizeError, setSizeError] = useState<string>("");
  const [typeError, setTypeError] = useState<string>("");
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [train, setTrain] = useState<Train>(new Train());

  const onChangeType = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType(event.target.id);
    setTypeError("");
  };
  function onChangeSize(event: React.ChangeEvent<HTMLInputElement>) {
    setSize(event.target.id);
    setSizeError("");
  }

  function onAdd() {
    const id = animals.length + 1;
    let newType = "herbivore";
    let newSize = "small";

    switch (type) {
      case "carnivoreButton":
        newType = "carnivore";
        break;
      case "herbivoreButton":
        newType = "herbivore";
        break;
      default:
        setTypeError("Invalid type");
        return;
    }

    switch (size) {
      case "selectSmall":
        newSize = "small";
        break;
      case "selectMedium":
        newSize = "medium";
        break;
      case "selectLarge":
        newSize = "large";
        break;
      default:
        setSizeError("Invalid size");
        return;
    }

    setAnimals([...animals, new Animal(id, newType, newSize)]);
  }

  return (
    <div className="flex flex-col text-base bg-gray-400/70 p-4 w-full gap-4 font-normal">
      {typeError ? (
        <div className="text-center bg-red-500 rounded-lg p-2">{typeError}</div>
      ) : null}
      {sizeError ? (
        <div className="text-center bg-red-500 rounded-lg p-2">{sizeError}</div>
      ) : null}

      {/* Inputs */}
      <div className="flex flex-col sm:flex-row gap-2">
        {/* Type selection */}
        <div className="flex flex-col w-full">
          <fieldset className="border-2">
            <legend className="ml-2">Type</legend>
            <div className="px-1">
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
                />
                <label htmlFor="herbivoreButton">Herbivore</label>
              </div>
            </div>
          </fieldset>
        </div>

        {/* Size selection */}
        <div className="flex flex-col w-full">
          <fieldset className="border-2">
            <legend className="ml-2">Size</legend>
            <div className="px-1">
              <div>
                <input
                  id="selectSmall"
                  type="radio"
                  name="selectSize"
                  onChange={onChangeSize}
                />
                <label htmlFor="selectSmall">Small</label>
              </div>
              <div>
                <input
                  id="selectMedium"
                  type="radio"
                  name="selectSize"
                  onChange={onChangeSize}
                />
                <label htmlFor="selectMedium">Medium</label>
              </div>
              <div>
                <input
                  id="selectLarge"
                  type="radio"
                  name="selectSize"
                  onChange={onChangeSize}
                />
                <label htmlFor="selectLarge">Large</label>
              </div>
            </div>
          </fieldset>
        </div>
        <button
          onClick={onAdd}
          className="w-full h-full border-2 border-white rounded-md hover:border-blue-600 active:border-white"
        >
          Add
        </button>
        <button
          onClick={() => setTrain(_conducteur.fillTrain(animals))}
          className="w-full h-full border-2 border-white rounded-md hover:border-blue-600 active:border-white"
        >
          Calculate
        </button>
      </div>

      {/* Lists */}
      <div className="flex flex-col gap-2 justify-between sm:flex-row h-96">
        <div className="bg-white w-full px-1">
          {animals.length > 0 ? (
            <ul className="overflow-auto max-h-full">
              {animals.map((animal: Animal) => (
                <li key={animal.id}>
                  {animal.id}, {animal.type}, {animal.size}
                </li>
              ))}
            </ul>
          ) : (
            <ul>
              <li>No animals yet</li>
            </ul>
          )}
        </div>
        <div className="bg-white w-full px-1">
          {train.wagons.length > 0 ? (
            <ul className="overflow-auto max-h-full text-center">
              <li className="text-left pl-24">
                ____
                <br></br>
                |DD|____T_
                <br></br>
                {`|__ |_______|<`}
                <br></br>
                {`@-@-@-oo`}
              </li>
              {train.wagons.map((wagon: Wagon) => (
                <li key={wagon.number}>
                  <div key={wagon.number}>
                    --------------{wagon.number}-------------
                  </div>
                  {wagon.animals.map((animal: Animal) => (
                    <div key={animal.id}>
                      | {animal.id} - {animal.size} - {animal.type} |
                    </div>
                  ))}
                  <div>----------------------------</div>
                </li>
              ))}
            </ul>
          ) : (
            <div>No train yet</div>
          )}
        </div>
      </div>
    </div>
  );
}
