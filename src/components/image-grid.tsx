import { Image } from "./image";

export function ImageGrid() {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-7">
      {new Array(100).fill(0).map((_, index) => (
        <Image key={index} src="https://source.unsplash.com/random" />
      ))}
    </div>
  );
}
