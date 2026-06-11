"use client";

import { ReactNode, useState, useEffect } from "react";

export default function Sudoku() {
  const [sudoku, setSudoku] = useState<ReactNode[][] | null>(null);

  useEffect(() => {
    setSudoku(generateSudoku());
  }, []);

  if (!sudoku) {
    return <div className="text-center text-2xl">Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-row">{sudoku[0]}</div>
      <div className="flex flex-row">{sudoku[1]}</div>
      <div className="flex flex-row border-b border-gray-500">{sudoku[2]}</div>
      <div className="flex flex-row">{sudoku[3]}</div>
      <div className="flex flex-row">{sudoku[4]}</div>
      <div className="flex flex-row border-b border-gray-500">{sudoku[5]}</div>
      <div className="flex flex-row">{sudoku[6]}</div>
      <div className="flex flex-row">{sudoku[7]}</div>
      <div className="flex flex-row">{sudoku[8]}</div>
    </div>
  );
}

function generateSudoku(): ReactNode[][] {
  // Create empty grid
  var grid: number[][] = new Array(9).fill(0).map(() => new Array(9).fill(0));
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      grid[i][j] = -1;
    }
  }

  // Fill grid with sudoku numbers
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let placed = false;
      for (let tries = 0; tries < 9; tries++) {
        const num: number = Math.floor(Math.random() * 9) + 1;
        if (
          !rowContains(grid, i, num) &&
          !colContains(grid, j, num) &&
          !boxContains(grid, i, j, num)
        ) {
          grid[i][j] = num;
          placed = true;
          break;
        }
      }
      if (!placed) grid[i][j] = -1;
    }
  }

  // Create ReactNodes that can be rendered in the Soduku grid
  const baseStyles: string =
    "w-10 h-10 border flex items-center justify-center text-2xl";

  var sudoku: ReactNode[][] = grid.map((row, rowIndex) =>
    row.map((num, numIndex) => (
      <div
        key={rowIndex + "-" + numIndex}
        className={`${baseStyles} ${numIndex % 3 === 2 && numIndex !== 8 ? "border border-r-gray-500" : ""}`}
      >
        {num}
      </div>
    )),
  );
  return sudoku;
}

function rowContains(grid: number[][], row: number, num: number): boolean {
  return grid[row].includes(num);
}

function colContains(grid: number[][], col: number, num: number): boolean {
  return grid.some((row) => row[col] === num);
}

function boxContains(
  grid: number[][],
  row: number,
  col: number,
  num: number,
): boolean {
  const boxRowStart = Math.floor(row / 3) * 3;
  const boxColStart = Math.floor(col / 3) * 3;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (grid[boxRowStart + i][boxColStart + j] === num) {
        return true;
      }
    }
  }
  return false;
}
