import React from 'react';
import PropTypes from 'prop-types';
import { FaFistRaised } from 'react-icons/fa';
import { MdSearch, MdClear } from 'react-icons/md';

import './omnibox.css';

function Omnibox({ defaultInput, onClear, onSearch }) {
  const [input, setInput] = React.useState(defaultInput);

  const handleChange = (e) => setInput(e.target.value);

  const handleSubmit = (e) => {
    onSearch(input);
    e.preventDefault();
  };

  const handleClear = () => {
    onClear();
    setInput('');
  };

  const handleLogoClick = () => {
    window.open(
      'https://github.com/police-brutality-2020/visualizer',
      'police-brutality-2020',
    );
  };

  return (
    <div className="omnibox">
      <form onSubmit={handleSubmit}>
        <FaFistRaised className="icon logo" onClick={handleLogoClick} />
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
  defaultInput: PropTypes.string,
  onClear: PropTypes.func,
  onSearch: PropTypes.func,
};

Omnibox.defaultProps = {
  defaultInput: '',
  onClear: () => {},
  onSearch: () => {},
};

export default Omnibox;
