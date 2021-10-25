import { ComponentProps } from "react";
import { TinyImage } from "../images";

function getSrc(imageName: string, size: string, format: string) {
  const actualFormat = format === "jpeg" ? "jpg" : format;
  return `https://storage.googleapis.com/max-demo-images/${size}/${imageName}_${size}.${actualFormat}`;
}

export interface TinyImageProps extends Omit<ComponentProps<"img">, "src"> {
  image: TinyImage;
  size: "original" | "2560" | "640" | "256sq";
}

export function TinyImageComponent({ image, size, ...props }: TinyImageProps) {
  return (
    <picture>
      <source
        srcSet={getSrc(image.imageName, size, "avif")}
        type="image/avif"
      />
      <source
        srcSet={getSrc(image.imageName, size, "webp")}
        type="image/webp"
      />
      <img
        {...props}
        style={{ aspectRatio: "1/1" }}
        src={getSrc(image.imageName, size, "jpeg")}
        loading="lazy"
      />
    </picture>
  );
}
