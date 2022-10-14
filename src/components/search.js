import { BiSearch } from 'react-icons/bi';
import './CSS/style.css';

const Search = (props) => {
  const args = props;
  const { handleChange, value } = args;

  return (
    <div>
      <input
        className="search-bar"
        value={value}
        name="Search"
        id="searchbar"
        onChange={handleChange}
        placeholder="Search By Country Name ..."
      />
      <BiSearch className="search-icon" />
    </div>
  );
};
export default Search;
