import { useState } from "react";
import PropTypes from "prop-types";
const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value); // Pass the search term to the parent component
  };

  return (
    <div className="relative mx-auto text-gray-600">
      <input
        className="h-10 px-5 pr-16 text-sm bg-white border-2 border-gray-300 rounded-lg focus:outline-none"
        type="search"
        name="search"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearch}
      />
      <button type="submit" className="absolute top-0 right-0 mt-3 mr-4">
        <svg
          className="w-4 h-4 text-gray-600 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 56.966 56.966">
          <path d="M55.146 51.774l-12.75-12.75c3.528-4.439 3.328-10.941-.467-14.736-4.104-4.104-10.758-4.104-14.862 0-4.104 4.104-4.104 10.758 0 14.862 3.794 3.794 10.297 3.994 14.736.467l12.75 12.75c.37.371.963.388 1.328.035.392-.392.402-1.025.035-1.392zM22.5 35.966c-7.456 0-13.5-6.044-13.5-13.5s6.044-13.5 13.5-13.5 13.5 6.044 13.5 13.5-6.044 13.5-13.5 13.5z" />
        </svg>
      </button>
    </div>
  );
};

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
    };

export default SearchBar;
