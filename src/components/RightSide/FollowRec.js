import ProfilePic from "../icons/K-5Xvl4B_bigger.jpg";

export default function FollowRec(FollowRecList) {
  return (
    <div className="flex flex-col m-3 bg-gray-800 rounded-3xl">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white my-3 mx-3 py-1 px-1 pb-2">
          Who to follow
        </h1>
      </div>

      {FollowRecList.FollowRecList.map((person) => (
        <div className="flex flex-row hover:bg-gray-700 cursor-pointer">
          <img
            className="rounded-full w-12 h-12 m-2 ml-5"
            src={ProfilePic}
            alt="Profile Pic"
          />
          <div className="px-4 py-2 flex flex-col hover:bg-gray-700 cursor-pointer justify-center">
            <span className="text-white text-lg font-bold ">{person.name}</span>
            <span className="text-gray-400 text-md">{person.username}</span>
          </div>
          <div className="flex justify-center items-center ml-auto">
            <button className="bg-white rounded-full text-black font-bold text-sm px-4 py-2 m-2">
              Follow
            </button>
          </div>
        </div>
      ))}
      <div className="bg-gray-800 rounded-b-3xl text-blue-500 w-auto h-16 hover:bg-gray-700 cursor-pointer flex items-center justify-start">
        <span className="text-lg font-bold p-4 left-0">Show more</span>
      </div>
    </div>
  );
}
