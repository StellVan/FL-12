import React from 'react';
import { Link } from 'react-router-dom';
import { deleteElement, editElement } from '../../Redux/actions/actions';
import { connect } from 'react-redux';
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
            <Link to={`/edit/${id}`}>
              <button
                id={id}
                onClick={e => {
                  editElement(e.target.id);
                }}
                className="editBtn"
              >
                Edit
              </button>
            </Link>
            <button
              id={id}
              onClick={e => {
                deleteElement(e.target.id);
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

function mapStateToProps() {
  return {};
}

const mapDispatchToProps = dispatch => ({
  deleteElement: id => dispatch(deleteElement(id)),
  editElement: data => dispatch(editElement(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListElement);
