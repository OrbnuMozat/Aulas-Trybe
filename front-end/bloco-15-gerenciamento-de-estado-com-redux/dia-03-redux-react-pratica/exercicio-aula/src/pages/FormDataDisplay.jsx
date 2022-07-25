import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FormDataDisplay extends Component {
  render() {
    // Recupere as informações do seu estado criado no Redux
    const {
      personalData: { name, email, cpf, address, city, uf },
      professionalData: { curriculum, job, description },
    } = this.props;
    return (
      <div>
        <h2>Dados enviados</h2>
        <div>
          Nome:
          { name }
        </div>
        <div>
          Email:
          { email }
        </div>
        <div>
          CPF:
          { cpf }
        </div>
        <div>
          Endereço:
          { address }
        </div>
        <div>
          Cidade:
          { city }
        </div>
        <div>
          Estado:
          { uf }
        </div>
        <div>
          Currículo:
          { curriculum }
        </div>
        <div>
          Cargo:
          { job }
        </div>
        <div>
          Descrição do cargo:
          { description }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  personalData: store.personalReducer.personalData,
  professionalData: store.professionalReducer.professionalData,
});

FormDataDisplay.propTypes = {
  personalData: PropTypes.objectOf(String).isRequired,
  professionalData: PropTypes.objectOf(String).isRequired,
};
export default connect(mapStateToProps)(FormDataDisplay);
