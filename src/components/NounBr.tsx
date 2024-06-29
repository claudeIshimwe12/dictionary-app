type Br = {
  word: string;
};
export const Br = (props: Br) => {
  return (
    <>
      <div className="flex items-center px-4">
        <h1 className="text-lg mr-4 dark:text-almost-white">{props.word}</h1>
        <div className="h-1 w-full mt-1 dark:bg-semi-black  bg-almost-white"></div>
      </div>
    </>
  );
};
