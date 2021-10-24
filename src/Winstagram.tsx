import { ImageGrid } from "./components/image-grid";
import { ProfileHeader } from "./components/profile-header";

export function Winstagram() {
  return (
    <div>
      <header className="bg-white w-full">
        <div className="max-w-5xl m-auto py-4 px-4 flex justify-between items-center">
          <div className="flex items-baseline">
            <h1 className="font-mono font-semibold">Winstagram</h1>
            <span className="text-xs text-gray-300 ml-2">by Max</span>
          </div>
          <div>
            <button className="bg-blue-500 px-2 py-1 rounded text-white font-semibold text-sm">
              Login
            </button>
          </div>
        </div>
      </header>

      <section className="">
        <div id="hero">
          <picture>
            <source
              media="(orientation: landscape)"
              srcSet="https://source.unsplash.com/2000x500/?landscape"
              type="image/jpeg"
            />
            <source
              media="(orientation: portrait)"
              srcSet="https://source.unsplash.com/1000x1000/?landscape"
              type="image/jpeg"
            />
            <img
              className="w-full h-72 bg-gray-300 object-cover"
              src="https://source.unsplash.com/2000x500/?landscape"
              alt="Hero image"
            />
          </picture>
        </div>
        <div className="max-w-5xl m-auto px-4">
          <div>
            <header className="flex flex-col items-center sm:flex-row">
              <div className="-mt-40">
                <img
                  src="https://source.unsplash.com/200x200/?portrait"
                  className="rounded-full w-40 h-40 bg-gray-400 border-4 border-gray-200"
                />
              </div>
              <div className="mt-4 ml-16">
                <ProfileHeader
                  profileName="profile name"
                  numberOfPosts="124"
                  numberOfFollowers="12.4m"
                  numberOfFollowing="1234"
                  name="human name"
                  pronouns="she/her"
                  bio="Photographer"
                />
              </div>
            </header>
          </div>
          <div className="mt-8 sm:mt-16 border-t border-gray-300">
            <ul className="flex justify-center space-x-8 sm:space-x-16 py-4 uppercase text-gray-500 text-sm cursor-pointer font-medium">
              <li className="text-black">Posts</li>
              <li>Reels</li>
              <li>Videos</li>
              <li>Tagged</li>
            </ul>
          </div>

          <div>
            <ImageGrid />
          </div>
        </div>
      </section>

      <footer className="flex justify-center text-xs text-gray-400 pt-8 pb-4">
        © 2021 Winstagram by Max
      </footer>
    </div>
  );
}
