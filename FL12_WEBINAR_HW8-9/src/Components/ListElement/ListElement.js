import React from 'react';
import { Link } from 'react-router-dom';
import { deleteElement } from '../../Redux/actions/actions';
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
    let { date, title, description, duration, id } = this.props.object;
    let { deleteElement } = this.props;
    let { active } = this.state;

    return (
      <li className="ListElement" id={id}>
        <div className="ListElement-wrapper">
          <p className="date">{date}</p>
          <p className="name">{title}</p>
          <p className="subjects">{description}</p>
          <p className="time">{duration}</p>

          <button
            onClick={() => {
              this.toggleDropdown();
            }}
            className="dropdownBtn"
          >
            ...
          </button>
          <div className={active ? 'dropdown' : 'dropdown hidden'}>
            <Link to={`/edit#${id}`}>
              <button id={id} className="editBtn">
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
  deleteElement: id => dispatch(deleteElement(id))
  // editElement: data => dispatch(editElement(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListElement);
