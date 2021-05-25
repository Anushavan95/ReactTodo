import React from 'react';

class SearchPanel extends React.Component {
  state = {
    text: '',
  };
  changeList = (event) => {
    this.setState({
      text: event.target.value,
    });
  };
  onSubmitList = (ev) => {
    ev.preventDefault();
    if (this.state.text !== '') {
      this.props.additemList(this.state.text);
    } else {
      alert('empty');
    }
    this.setState({
      text: '',
    });
  };
  render() {
    const {placeholder} = this.props;
    return (
      <form onSubmit={this.onSubmitList}>
        <input
          type="text"
          placeholder={placeholder}
          onChange={this.changeList}
          value={this.state.text}
        />
        <button>addList</button>
      </form>
    );
  }
}

export default SearchPanel;
