type LIstProps = {
  meaning: {
    definition: string;
  }[];
};
const List = (props: LIstProps) => {
  return (
    <>
      <ul className="list-outside p-8 list-disc marker:bg-green">
        {props.meaning.map((def, index) => (
          <li key={index}> {def}</li>
        ))}
      </ul>
    </>
  );
};

export default List;
