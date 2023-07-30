/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { dataImage } from "../data";

const ImageGrid: React.FC<{ numImages: number }> = ({ numImages }) => {
  const [imageList, setImageList] = useState<any>(
    dataImage.slice(0, numImages)
  );

  useEffect(() => {
    const maxImages = 15;
    const images = dataImage.slice(0, Math.min(numImages, maxImages));
    setImageList(images);
  }, [numImages]);

  return (
    <div className="image-grid">
      {imageList.map((image: any, index: number) => (
        <img key={index} src={image.url} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
};

export default ImageGrid;
