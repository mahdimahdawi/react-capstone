import Search from './search';
import Case from './case';

const CaseComponent = (props) => {
  const num = props;
  const { cases, handleChange, value } = num;
  return (
    <div className="list-page">
      <h1 className="page-heading">COVID-19 CASES</h1>
      <Search handleChange={handleChange} value={value} />
      <ul className="card">
        {
          cases.map((c) => {
            const { id } = c;
            return <Case key={`key-${id}`} country={c} id={id} />;
          })
        }
      </ul>
    </div>
  );
};

export default CaseComponent;
