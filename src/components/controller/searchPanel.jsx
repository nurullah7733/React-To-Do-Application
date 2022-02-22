import React from "react";
import PropTypes from "prop-types";
import { Button, Input } from "reactstrap";

const Search = ({ term, handleSearch, toggleForm }) => {
  return (
    <div className="d-flex">
      <Input
        className="me-2"
        placeholder="Search"
        value={term}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <Button color="success" onClick={toggleForm}>
        New
      </Button>
    </div>
  );
};

Search.propTypes = {
  term: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  toggleForm: PropTypes.func.isRequired,
};

export default Search;
