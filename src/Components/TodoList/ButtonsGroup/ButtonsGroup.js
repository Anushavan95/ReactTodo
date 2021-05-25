import React from 'react';
class ButtonsGroup extends React.Component {
  render() {
    const {listItemTodo, onDelete} = this.props;

    return (
      <div>
        <button onClick={listItemTodo}>Importanat</button>
        <button onClick={onDelete}>delete</button>
      </div>
    );
  }
}

export default ButtonsGroup;
