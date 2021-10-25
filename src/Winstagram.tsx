import { ProfileHeader } from "./components/profile-header";

const profileName = "White Wolf";
const numberOfPosts = 501;
const numberOfFollowers = "143m";
const name = "Geralt of Rivia";
const pronouns = "he/him";
const bio =
  "I carry two swords. One of silver for creatures that roam the wild. One of steel for humans in their cities of stone. They’re both for monsters.";

export function Winstagram() {
  return (
    <div>
      <header className="bg-white w-full">
        <div className="max-w-5xl m-auto py-4 px-4 flex justify-between items-center">
          <div className="flex items-baseline">
            <h1 className="font-sans font-bold ml-2 text-gray-700">
              Winstagram
            </h1>

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
              <div className="w-40 h-40 flex-shrink-0">
                <img
                  src="https://source.unsplash.com/200x200/?Geralt"
                  className="rounded-full w-full h-full bg-gray-400"
                />
              </div>
              <div className="ml-16">
                <ProfileHeader
                  profileName={profileName}
                  numberOfPosts={numberOfPosts}
                  numberOfFollowers={numberOfFollowers}
                  numberOfFollowing="1234"
                  name={name}
                  pronouns={pronouns}
                  bio={bio}
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
            <div className="flex flex-col items-center justify-center py-16 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="mt-2">Gallery is under construction</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="flex justify-center text-xs text-gray-400 pt-8 pb-4">
        © 2021 Winstagram by Max
      </footer>
    </div>
  );
}
