import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import loginAction from '../redux/Actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      isDisabled: true,
    };
  }

  handlerButtonClick = () => {
    const { history, userLogin } = this.props;
    userLogin(this.state);
    history.push('/clients');
  }

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    }, () => this.buttonValidation());
  }

  buttonValidation = () => {
    const { email, password } = this.state;
    if (email && password) {
      this.setState({
        isDisabled: false,
      });
    } else {
      this.setState({
        isDisabled: true,
      });
    }
  }

  render() {
    const { email, password, isDisabled } = this.state;
    return (
      <div>
        <label htmlFor="email">
          Email:
          {' '}
          <input
            type="email"
            name="email"
            id="email"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          Senha:
          {' '}
          <input
            type="password"
            name="password"
            id="password"
            value={ password }
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          disabled={ isDisabled }
          onClick={ this.handlerButtonClick }
        >
          Login
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userLogin: (login) => { dispatch(loginAction(login)); },
});

Login.propTypes = {
  history: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
