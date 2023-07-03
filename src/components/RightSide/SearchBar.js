import { SearchSvg } from "../Icon";

export default function SearchBar() {
  return (
    <div className="sticky top-0 bg-black py-0.5 ">
      <div className="flex items-center space-x-4 p-3 m-2 bg-gray-800 rounded-full text-white focus-within:ring-1  focus-within:bg-black focus-within:ring-blue-500 focus-within:text-white">
        <SearchSvg className="w-6 h-6" />
        <input
          type="text"
          placeholder="Search Twitter"
          className="bg-transparent placeholder-grey-700 focus:outline-none w-full text-md h-"
        />
      </div>
    </div>
  );
}
