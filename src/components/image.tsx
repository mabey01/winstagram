import { ComponentProps, useState } from "react";
import { ImageModal } from "./image-modal";

export function Image({ className, ...props }: ComponentProps<"img">) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <img
        {...props}
        className={`${className} w-full object-cover cursor-pointer`}
        style={{ aspectRatio: "1/1" }}
        src="https://source.unsplash.com/random"
        onClick={() => setIsModalOpen(true)}
      />
      <ImageModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
