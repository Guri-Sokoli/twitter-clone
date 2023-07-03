import ProfilePic from "../icons/K-5Xvl4B_bigger.jpg";
export default function ProfilePill() {
  return (
    <div className="flex flex-col items-end ">
      <div className="flex justify-between items-center w-64 mr-6 mb-6 hover:bg-gray-800 cursor-pointer rounded-full py-2 px-4 transform transition-colors duration-200">
        <div className="flex flex-row">
          <img
            src={ProfilePic}
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />

          <div className="flex flex-col ml-4">
            <span className="font-bold text-md">DaShrekk</span>
            <span className="text-sm text-gray-500">@DaShrekerz</span>
          </div>
        </div>

        <div className="flex space-x-1">
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <div className="w-1 h-1 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
