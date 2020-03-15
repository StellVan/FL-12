import React from 'react';
import './Submit.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addNew, editElement } from '../../Redux/actions/actions';
import { formatDateReverse } from '../../Utilities/formatDate';

class Submit extends React.Component {
  constructor(props) {
    super(props);

    this.getInputValues = this.getInputValues.bind(this);
    this.validateValues = this.validateValues.bind(this);
    this.setEditValues = this.setEditValues.bind(this);

    this.state = {
      object: {
        title: '',
        description: '',
        duration: '',
        date: '',
        authors: '',
        id: '',
        index: ''
      },
      validated: false
    };
  }

  componentDidMount() {
    if (this.props.header === 'Edit course') {
      this.setEditValues();
    }
    return null;
  }

  setEditValues() {
    let id = window.location.hash.split('#')[1];
    let object = this.props.list.find(el => el.id === id);
    let { title, description, duration, date } = object;

    this.setState({
      object: {
        title: title,
        description: description,
        duration: duration,
        date: formatDateReverse(date),
        id: id,
        index: this.props.list.indexOf(object)
      }
    });
  }

  getInputValues(ev) {
    let value = ev.target.value;
    let name = [ev.target.name];
    this.setState(
      prev => ({
        object: {
          ...prev.object,
          [name]: value
        }
      }),
      () => {
        this.validateValues();
      }
    );
  }

  validateValues() {
    let { title, description, duration, date, authors } = this.state.object;
    if ((title, description, duration, date, authors)) {
      if (
        title.length > 0 &&
        description.length > 0 &&
        duration.length > 0 &&
        date.length > 0 &&
        authors.length > 0
      ) {
        this.setState({
          validated: true
        });
      } else {
        this.setState({
          validated: false
        });
      }
    }
  }

  render() {
    let { object, validated } = this.state;
    let { title, description, duration, date, authors } = object;
    let { header } = this.props;

    return (
      <div className="Submit">
        <p className="submit-header">{header}</p>
        <div className="submit-wrapper">
          <div className="inputsWrapper">
            <div className="titleInputWrapper">
              <p className="input-text">
                Title<sup>*</sup>
              </p>
              <input
                onChange={this.getInputValues}
                name="title"
                type="text"
                className="titleInput"
                value={title || ''}
              ></input>
            </div>

            <div className="descriptionInputWrapper">
              <p className="input-text">
                Description<sup>*</sup>
              </p>
              <textarea
                onChange={this.getInputValues}
                name="description"
                className="descriptionInput"
                value={description || ''}
              ></textarea>
            </div>

            <div className="durationInputWrapper">
              <p className="input-text">
                Duration<sup>*</sup>
              </p>
              <input
                onChange={this.getInputValues}
                name="duration"
                type="text"
                className="durationInput"
                value={duration || ''}
              ></input>
            </div>

            <div className="authorsInputWrapper">
              <p className="input-text">
                Authors<sup>*</sup>
              </p>
              <input
                type="text"
                onChange={this.getInputValues}
                name="authors"
                className="authorsInput"
                value={authors || ''}
              ></input>
            </div>

            <div className="dateInputWrapper">
              <p className="input-text">
                Date<sup>*</sup>
              </p>
              <input
                onChange={this.getInputValues}
                name="date"
                placeholder=""
                type="date"
                className="dateInput"
                value={date || ''}
              ></input>
            </div>
          </div>

          <div className="submit-buttonsWrapper">
            {validated ? (
              <Link to="/" className="submit-saveWrapper">
                <button
                  type="submit"
                  className="submit-save"
                  onClick={() => {
                    if (header === 'Edit course') {
                      this.props.editElement(object);
                    } else if (header === 'New course') {
                      this.props.addNew(object);
                    }
                  }}
                >
                  Save
                </button>
              </Link>
            ) : (
              <div className="submit-save-disabled">Save</div>
            )}

            <Link to="/" className="submit-cancel">
              Cancel
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    list: store
  };
}
const mapDispatchToProps = dispatch => ({
  addNew: newElement => dispatch(addNew(newElement)),
  editElement: newElement => dispatch(editElement(newElement))
});

export default connect(mapStateToProps, mapDispatchToProps)(Submit);
