import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { countryInfo } from "../redux/cases";
import ProgressBar from 'react-customizable-progressbar';

import { MdOutlineReadMore } from "react-icons/md";

const Case = (props) => {
  const prop = props;
  const { country } = prop;
  const { abbreviation, id, life_expectancy } = country;
  const dispatch = useDispatch();
  const handleClick = (e) => {
    dispatch(countryInfo(e.target.id));
  };
  return (
    <li className="country-card">
      <Link to={{pathname: `/country/${id}`, state: {} }} >
        <button className="more-btn" type="button" onClick={handleClick} id={id} >
          <MdOutlineReadMore className="more-info" />          
        </button>
      </Link>
      <div>
        <div className="m-top">
          <p className="m-top">{abbreviation}</p>
          <span className="m-top">{id}</span>
        </div>
        <p>
          Life Expectancy: {' '} {life_expectancy}
        </p>
        <ProgressBar
          radius={30}
          progress={life_expectancy}
          strokeWidth={10}
          strokeColor="#379cf6"
          trackStrokeColor="white"
          strokeLinecap="round"
          trackStrokeWidth={10}
          className="progress-bar"
        />
      </div>
    </li>
  );
};

export default Case;