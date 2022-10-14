import { useSelector } from 'react-redux';
import { useState } from 'react';
import CaseComponent from '../caseComponent';
import { searchImplementation } from '../../redux/cases';

const HomePage = () => {
  const { all } = useSelector((state) => state.cases);
  const [state, setState] = useState({
    value: '',
    filteredCases: [],
  });
  const handleChange = (e) => {
    const input = e.target.value;
    const searchInput = input.charAt(0).toUpperCase() + input.slice(1);
    setState({
      value: e.target.value,
      filteredCases: [...searchImplementation(all, searchInput)],
    });
  };
  return (
    <>
      {
        state.filteredCases.length > 0 ? (
          <CaseComponent
            cases={state.filteredCases}
            value={state.value}
            handleChange={handleChange}
          />
        ) : (
          <CaseComponent
            cases={all}
            value={state.value}
            handleChange={handleChange}
          />
        )
      }
    </>
  );
};

export default HomePage;
