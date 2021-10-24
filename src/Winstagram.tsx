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

      <section className="mt-8">
        <div className="max-w-5xl m-auto px-4">
          <div>
            <header className="flex items-start">
              <div>
                <img
                  src="https://source.unsplash.com/200x200/?portrait"
                  className="rounded-full w-40 h-40 bg-gray-400"
                />
              </div>
              <div className="ml-16">
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
          <div className="mt-16 border-t border-gray-300">
            <ul className="flex justify-center space-x-16 py-4 uppercase text-gray-500 text-sm cursor-pointer font-medium">
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
