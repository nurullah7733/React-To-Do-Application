import React from "react";
import PropTypes from "prop-types";
import Search from "./searchPanel";
import { Col, Row } from "reactstrap";

import FilterController from "./filter-controller";
import ViewController from "./view-controller";
import BulkController from "./bulk-controller";

const Controller = ({
  term,
  handleSearch,
  toggleForm,
  handleFilter,
  changeView,
  view,
  clearSelect,
  clearComplete,
  reset,
  activeFilterColor,
}) => {
  return (
    <div>
      <Search term={term} handleSearch={handleSearch} toggleForm={toggleForm} />
      <Row className="my-4">
        <Col className="col-md-4">
          <FilterController
            handleFilter={handleFilter}
            activeFilterColor={activeFilterColor}
          />
        </Col>
        <Col className="col-md-4">
          <div>
            <ViewController view={view} changeView={changeView} />
          </div>
        </Col>
        <Col className="col-md-4 d-flex">
          <div className="ms-auto">
            <BulkController
              clearSelect={clearSelect}
              clearComplete={clearComplete}
              reset={reset}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

Controller.propTypes = {
  term: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  toggleForm: PropTypes.func.isRequired,
  handleFilter: PropTypes.func.isRequired,
  changeView: PropTypes.func.isRequired,
  clearSelect: PropTypes.func.isRequired,
  clearComplete: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  activeFilterColor: PropTypes.string.isRequired,
};

export default Controller;
