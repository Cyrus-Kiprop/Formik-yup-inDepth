import React, { Component } from 'react';

// this is a mock up class component that i will use to
// learn render props plus formik procedure class

// this class is used to abstract the common functionality accross components especially those with forms
class MiniFormik extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.initialValues);
    this.state = {
      values: this.props.initialValues || {},
      touched: {},
      errors: {},
    }; // initializing the state without a constructor
  }

  // abstracted methods and common fuctionality
  handleChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    event.persist();
    this.setState(prevState => ({
      values: {
        ...prevState.values,
        [name]: value,
      },
    }));
  };

  handleBlur = event => {
    const target = event.target;

    const name = target.name;
    event.persist();
    this.setState(prevState => ({
      touched: {
        ...prevState.touched,
        [name]: true,
      },
    }));
  };

  handleSubmit = event => {
    event.preventDefauult();
    // validate //check for errors
    this.props.onSubmit(this.state.values);
  };

  render() {
    return this.props.children({
      ...this.state,
      handleChange: this.handleChange,
      handleBlur: this.handleBlur,
      handleSubmit: this.handleSubmit,
    });
  }
}

// The form component to utilise miniformik
class Reservation extends Component {
  render() {
    return (
      <MiniFormik
        initialValues={{
          isGoing: true,
          numberOfGuests: 2,
        }}
        onSubmit={values => alert(JSON.stringify(values, null, 2))}
      >
        {props => {
          const {
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            handleBlur,
          } = this.props;
          return (
            <form onSubmit={handleSubmit}>
              <input
                name="isGoing"
                type="checkbox"
                checked={values.isGoing}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <label>Is going:</label>
              <br />
              <label>
                Number of guests:
                <input
                  name="numberOfGuests"
                  type="number"
                  value={values.numberOfGuests}
                  onChange={handleChange}
                />
              </label>
              <pre>{JSON.stringify(props, null, 2)}</pre>
            </form>
          );
        }}
      </MiniFormik>
    );
  }
}
export default Reservation;
