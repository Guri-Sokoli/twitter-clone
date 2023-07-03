import { useState } from "react";
import ProfilePic from "../icons/profile1.jpg";
import ContentPic from "../icons/content1.jpg";
import { ReplySvg, RetweetSvg, LikeSvg, ViewSvg, ShareSvg } from "../Icon";
import UserTweeter from "./UserTweeter";
export default function UserTweet() {
  const [isHovered, setHovered] = useState(false);
  return (
    <div className="border-b border-gray-700">
      <div className="flex flex-row cursor-pointer pr-5 pb-3">
        <div className="flex items-start justify-center w-64">
          <img
            className="rounded-full w-12 h-12 m-4"
            src={ProfilePic}
            alt="Profile Pic"
          />
        </div>
        <div className="flex flex-col">
          <UserTweeter />
          {/* here is the tweet text */}
          <div className="flex flex-row cursor-pointer justify-start items-center">
            <span className="flex text-white text-md pr-2 pb-2">
              A metal container from Roman times, believed to be around 2,000
              years old, was found to contain a face cream with distinct ancient
              finger marks. The cream was analyzed and found to be a mixture of
              refined animal fat, starch, and tin. To recreate the cream,
              researchers followed
            </span>
          </div>
          <img
            className="rounded-md w-full h-full mr-10"
            src={ContentPic}
            alt="Content Pic"
          />
        </div>
      </div>
      {/* the icons under the tweet. Reply, Retweet, Like, View, Share */}
      <div className="flex flex-row justify-around items-center text-gray-400 text-md cursor-pointer">
        <div className="flex flex-row justify-start items-center">
          <div
            className="flex flex-row hover:text-blue-500"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <ReplySvg fill={isHovered ? "#3482F6" : "#3B82F6"} />
            <span className="flex justify-center items-center pr-16">1.2k</span>
          </div>
          <div
            className="flex flex-row hover:text-green-500"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <RetweetSvg fill={isHovered ? "#3482F6" : "#71767B"} />
            <span className="flex justify-center items-center pr-16">3.4k</span>
          </div>
          <div
            className="flex flex-row hover:text-red-500"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <LikeSvg fill={isHovered ? "#3482F6" : "#EF4444"} />
            <span className="flex justify-center items-center pr-16">5.6k</span>
          </div>
          <div
            className="flex flex-row hover:text-blue-500"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <ViewSvg fill={isHovered ? "#3482F6" : "#3B82F6"} />
            <span className="flex justify-center items-center pr-16">6.7k</span>
          </div>
          <div
            className="flex flex-row hover:text-blue-500"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <ShareSvg fill={isHovered ? "#3482F6" : "#3B82F6"} />
          </div>
        </div>
      </div>
    </div>
  );
}
