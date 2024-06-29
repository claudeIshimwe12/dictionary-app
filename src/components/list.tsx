type LIstProps = {
  meaning: {
    definition: string;
  }[];
};
const List = (props: LIstProps) => {
  return (
    <>
      <div className=" p-8 ">
        {props.meaning.map((def, index) => (
          <div key={index} className="flex pt-0  items-baseline mb-4">
            <div
              className="h-[5px] w-[5px] rounded-full bg-primary-blue pr-1 mr-4
            "
            ></div>{" "}
            <h1 className="dark:text-almost-white">{def}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
