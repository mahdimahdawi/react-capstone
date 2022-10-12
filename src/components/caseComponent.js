import Case from "./case";

const CaseComponent = (props) => {
  const num = props;
  const { cases } = num;
  return (
    <div className="list-page">
      <h1 className="page-heading">COVID-19 CASES</h1>
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

