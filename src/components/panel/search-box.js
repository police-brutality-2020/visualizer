import React from 'react';
import PropTypes from 'prop-types';
import { MdSearch } from 'react-icons/md';

import './search-box.css';

function SearchBox({ onSearch }) {
  const [input, setInput] = React.useState('');

  const handleChange = (e) => setInput(e.target.value);

  const handleSubmit = (e) => {
    onSearch(input);
    e.preventDefault();
  };

  return (
    <div className="search-box">
      <form onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          value={input}
          placeholder="Search Police Brutality"
          onChange={handleChange}
        />
        <MdSearch className="search-icon" />
      </form>
    </div>
  );
}

SearchBox.propTypes = {
  onSearch: PropTypes.func,
};

SearchBox.defaultProps = {
  onSearch: () => {},
};

export default SearchBox;
