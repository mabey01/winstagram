import { ImageGrid } from "./components/image-grid";
import { ProfileHeader } from "./components/profile-header";

export function Winstagram() {
  return (
    <div>
      <header className="bg-white w-full">
        <div className="container m-auto py-2 flex justify-between items-center">
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

      <section className="container m-auto mt-8">
        <ProfileHeader
          profileName="profile name"
          profileImage="https://source.unsplash.com/200x200/?portrait"
          numberOfPosts="124"
          numberOfFollowers="12.4m"
          numberOfFollowing="1234"
          name="human name"
          pronouns="she/her"
          bio="Photographer"
        />
        <div className="mt-16">
          <ul className="flex justify-center space-x-16 uppercase text-gray-500 text-sm cursor-pointer font-semibold">
            <li className="text-black">Posts</li>
            <li>Reels</li>
            <li>Videos</li>
            <li>Tagged</li>
          </ul>
        </div>

        <div className="mt-4">
          <ImageGrid />
        </div>
      </section>

      <footer className="flex justify-center text-xs text-gray-400 pt-8 pb-4">
        © 2021 Winstagram by Max
      </footer>
    </div>
  );
}
