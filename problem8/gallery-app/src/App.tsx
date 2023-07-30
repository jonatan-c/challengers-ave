/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import "./App.css";
import ImageGrid from "./components/ImageGrid";

const App: React.FC = () => {
  const [numImages, setNumImages] = useState<any>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setNumImages(value);
  };

  return (
    <div className="app">
      <h1>Image Grid</h1>
      <input
        type="number"
        // min="0"
        // max="15"
        value={numImages}
        onChange={handleChange}
      />
      {numImages > 0 && <ImageGrid numImages={numImages} />}
      {!numImages && <p>Enter a number between 1 and 15</p>}
    </div>
  );
};

export default App;
