export function ImageGrid() {
  return (
    <div className="grid grid-cols-3 gap-7">
      {new Array(100).fill(0).map(() => (
        <img
          className="w-full rounded object-cover"
          style={{ aspectRatio: "1/1" }}
          src="https://source.unsplash.com/random"
        />
      ))}
    </div>
  );
}
