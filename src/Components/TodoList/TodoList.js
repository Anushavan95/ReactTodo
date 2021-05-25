import React from 'react';
import ButtonsGroup from './ButtonsGroup/ButtonsGroup';

class TodoList extends React.Component {
  state = {
    done: false,
  };

  listItemTodo = () => {
    this.setState({
      done: !this.state.done,
    });
  };

  render() {
    const {importanat, name, onDelete, index} = this.props;

    const {done} = this.state;
    console.log(importanat);

    return (
      <li className={`list-item ${done ? 'newclass' : ''}`}>
        {name}
        <ButtonsGroup
          listItemTodo={this.listItemTodo}
          onDelete={() => onDelete(index)}
        />
      </li>
    );
  }
}
export default TodoList;
