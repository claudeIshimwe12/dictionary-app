import searIcon from "../assets/images/icon-search.svg";
import { Br } from "./NounBr";
import { NotFound } from "./NotFound";
import { Found } from "./found";
import { Loading } from "./loading";
import { ChangeEvent, useEffect, useState } from "react";
import List from "./list";

type definition = {
  definition: string;
};
type Verb = {
  definition: string;
  example: string;
  source: string[];
};
export const Main = () => {
  const [word, setWord] = useState<string>("");
  const [searchWord, setSearchWord] = useState<string>("");
  const [meaning, setMeaning] = useState<definition[]>([]);
  const [phonetcis, setPhonetics] = useState<string>("");
  const [foundWord, setFoundWord] = useState("");
  const [status, setStatus] = useState("");
  const [synonyms, setSynonyms] = useState([]);
  const [verb, setVerb] = useState<Verb>({
    definition: "",
    example: "",
    source: [],
  });
  const handleChange = function (event: ChangeEvent<HTMLInputElement>) {
    setWord(event.target.value);
  };
  useEffect(
    function () {
      if (word === "") return;
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then((data) => {
          return data.json();
        })
        .then((word) => {
          if (word.title) {
            setStatus("not found");
          } else {
            setStatus("found");
          }
          setFoundWord(word[0].word);
          setPhonetics(word[0].phonetic);
          const defs: definition[] = word[0].meanings[0].definitions.map(
            (def: definition) => def?.definition
          );
          setMeaning(defs);
          setSynonyms(word[0].meanings[0].synonyms);
          setVerb({
            definition: word[0].meanings[1].definitions[0].definition,
            example: word[0].meanings[1].definitions[0].example,
            source: word[0].sourceUrls,
          });
        })
        .catch(() => {
          console.log("Something went wrong, Failed to Fetch Data");
        });
    },
    [searchWord, status]
  );

  function handleClick() {
    setStatus("loading");
    setSearchWord(word);
  }
  return (
    <>
      <div className="md:px-tablet sm:px-4 lg:px-laptop">
        <div className="pr-8 rounded-3xl bg-almost-white dark:bg-semi-light-black mx-4 sm:mx-0 flex justify-between ">
          <input
            type="text"
            className="bg-almost-white outline-none focus:bg-almost-white rounded-3xl p-4 h-full w-full dark:bg-semi-light-black placeholder:pl-4 placeholder:text-base placeholder:font-semibold placeholder:text-primary-black dark:placeholder:text-almost-white dark:focus:bg-semi-light dark:text-almost-white md:placeholder:text-xl"
            placeholder="Search..."
            name="word"
            id="word"
            onChange={handleChange}
          />
          <button className="ml-6">
            <img src={searIcon} alt="search-icon" onClick={handleClick} />
          </button>
        </div>
        {status === "loading" && <Loading />}

        {status === "found" && <Found word={foundWord} phonetics={phonetcis} />}
        {status === "found" && <Br word="Noun" />}
        {status === "found" && (
          <List meaning={meaning} synonyms={synonyms} verb={verb} />
        )}
        {status === "not found" && <NotFound />}
      </div>
    </>
  );
};
