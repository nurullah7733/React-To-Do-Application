import React from "react";
import PropTypes from "prop-types";
import { Button, Form, FormGroup, Input } from "reactstrap";

class CreateTodoForm extends React.Component {
  state = {
    text: "",
    description: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createTodo(this.state);
    e.target.reset();
    this.setState({ text: "", description: "" });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Input
              placeholder="Do something"
              name="text"
              value={this.state.text}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="textarea"
              placeholder="Please write a short description"
              rows={4}
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button color="primary" type="submit">
            Create Task
          </Button>
        </Form>
      </div>
    );
  }
}

CreateTodoForm.propTypes = {
  createTodo: PropTypes.func.isRequired,
};

export default CreateTodoForm;
