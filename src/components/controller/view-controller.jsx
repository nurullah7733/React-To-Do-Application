import React from "react";
import PropTypes from "prop-types";
import { Input, Label } from "reactstrap";

const ViewController = ({ view, changeView }) => {
  return (
    <div>
      <Label htmlFor="list" className="me-3">
        <Input
          type="radio"
          id="list"
          value="list"
          name="view"
          onChange={changeView}
          checked={view === "list"}
        />{" "}
        List-View
      </Label>{" "}
      <Label htmlFor="table">
        <Input
          type="radio"
          id="table"
          value="table"
          name="view"
          onChange={changeView}
          checked={view === "table"}
        />{" "}
        Table-View
      </Label>
    </div>
  );
};

ViewController.propTypes = {
  view: PropTypes.string.isRequired,
  changeView: PropTypes.func.isRequired,
};

export default ViewController;
