import React from 'react';
import './List.css';
import { Link } from 'react-router-dom';
import ListElement from '../ListElement/ListElement';
import { connect } from 'react-redux';

class List extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      input: ''
    };
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  filterHandle(input) {
    return function(x) {
      return x.title.toLowerCase().includes(input.toLowerCase());
    };
  }

  render() {
    let { input } = this.state;
    let { list } = this.props;

    return (
      <div className="List">
        <div className="search-wrapper">
          <input
            className="search-input"
            placeholder="&#128269; Search"
            onChange={e => this.handleChange(e)}
          ></input>
          <Link className="search-addButton" to="/add">
            Add course
          </Link>
        </div>
        <ul className="list-wrapper">
          {list.filter(this.filterHandle(input)).map(el => (
            <ListElement object={el} key={el.id} />
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    list: store
  };
}

export default connect(mapStateToProps)(List);
