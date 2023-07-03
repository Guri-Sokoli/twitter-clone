import LeftSideBarLink from "./LeftSideBarLink";
import TwitterLogo from "../icons/icon-twitter.svg";
import { TweetSvg } from "../Icon";
import { useState } from "react";

export default function LeftSideLinks(sideLinks) {
  const [active, setActive] = useState("Home");
  const handleMenuItemClick = (name) => {
    setActive(name);
  };
  return (
    <div className="flex flex-col items-end">
      <div className="mr-6">
        <div className="mt-1 mb-4 ml-1 flex items-center justify-center w-16 h-16 rounded-full hover:bg-gray-800 transform transition-colors duration-200">
          <img src={TwitterLogo} alt="Twitter Logo" className="w-10 h-10" />
        </div>
        <nav className="mb-4">
          <ul>
            {sideLinks.sideLinks.map(({ name, icon }) => (
              <LeftSideBarLink
                key={name}
                name={name}
                Icon={icon}
                active={active}
                onMenuItemClick={handleMenuItemClick}
              />
            ))}
          </ul>
        </nav>
        <button className="flex flex-row items-center justify-center bg-blue-500 hover:bg-blue-600 rounded-full px-8 py-3 mt-4 w-64">
          <TweetSvg />
          Tweet
        </button>
      </div>
    </div>
  );
}
