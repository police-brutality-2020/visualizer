import React from 'react';
import PropTypes from 'prop-types';
import { MdSearch, MdClear } from 'react-icons/md';

import './omnibox.css';

function Omnibox({ onClear, onSearch }) {
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
    <div className="omnibox">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          placeholder="Search Police Brutality"
          onChange={handleChange}
        />
        <MdSearch className="icon" onClick={handleSubmit} />
        <div className="divider" />
        <MdClear className="icon" onClick={handleClear} />
      </form>
    </div>
  );
}

Omnibox.propTypes = {
  onClear: PropTypes.func,
  onSearch: PropTypes.func,
};

Omnibox.defaultProps = {
  onClear: () => {},
  onSearch: () => {},
};

export default Omnibox;
