import React from 'react';
import PropTypes from 'prop-types';
import './search.css';

const Search = ({ getvalue, onChange }) => (
  <form>
    <input
      className="search"
      type="search"
      placeholder="Search for Any African country..."
      name=""
      id=""
      value={getvalue}
      onChange={onChange}
    />
  </form>
);

Search.propTypes = {
  getvalue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Search;
