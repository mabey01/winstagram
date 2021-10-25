import React from "react";
import { TinyImageComponent } from "../components/custom-image";
import { ProfileHeader } from "../components/profile-header";
import { images } from "../images";

const profileName = "White Wolf";
const numberOfPosts = 501;
const numberOfFollowers = "3.5m";
const name = "Geralt of Rivia";
const pronouns = "he/him";
const bio =
  "I carry two swords. One of silver for creatures that roam the wild. One of steel for humans in their cities of stone. They’re both for monsters.";

export default function Home() {
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
            <header className="flex flex-col sm:flex-row items-start">
              <div className="w-40 h-40 flex-shrink-0 self-center">
                <img
                  src="https://source.unsplash.com/160x160/?Geralt"
                  className="rounded-full w-full h-full bg-gray-400"
                />
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-16 ">
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
              <li className="text-black">Post</li>
              <li>Reels</li>
              <li>Videos</li>
              <li>Tagged</li>
            </ul>
          </div>

          <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 sm:gap-7">
            {images.map((image) => (
              <TinyImageComponent
                key={image.imageName}
                className="w-full"
                image={image}
                size="256sq"
              />
            ))}
          </div>
        </div>
      </section>

      <footer className="flex justify-center text-xs text-gray-400 pt-8 pb-4">
        © 2021 Winstagram by Max
      </footer>
    </div>
  );
}
