"use client";

import { useState } from "react";

export default function Component() {
  const [selectedColor, setSelectedColor] = useState("#000000");
  const [boxColors, setBoxColors] = useState(Array<string>(200).fill("#aaaaaa"));
  const handleBoxClick = (index: number) => {
    const newBoxColors = [...boxColors];
    newBoxColors[index] = selectedColor;
    setBoxColors(newBoxColors);
  };
  const handleColorChange = (newColor: string) => {
    setSelectedColor(newColor);
  };
  const resetColors = () => {
    setBoxColors(Array(200).fill("#aaaaaa"));
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex items-center flex-col justify-center p-3 bg-slate-200 rounded-md">
        <p className="">Selected color</p>
        <input
          type="color"
          value={selectedColor}
          onChange={(e) => handleColorChange(e.target.value)}
          className="rounded-full bg-transparent cursor-pointer"
        />
        <button
          onClick={resetColors}
          className="px-2 py-1 mt-2 text-white bg-slate-500 rounded-md"
        >
          Reset boxes
        </button>
      </div>
      <div className={`grid grid-cols-10 gap-1 p-4 bg-background`}>
        {boxColors.map((color, index) => (
          <div
            key={index}
            className="w-5 h-5 rounded cursor-pointer"
            style={{ backgroundColor: color }}
            onClick={() => handleBoxClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
