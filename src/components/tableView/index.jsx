import React from "react";
import propTypes from "prop-types";
import { Button, Input, Table } from "reactstrap";

const RowItem = ({ todo, toggleSelect, toggleComplete }) => {
  return (
    <tr>
      <td>
        <Input
          type="checkbox"
          id={todo.id}
          checked={todo.isSelect}
          onChange={() => toggleSelect(todo.id)}
        />
      </td>
      <td>{todo.time.toDateString()}</td>
      <td>{todo.text}</td>
      <td>
        <Button
          color={todo.isComplete ? "danger" : "success"}
          onClick={() => toggleComplete(todo.id)}
        >
          {todo.isComplete ? "Complete" : "Running"}
        </Button>
      </td>
    </tr>
  );
};

RowItem.propTypes = {
  todo: propTypes.object.isRequired,
  toggleSelect: propTypes.func.isRequired,
  toggleComplete: propTypes.func.isRequired,
};

const TableView = ({ todos, toggleSelect, toggleComplete }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Time</th>
          <th>Todo</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <RowItem
            key={todo.id}
            todo={todo}
            toggleSelect={toggleSelect}
            toggleComplete={toggleComplete}
          />
        ))}
      </tbody>
    </Table>
  );
};

TableView.propTypes = {
  todos: propTypes.array.isRequired,
  toggleSelect: propTypes.func.isRequired,
  toggleComplete: propTypes.func.isRequired,
};

export default TableView;
