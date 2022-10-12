import Case from "./case";

const CaseComponent = (props) => {
  const num = props;
  const { cases, value } = num;
  return (
    <div>
      <ul className="card">
        {
          cases.map((c, i) => {
            const { id } = c;
            return <Case key={`key-${id}`} country={c} id={id} i={i + 1} />;
          })
        }
      </ul>
    </div>
  );
};

export default CaseComponent;

