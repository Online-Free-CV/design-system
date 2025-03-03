import React from "react";
import { ImageProps } from "./image.interface.ts";
import { imageStyle } from "./image.css.ts";

export const Image: React.FC<ImageProps> = ({ alt, image = 'https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg' }) => {
  return (
    <img alt={alt} loading="lazy" className={imageStyle} decoding="async" srcSet={image} src={image} />
  );
};
