import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { registrationAction } from '../redux/Actions';

class Registration extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      age: '',
      email: '',
    };
  }

  handlerChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  handlerClick = () => {
    const { registration } = this.props;
    registration(this.state);
  }

  render() {
    const { name, email, age } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="name">
            Name:
            {' '}
            <input
              type="text"
              value={ name }
              name="name"
              id="name"
              onChange={ this.handlerChange }
            />
          </label>
          <label htmlFor="age">
            Idade:
            {' '}
            <input
              type="number"
              value={ age }
              name="age"
              id="age"
              onChange={ this.handlerChange }
            />
          </label>
          <label htmlFor="email">
            Email:
            {' '}
            <input
              type="email"
              value={ email }
              name="email"
              id="email"
              onChange={ this.handlerChange }
            />
          </label>
          <button
            type="button"
            onClick={ this.handlerClick }
          >
            Incluir
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  registration: (data) => { dispatch(registrationAction(data)); },
});

Registration.propTypes = {
  registration: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Registration);
