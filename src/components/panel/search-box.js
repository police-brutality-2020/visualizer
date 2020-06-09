import React from 'react';
import PropTypes from 'prop-types';
import { MdSearch, MdClear } from 'react-icons/md';

import './search-box.css';

function SearchBox({ onClear, onSearch }) {
  const [input, setInput] = React.useState('');

  const handleChange = (e) => setInput(e.target.value);

  const handleSubmit = (e) => {
    onSearch(input);
    e.preventDefault();
  };

  const handleClear = () => {
    onClear();
    setInput('');
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
        <MdSearch className="search-icon divider" onClick={handleSubmit} />
        <div className="search-divider" />
        <MdClear className="search-icon" onClick={handleClear} />
      </form>
    </div>
  );
}

SearchBox.propTypes = {
  onClear: PropTypes.func,
  onSearch: PropTypes.func,
};

SearchBox.defaultProps = {
  onClear: () => {},
  onSearch: () => {},
};

export default SearchBox;
