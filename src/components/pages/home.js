import { useSelector } from "react-redux";
import { useState } from "react";
import CaseComponent from "../caseComponent";

const HomePage = () => {
  const { all } = useSelector((state) => state.cases);
  const [state] = useState({
    value: "",
    filteredCases: [],
  });
  return (
    <>
      {
        state.filteredCases.length > 0 ? (
          <CaseComponent
            cases={state.filteredCases}
            value={state.value}
          />
        ) : (
          <CaseComponent
            cases={all}
            value={state.value}
          />
        )
      }
    </>
  );

};

export default HomePage;
