import searIcon from "../assets/images/icon-search.svg";
const Input = () => {
  return (
    <div className="p-4 rounded-3xl bg-almost-white dark:bg-semi-light-black mx-4 flex justify-between">
      <input
        type="text"
        className="bg-almost-white dark:bg-semi-light-black placeholder:pl-4 placeholder:text-base placeholder:font-semibold placeholder:text-primary-black dark:placeholder:text-white"
        placeholder="Keyboard"
        name="word"
        id="word"
      />
      <button>
        <img src={searIcon} alt="search-icon" />
      </button>
    </div>
  );
};

export default Input;
