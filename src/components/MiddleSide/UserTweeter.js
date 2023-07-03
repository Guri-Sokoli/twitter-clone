import TrendingMore from "../RightSide/TrendingMore";
export default function UserTweeter() {
  return (
    <div className="pt-2 flex flex-row cursor-pointer justify-start items-center">
      <span className="flex items-center justify-center hover:underline text-white text-lg font-bold pr-2">
        Fight Club
      </span>
      <span className="flex items-center text-gray-400 text-md">
        @Fightclub
      </span>
      <span className="flex items-center text-gray-400 text-md pl-2">· 1h</span>
      <div className="flex justify-center items-center ml-auto">
        <TrendingMore />
      </div>
    </div>
  );
}
