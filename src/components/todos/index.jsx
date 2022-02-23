import React from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import Controller from "../controller";
import CreateTodoForm from "../createTodoForm";
import ListView from "../listView";
import TableView from "../tableView";

class Todo extends React.Component {
  state = {
    todos: [
      {
        id: "1",
        text: "Meeting with PR deparment.",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        time: new Date(),
        isSelect: false,
        isComplete: false,
      },
      {
        id: "2",
        text: "My Supper extra mention",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        time: new Date(),
        isSelect: false,
        isComplete: false,
      },
      {
        id: "3",
        text: "Friends workout list.",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        time: new Date(),
        isSelect: false,
        isComplete: false,
      },
    ],
    searchTerm: "",
    isOpenForm: false,
    view: "list",
    filterSearch: "all",
  };

  toggleSelect = (todoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((t) => t.id === todoId);
    todo.isSelect = !todo.isSelect;

    this.setState(todos);
  };
  toggleComplete = (todoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((t) => t.id === todoId);
    todo.isComplete = !todo.isComplete;

    this.setState({ todos });
  };

  handleSearch = (term) => {
    this.setState({ searchTerm: term });
  };
  performSearch = () => {
    return this.state.todos.filter((todo) =>
      todo.text.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
  };
  handleFilter = (filterSearch) => {
    this.setState({ filterSearch });
  };
  performFilter = (todos) => {
    const { filterSearch } = this.state;
    if (filterSearch === "completed") {
      return todos.filter((todo) => todo.isComplete);
    } else if (filterSearch === "running") {
      return todos.filter((todo) => !todo.isComplete);
    } else {
      return todos;
    }
  };
  toggleForm = () => {
    this.setState({
      isOpenForm: !this.state.isOpenForm,
    });
  };
  createTodo = (todo) => {
    todo.id = Math.random();
    todo.time = new Date();
    todo.isSelect = false;
    todo.isComplete = false;

    const todos = [todo, ...this.state.todos];
    // * * const todos = [todo, ...this.state.todos];
    this.setState({ todos });
    this.toggleForm();
  };

  changeView = (e) => {
    this.setState({
      view: e.target.value,
    });
  };
  getView = () => {
    let todos = this.performSearch();
    todos = this.performFilter(todos);
    return this.state.view === "list" ? (
      <ListView
        todos={todos}
        toggleSelect={this.toggleSelect}
        toggleComplete={this.toggleComplete}
      />
    ) : (
      <TableView
        todos={todos}
        toggleSelect={this.toggleSelect}
        toggleComplete={this.toggleComplete}
      />
    );
  };

  clearSelect = () => {
    const todos = this.state.todos.filter((todo) => !todo.isSelect);
    this.setState({ todos });
  };
  clearComplete = () => {
    const todos = this.state.todos.filter((todo) => !todo.isComplete);
    this.setState({ todos });
  };
  reset = () => {
    this.setState({
      searchTerm: "",
      isOpenForm: false,
      view: "list",
      filterSearch: "all",
    });
  };

  render() {
    return (
      <div>
        <Controller
          term={this.state.searchTerm}
          activeFilterColor={this.state.filterSearch}
          handleSearch={this.handleSearch}
          toggleForm={this.toggleForm}
          handleFilter={this.handleFilter}
          changeView={this.changeView}
          clearSelect={this.clearSelect}
          clearComplete={this.clearComplete}
          reset={this.reset}
          view={this.state.view}
        />
        <div>{this.getView()}</div>

        <div>
          <Modal
            isOpen={this.state.isOpenForm}
            toggle={this.toggleForm}
            animation="false"
          >
            <ModalHeader toggle={this.toggleForm}>
              Create a new Todo
            </ModalHeader>
            <ModalBody>
              <CreateTodoForm createTodo={this.createTodo} />
            </ModalBody>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Todo;
