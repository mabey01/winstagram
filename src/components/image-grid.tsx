export function ImageGrid() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {new Array(100).fill(0).map(() => (
        <img
          className="w-full"
          style={{ aspectRatio: "1/1" }}
          src="https://source.unsplash.com/random"
        />
      ))}
    </div>
  );
}
