export function GalleryImage() {
  return (
    <>
      <div className="relative cursor-pointer group">
        <div className="opacity-0 group-hover:opacity-75 bg-gray-900 absolute inset-0" />
        <img
          className="w-full bg-gray-400"
          style={{ aspectRatio: "1/1" }}
          src="https://source.unsplash.com/random"
        />
      </div>
    </>
  );
}
