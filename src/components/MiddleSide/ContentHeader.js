import { useState } from "react";

export default function ContentHeader() {
  const [isForYouActive, setForYouActive] = useState(true);
  const [isFollowingActive, setFollowingActive] = useState(false);

  return (
    <header className="sticky top-0 bg-black bg-opacity-75 backdrop-filter backdrop-blur-sm">
      <div className="flex flex-col text-white border-b border-gray-700 bg-transparent-100 pb-2">
        <div className="flex flex-col items-start w-max p-4">
          <a href="jo">
            <h2 className="px-2 py-1 text-xl rounded-full font-bold">Home</h2>
          </a>
        </div>
        <div className="flex flex-row items-center h-8">
          <div
            className={`flex flex-col justify-center items-center hover:bg-gray-700 cursor-pointer h-12 w-1/2 ${
              isForYouActive ? "text-white font-bold" : "text-gray-500"
            }`}
            onClick={() => {
              setForYouActive(true);
              setFollowingActive(false);
            }}
          >
            <h3>For you</h3>
            {isForYouActive && (
              <div className="bg-blue-500 h-1 w-2/12 rounded-full"></div>
            )}
          </div>
          <div
            className={`flex flex-col justify-center items-center hover:bg-gray-700 cursor-pointer h-12 w-1/2 ${
              isFollowingActive ? "text-white font-bold" : "text-gray-500"
            }`}
            onClick={() => {
              setFollowingActive(true);
              setForYouActive(false);
            }}
          >
            <h3>Following</h3>
            {isFollowingActive && (
              <div className="bg-blue-500 h-1 w-3/12 rounded-full"></div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
