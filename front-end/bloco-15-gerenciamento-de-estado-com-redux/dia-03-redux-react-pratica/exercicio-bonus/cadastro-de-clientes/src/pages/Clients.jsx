import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Clients extends React.Component {
  handlerClick = () => {
    const { history } = this.props;
    history.push('/registration');
  }

  render() {
    const { loginData: { email } } = this.props;

    return (
      <div>
        { !email
          ? <p>Login não efetuado</p>
          : (
            <>
              <h1>Cadastro de Clientes</h1>
              <section>
                <p>Nenhum cliente cadastrado</p>
                <button
                  type="button"
                  onClick={ this.handlerClick }
                >
                  Cadastrar
                </button>
              </section>
            </>
          )}
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  loginData: store.loginReducer,
});

Clients.propTypes = {
  loginData: PropTypes.objectOf(String),
}.isRequired;

export default connect(mapStateToProps)(Clients);
