import React from 'react';
import './App.css';
import SearchPanel from './Components/SearchPanel/SearchPanel';
import TodoList from './Components/TodoList/TodoList';
import Logo from './images/react.png';

class App extends React.Component {
  maxId = 3;
  state = {
    list: [
      {
        name: 'Drink Cofeee',
        id: 0,
        importanat: false,
      },
      {
        name: 'Learn React',
        id: 1,
        importanat: false,
      },
      {
        name: 'Watch TV',
        id: 2,
        importanat: true,
      },
    ],
    title: 'React Course',
  };

  onDelete = (index) => {
    this.setState(({list}) => {
      const todoListItem = [...list];
      todoListItem.splice(index, 1);
      return {
        list: todoListItem,
      };
    });
  };

  additemList = (text) => {
    const newItemList = {
      name: text,
      importanat: false,
      id: this.maxId++,
    };
    this.setState(({list}) => {
      const newListTodo = [...list, newItemList];
      return {
        list: newListTodo,
      };
    });

    console.log('hello');
  };

  render() {
    const {title, list} = this.state;
    console.log(list);
    return (
      <div className="App">
        <h1>{title}</h1>
        <img src={Logo} alt="logo" className="logo" />
        <SearchPanel placeholder={'Todo item'} additemList={this.additemList} />
        <ul>
          {list.map((item, index) => {
            return (
              <TodoList {...item} index={index} onDelete={this.onDelete} />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
