import searIcon from "../assets/images/icon-search.svg";
import { Br } from "./NounBr";
import { NotFound } from "./NotFound";
import { Found } from "./found";
import { Loading } from "./loading";
import { ChangeEvent, useEffect, useState } from "react";
import List from "./list";

type Definition = {
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
  const [meaning, setMeaning] = useState<Definition[]>([]);
  const [phonetcis, setPhonetics] = useState<string>("");
  const [foundWord, setFoundWord] = useState("");
  const [status, setStatus] = useState("");
  const [synonyms, setSynonyms] = useState([]);
  const [verb, setVerb] = useState<Verb>({
    definition: "",
    example: "",
    source: [],
  });
  const [audioUrl, setAudioUrl] = useState("");
  const [triggerError, setTrigger] = useState(false);
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
          const defs: Definition[] = word[0].meanings[0].definitions.map(
            (def: Definition) => def
          );
          setMeaning(defs);
          setSynonyms(word[0].meanings[0].synonyms);
          setVerb({
            definition: word[0].meanings[1].definitions[0].definition,
            example: word[0].meanings[1].definitions[0].example,
            source: word[0].sourceUrls,
          });
          setAudioUrl(word[0].phonetics[2].audio);
        })
        .catch(() => {
          console.log("Something went wrong, Failed to Fetch Data");
          setAudioUrl(
            "https://api.dictionaryapi.dev/media/pronunciation/en/null-us.mp3"
          );
        });
    },
    [searchWord, status, audioUrl, triggerError]
  );

  function handleClick() {
    if (word == "") {
      setTrigger(true);
    } else {
      setStatus("loading");
      setTrigger(false);
      setSearchWord(word.trim());
    }
  }
  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key == "Enter") {
      word == "" ? setTrigger(true) : setTrigger(false);
      setSearchWord(word.trim());
    }
  }
  return (
    <>
      <div className="md:px-tablet sm:px-4 lg:px-laptop">
        <div className="relative">
          <input
            type="text"
            className="bg-almost-white text-primary-black font-bold outline-none focus:bg-almost-white  rounded-xl p-4 h-full w-full dark:bg-semi-light-black placeholder:pl-4 placeholder:text-dark-grey placeholder:font-medium  dark:placeholder:text-almost-white dark:focus:bg-semi-light dark:text-almost-white md:placeholder:text-xl focus:border focus:border-primary-blue "
            placeholder="Search for any word..."
            name="word"
            id="word"
            onChange={handleChange}
            onKeyDown={handleKeyPress}
          />
          <button className="absolute right-6 top-4">
            <img src={searIcon} alt="search-icon" onClick={handleClick} />
          </button>
        </div>
        <h1
          className={`text-primary-red p-1 text-sm ${
            triggerError ? "" : "hidden"
          }`}
        >
          Wooops!, can't be empty...
        </h1>
        {status === "loading" && <Loading />}

        {status === "found" && (
          <Found word={foundWord} phonetics={phonetcis} audio={audioUrl} />
        )}
        {status === "found" && <Br word="Noun" />}
        {status === "found" && (
          <List meaning={meaning} synonyms={synonyms} verb={verb} />
        )}
        {status === "not found" && <NotFound />}
      </div>
    </>
  );
};
