import playIcon from "../assets/images/icon-play.svg";
type FoundProps = {
  word: string;
  phonetics: string;
};
export const Found = (props: FoundProps) => {
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
        <button>
          <img src={playIcon} alt="play" />
        </button>
      </div>
    </>
  );
};
