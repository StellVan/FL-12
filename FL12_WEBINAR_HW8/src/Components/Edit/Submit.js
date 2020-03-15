import React from 'react';
import './Submit.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addNew } from '../../Redux/actions/actions';

class Submit extends React.Component {
  constructor(props) {
    super(props);

    this.getInputValues = this.getInputValues.bind(this);
    this.validateValues = this.validateValues.bind(this);

    this.state = {
      object: {
        title: '',
        description: '',
        duration: '',
        date: '',
        authors: ''
      },
      validated: false
    };
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

  render() {
    let { object, validated } = this.state;
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
                    this.props.addNew(object);
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
  addNew: newElement => dispatch(addNew(newElement))
});

export default connect(mapStateToProps, mapDispatchToProps)(Submit);
