import React from 'react';
import PropTypes from 'prop-types';

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
          type="text"
          placeholder="Search Police Brutality"
          value={input}
          onChange={handleChange}
        />
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
