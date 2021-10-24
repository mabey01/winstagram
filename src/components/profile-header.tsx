interface ProfileHeaderProps {
  profileName: string;
  numberOfPosts: React.ReactNode;
  numberOfFollowers: React.ReactNode;
  numberOfFollowing: React.ReactNode;
  name: string;
  pronouns: string;
  bio: React.ReactNode;
}

export function ProfileHeader({
  profileName,
  numberOfPosts,
  numberOfFollowers,
  numberOfFollowing,
  name,
  pronouns,
  bio,
}: ProfileHeaderProps) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center">
        <h3 className="text-3xl font-light">{profileName}</h3>
        <div className="ml-2 text-blue-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <button className="ml-6 bg-blue-500 py-1.5 px-2 rounded text-white font-semibold text-sm">
          Follow
        </button>
      </div>
      <ul className="flex space-x-4 mt-4">
        <li>
          <span className="font-semibold">{numberOfPosts}</span> posts
        </li>
        <li>
          <span className="font-semibold">{numberOfFollowers}</span> followers
        </li>
        <li>
          <span className="font-semibold">{numberOfFollowing}</span> following
        </li>
      </ul>

      <div className="mt-4">
        <div className="flex">
          <div className="font-semibold">{name}</div>
          <div className="ml-2 text-gray-400">{pronouns}</div>
        </div>
        <div className="">{bio}</div>
      </div>
    </div>
  );
}
