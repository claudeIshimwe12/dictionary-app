import playIcon from "../assets/images/icon-play.svg";
type FoundProps = {
  word: string;
  phonetics: string;
  audio: string;
};
export const Found = (props: FoundProps) => {
  console.log("Url", props.audio);
  const playAudio = new Audio(props.audio);

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
        <button onClick={() => playAudio.play()}>
          <img src={playIcon} alt="play" />
        </button>
      </div>
    </>
  );
};
