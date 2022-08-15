import React from 'react';
import PropTypes from 'prop-types';

class Home extends React.Component {
  handlerClick = () => {
    const { history } = this.props;
    history.push('/login');
  }

  render() {
    return (
      <div>
        <h1>Cadastro de Clientes</h1>
        <p>Bem vindos, faça o login para prosseguir</p>
        <button
          type="button"
          onClick={ this.handlerClick }
        >
          Login
        </button>
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.func,
}.isRequired;

export default Home;
