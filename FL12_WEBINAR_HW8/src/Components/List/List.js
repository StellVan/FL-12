import React from 'react';
import './List.css';
import { Link } from 'react-router-dom';
import ListElement from '../ListElement/ListElement';

class List extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.deleteElement = this.deleteElement.bind(this);
    this.state = {
      array: props.array,
      input: ''
    };
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  filterHandle(input) {
    return function(x) {
      return x.name.toLowerCase().includes(input.toLowerCase());
    };
  }

  deleteElement(e) {
    let id = +e.target.id;
    console.log(id);
    this.setState(prev => ({
      array: prev.array.filter(el => el.id !== id)
    }));
  }

  editElement() {}

  render() {
    let { array, input } = this.state;

    return (
      <div className="List">
        <div className="search-wrapper">
          <input
            className="search-input"
            placeholder="&#128269; Search"
            onChange={e => this.handleChange(e)}
          ></input>
          <Link className="search-addButton" to="/edit">
            Add course
          </Link>
        </div>
        <ul className="list-wrapper">
          {array.filter(this.filterHandle(input)).map(el => (
            <ListElement
              object={el}
              deleteElement={this.deleteElement}
              key={el.id}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
