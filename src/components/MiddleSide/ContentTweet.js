import ProfilePic from "../icons/K-5Xvl4B_bigger.jpg";
import { useState, useRef, useEffect } from "react";
import {
  MediaSvg,
  GifSvg,
  PollSvg,
  EmojiSvg,
  ScheduleSvg,
  LocationSvg,
} from "../Icon";

export default function ContentTweet() {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    adjustInputHeight();
  };

  const adjustInputHeight = () => {
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      inputRef.current.style.height = inputRef.current.scrollHeight + "px";
    }
  };

  const handleTweetClick = () => {
    setShowAlert(true);
    setInputValue("");
  };

  const isDisabled = inputValue.length === 0;

  useEffect(() => {
    let timer;
    if (showAlert) {
      timer = setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [showAlert]);

  return (
    <div className="flex-1 flex-row bg-black text-white border-b border-gray-700">
      <div className="flex items-center p-4">
        <div>
          <img
            className="rounded-full h-10 w-10"
            src={ProfilePic}
            alt="Profile Pic"
          />
        </div>
        <div className="flex items-center justify-center w-full">
          <textarea
            className="text-white ml-4 text-xl bg-black focus:outline-none w-full resize-none"
            ref={inputRef}
            type="text"
            placeholder="What is happening?!"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="flex flex-row justify-between items-center py-2">
        <div className="flex flex-row items-center ml-12">
          <button
            className={`rounded-full ${
              isDisabled ? "" : "hover:bg-[#1d697b8b]"
            }`}
            disabled={isDisabled}
          >
            <MediaSvg />
          </button>
          <button
            className={`rounded-full ${
              isDisabled ? "" : "hover:bg-[#1d697b8b]"
            }`}
            disabled={isDisabled}
          >
            <GifSvg />
          </button>
          <button
            className={`rounded-full ${
              isDisabled ? "" : "hover:bg-[#1d697b8b]"
            }`}
            disabled={isDisabled}
          >
            <PollSvg />
          </button>
          <button
            className={`rounded-full ${
              isDisabled ? "" : "hover:bg-[#1d697b8b]"
            }`}
            disabled={isDisabled}
          >
            <EmojiSvg />
          </button>
          <button
            className={`rounded-full ${
              isDisabled ? "" : "hover:bg-[#1d697b8b]"
            }`}
            disabled={isDisabled}
          >
            <ScheduleSvg />
          </button>
          <button
            className={`rounded-full ${
              isDisabled ? "" : "hover:bg-[#1d697b8b]"
            }`}
            disabled={isDisabled}
          >
            <LocationSvg />
          </button>
        </div>
        <div className="flex flex-row items-center mr-6">
          <button
            className={`bg-[#1D9BF0] rounded-full px-4 py-2 text-white font-bold ${
              isDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isDisabled}
            onClick={handleTweetClick}
          >
            Tweet
          </button>
        </div>
      </div>
      {showAlert && (
        <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-64 bg-[#1D9BF0] text-white text-center py-2 rounded">
          Tweeted Successfully
        </div>
      )}
    </div>
  );
}
