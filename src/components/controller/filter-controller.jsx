import React from "react";
import PropTypes from "prop-types";
import { ButtonGroup, Button } from "reactstrap";

const FilterController = ({ handleFilter, activeFilterColor }) => {
  return (
    <div>
      {console.log(activeFilterColor)}
      <ButtonGroup>
        <Button
          color={activeFilterColor === "all" ? "dark" : "primary"}
          onClick={() => handleFilter("all")}
        >
          All
        </Button>
        <Button
          color={activeFilterColor === "running" ? "dark" : "primary"}
          onClick={() => handleFilter("running")}
        >
          Running
        </Button>
        <Button
          color={activeFilterColor === "completed" ? "dark" : "primary"}
          onClick={() => handleFilter("completed")}
        >
          Completed
        </Button>
      </ButtonGroup>
    </div>
  );
};

FilterController.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default FilterController;
