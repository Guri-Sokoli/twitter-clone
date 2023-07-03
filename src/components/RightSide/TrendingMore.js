import { useState } from "react";

export default function TrendingMore() {
  const [isHovered, setHovered] = useState(false);

  return (
    <div
      className={`ml-4 flex flex-row items-center justify-between w-9 h-9 rounded-full ${
        isHovered ? "bg-[#1d697b8b] transition-all duration-200" : ""
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`ml-1 w-1 h-1 rounded-full ${
          isHovered ? "bg-blue-500" : "bg-gray-400"
        }`}
      ></div>
      <div
        className={`w-1 h-1 rounded-full ${
          isHovered ? "bg-blue-500" : "bg-gray-400"
        }`}
      ></div>
      <div
        className={`mr-1 w-1 h-1 rounded-full ${
          isHovered ? "bg-blue-500" : "bg-gray-400"
        }`}
      ></div>
    </div>
  );
}
