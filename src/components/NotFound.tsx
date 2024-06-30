export const NotFound = () => {
  return (
    <>
      <div className="p-8 dark:text-white">
        <p className="text-center text-6xl mt-8">😕</p>
        <h1 className="text-center font-bold my-8">No Definitions Found</h1>
        <h1 className="text-center font-medium">
          Sorry pal, we couldn't find definitions for the word you were looking
          for. You can try the search again at later time or head to the web
          instead.
        </h1>
      </div>
    </>
  );
};
