import TrendingMore from "./TrendingMore";
export default function Trends(TrendsList) {
  return (
    <div className="flex flex-col space-y-4 pt-3 m-3 bg-gray-800 rounded-t-3xl rounded-b-3xl">
      <div className="flex items-center justify-between px-4">
        <h1 className="text-2xl font-bold text-white">Trends for you</h1>
      </div>
      <div className="">
        {TrendsList.TrendsList.map((trend) => (
          <div className="px-4 py-2 flex flex-col hover:bg-gray-700 cursor-pointer">
            <div className="flex flex-row justify-between items-center">
              <span className="text-gray-400 text-md">Trending</span>
              <TrendingMore />
            </div>
            <span className="text-white text-lg font-bold">{trend.topic}</span>
            <span className="text-gray-400 text-md pb-2">{trend.tweets}</span>
          </div>
        ))}
        <div className="bg-gray-800 rounded-b-3xl text-blue-500 w-auto h-16 hover:bg-gray-700 cursor-pointer flex items-center justify-start">
          <span className="text-lg font-bold p-4 left-0">Show more</span>
        </div>
      </div>
    </div>
  );
}
