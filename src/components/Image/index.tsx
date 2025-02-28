import React from "react";
import { ImageProps } from "./image.interface.ts";
import { imageStyle } from "./image.css.ts";

const Image: React.FC<ImageProps> = ({ alt, image }) => {
  const Image = image || defaultImage;
  return (

<img alt={alt} loading="lazy" className={imageStyle} decoding="async" srcSet={image} src={image} />
  );
};

export default Image;
