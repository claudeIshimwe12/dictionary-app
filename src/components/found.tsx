import { useState } from "react";
import playIcon from "../assets/images/icon-play.svg";
import playIconDark from "../assets/images/icon-search-dark.svg";
type FoundProps = {
  word: string;
  phonetics: string;
  audio: string;
};
export const Found = (props: FoundProps) => {
  const [hide, setHide] = useState(true);
  const playAudio = new Audio(props.audio);
  const swapIcon = () => {
    setHide(false);
  };
  const swapIconsAgain = () => {
    setHide(true);
  };
  return (
    <>
      <div className="flex justify-between px-4  py-4">
        <div>
          <h1 className="text-3xl dark:text-almost-white sm:text-6xl">
            {props.word}
          </h1>
          <ruby className="text-3xl text-primary-blue mt-8 ">
            {props.phonetics}
          </ruby>
        </div>
        <button onClick={() => playAudio.play()} className="duration-500">
          <img
            src={playIcon}
            alt="play"
            onMouseOver={swapIcon}
            onMouseLeave={swapIconsAgain}
            className={hide ? "" : "hidden"}
          />
          <img
            src={playIconDark}
            alt="play-icon-dark"
            onMouseOver={swapIcon}
            onMouseLeave={swapIconsAgain}
            className={hide ? "hidden" : ""}
          />
        </button>
      </div>
    </>
  );
};
