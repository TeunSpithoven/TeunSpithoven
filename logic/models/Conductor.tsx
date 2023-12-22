export class Animal {
  id: number;
  type: string;
  size: string;
  points: number;

  constructor(id: number, type: string, size: string) {
    this.id = id;
    this.type = type;
    this.size = size;
    switch (size) {
      case "small":
        this.points = 1;
        break;
      case "medium":
        this.points = 3;
        break;
      case "large":
        this.points = 5;
        break;
      default:
        this.points = 0;
        break;
    }
  }
}

export class Wagon {
  number: number;
  points = 0;

  constructor(number: number) {
    this.number = number;
  }

  animals: Animal[] = [];
}

export class Train {
  wagons: Wagon[] = [];
}

export class Conducteur {
  public fillTrain(inputAnimals: Animal[]): Train {
    console.log("Trein aan het vullen");
    console.log(inputAnimals);

    const initialAnimals: Animal[] = inputAnimals;
    const train: Train = new Train();

    // Is er een dier die nog niet in de trein zit?
    while (initialAnimals.length > 0) {
      // Maak een wagon
      const wagon: Wagon = new Wagon(train.wagons.length + 1);

      // Een functie met logica moet de lijst beesten krijgen
      // en de huidige wagon en die geeft een beest terug.
      let beestDatInWagonMag = this.fittingAnimal(wagon, initialAnimals);

      // Stop de wagon helemaal vol
      while (beestDatInWagonMag !== undefined) {
        // Stop beest in wagon
        wagon.animals.push(beestDatInWagonMag);
        // Registreer de punten van het beest in de wagon.

        // Verwijder beest uit initialAnimals
        const index = initialAnimals.indexOf(beestDatInWagonMag);
        initialAnimals.splice(index, 1);

        // opnieuw checken of er een beest is wat in de lijst mag
        beestDatInWagonMag = this.fittingAnimal(wagon, initialAnimals);
      }

      // Haak de wagon aan de trein en maak nog een wagon als er nog beesten zijn.
      train.wagons.push(wagon);
    }

    console.log(train);
    return train;
  }

  fittingAnimal(wagon: Wagon, animals: Animal[]): Animal | undefined {
    // Hier de magische logica om te kijken welk beest we er het beste in kunnen gooien.

    // No animal in the wagon and carnivores left.
    if (
      animals.find((x) => x.type === "carnivore") &&
      wagon.animals.length === 0
    ) {
      const returnAnimal = this.FindBiggestCarnivore(animals);
      return returnAnimal;
    }

    // Carnivore is in the wagon
    if (wagon.animals.find((x) => x.type === "carnivore")) {
      // Find animals that fit and don't eat or get eaten by other animals
      const fittingAnimals: Animal[] = animals.filter(
        (animal) =>
          !(animal.type === "carnivore") &&
          !this.AnimalGetsEaten(wagon, animal) &&
          this.AnimalFits(wagon, animal)
      );
      // No animal(s) found: return null / Animal(s) found: return first animal in list.
      if (fittingAnimals.length <= 0) return undefined;
      const returnAnimal: Animal | undefined =
        this.FindBiggestHerbivore(fittingAnimals);
      // AddAnimal(returnAnimal);
      return returnAnimal;
    }

    // Find fitting herbivores
    const fittingHerbivores: Animal[] = animals.filter(
      (animal) =>
        !(animal.type === "carnivore") &&
        this.AnimalFits(wagon, animal) &&
        !this.AnimalGetsEaten(wagon, animal)
    );

    if (fittingHerbivores.length <= 0) return undefined;
    const biggestHerbivoreFirst: Animal[] = fittingHerbivores.toSorted(
      (x) => x.points
    );
    const returnAnimal: Animal = biggestHerbivoreFirst[0];
    // AddAnimal(returnAnimal);
    return returnAnimal;
  }

  AnimalFits(wagon: Wagon, animal: Animal) {
    return wagon.points + animal.points <= 10;
  }

  AnimalGetsEaten(wagon: Wagon, animal: Animal) {
    const wagonCarnivores: Animal[] = wagon.animals.filter(
      (animal) => animal.type === "carnivore"
    );
    if (wagonCarnivores.length > 1)
      throw new Error("Multiple carnivores found in one wagon!");

    return (
      wagonCarnivores.length == 1 && wagonCarnivores[0].points >= animal.points
    );
  }

  FindBiggestCarnivore(animals: Animal[]): Animal | undefined {
    const carnivoresInList: Animal[] = animals.filter(
      (animal) => animal.type === "carnivore"
    );

    if (carnivoresInList.length <= 0) return undefined;

    const biggestCarnivoreFirst: Animal[] = carnivoresInList.toSorted(
      (animal) => animal.points
    );
    return biggestCarnivoreFirst[0];
  }

  FindBiggestHerbivore(animals: Animal[]): Animal | undefined {
    const herbivoresInList: Animal[] = animals.filter(
      (animal) => animal.type === "herbivore"
    );

    if (herbivoresInList.length <= 0) return undefined;

    const biggestHerbivoreFirst: Animal[] = herbivoresInList.toSorted(
      (animal) => animal.points
    );
    return biggestHerbivoreFirst[0];
  }
}
