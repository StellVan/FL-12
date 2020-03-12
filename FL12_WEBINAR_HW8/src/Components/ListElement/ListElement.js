import React from 'react';
import './ListElement.css';

class ListElement extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.state = {
      active: false
    };
  }

  toggleDropdown() {
    this.setState(prev => ({ active: !prev.active }));
  }

  render() {
    let { date, name, subjects, time, id } = this.props.object;
    let { deleteElement } = this.props;
    let { active } = this.state;

    return (
      <li className="ListElement" id={id}>
        <div className="ListElement-wrapper">
          <p className="date">{date}</p>
          <p className="name">{name}</p>
          <p className="subjects">{subjects}</p>
          <p className="time">{time}</p>

          <button
            onClick={() => {
              this.toggleDropdown();
            }}
            className="dropdownBtn"
          >
            ...
          </button>
          <div className={active ? 'dropdown' : 'dropdown hidden'}>
            <button
              onClick={() => {
                console.log();
              }}
              className="editBtn"
            >
              Edit
            </button>
            <button
              onClick={e => {
                deleteElement(e);
              }}
              className="deleteBtn"
            >
              Delete
            </button>
          </div>
        </div>
      </li>
    );
  }
}
export default ListElement;
