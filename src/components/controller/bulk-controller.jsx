import React from "react";
import PropTypes from "prop-types";
import { ButtonGroup, Button } from "reactstrap";

const BulkController = ({ clearSelect, clearComplete, reset }) => {
  return (
    <div>
      <ButtonGroup>
        <Button color="danger" onClick={clearSelect}>
          Clear Selected
        </Button>
        <Button color="danger" onClick={clearComplete}>
          Clear Completed
        </Button>
        <Button color="danger" onClick={reset}>
          Reset
        </Button>
      </ButtonGroup>
    </div>
  );
};

BulkController.propTypes = {
  clearSelect: PropTypes.func.isRequired,
  clearComplete: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default BulkController;
