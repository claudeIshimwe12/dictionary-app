import { Br } from "./NounBr";
type LIstProps = {
  meaning: [];
  synonyms: string[];
  verb: {
    definition: string;
    example: string;
    source: string[];
  };
};
const List = (props: LIstProps) => {
  return (
    <>
      <h1 className="px-8 text-dark-grey mt-4">Meaning</h1>
      <div className=" p-8 ">
        {props.meaning.map((def, index) => (
          <div key={index} className="flex pt-0  items-baseline mb-4">
            <div
              className="h-[5px] w-[5px] rounded-full bg-primary-blue pr-1 mr-4
            "
            ></div>{" "}
            <h1 key={index} className="dark:text-almost-white">
              {def}
            </h1>
          </div>
        ))}
      </div>
      {/*============== Synonyms ============== */}
      <div className="flex mb-4">
        <h1 className="px-8 text-dark-grey ">Synonyms</h1>
        {props.synonyms.map((syn, index) => (
          <h1 className="text-primary-blue text-8" key={index}>
            {syn}
          </h1>
        ))}
      </div>
      <Br word="Verb" />
      <h1 className="px-8 text-dark-grey mt-4">Meaning</h1>

      <div className="flex px-4 justify-between items-baseline my-4">
        <div className="h-[5px] w-[5px] rounded-full bg-primary-blue pr-1 mr-4"></div>
        <div className="w-11/12">
          <h1 className="text-semi-light-black dark:text-almost-white">
            {props.verb.definition}
          </h1>
          <h1 className="text-dark-grey my-4">{`"${props.verb.example}"`}</h1>
        </div>
      </div>
      <div className="h-1 w-full mt-1 dark:bg-semi-black  bg-almost-white"></div>
      <h1 className="px-4 text-dark-grey mt-4 underline">Source</h1>
      {props.verb.source.map((link, index) => (
        <h1
          key={index}
          className="text-semi-light-black p-4 dark:text-almost-white pb-12"
        >
          {link}
        </h1>
      ))}
    </>
  );
};

export default List;
