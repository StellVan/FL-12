import React from 'react';
import './Submit.css';

class Submit extends React.Component {
  constructor(props) {
    super(props);

    this.getInputValues = this.getInputValues.bind(this);
    this.state = {
      title: '',
      description: '',
      duration: '',
      date: ''
    };
  }

  getInputValues(ev) {
    let value = ev.target.value;
    console.log(value);
    this.setState({
      ...this.state,
      [ev.target.name]: value
    });
  }

  render() {
    return (
      <div className="Submit">
        <p className="submit-header">New course</p>
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
              <input type="text" className="authorsInput"></input>
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
            <button
              type="submit"
              className="submit-save"
              onClick={() => {
                this.props.addNewElement(this.state);
              }}
            >
              Save
            </button>
            <button className="submit-cancel">Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Submit;
