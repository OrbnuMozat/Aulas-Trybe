import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import { professionalAction } from '../redux/actions';

class ProfessionalForm extends Component {
  constructor() {
    super();
    this.state = {
      curriculum: '',
      job: '',
      description: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick = () => {
    const { setData, history } = this.props;
    setData(this.state);
    history.push('/formdisplay');
  }

  render() {
    const { curriculum, job, description } = this.state;
    return (
      <fieldset>
        <TextArea
          label="Resumo do currículo: "
          value={ curriculum }
          name="curriculum"
          maxLength="1000"
          onChange={ this.handleChange }
          required
        />
        <Input
          label="Cargo:"
          name="job"
          type="text"
          value={ job }
          onChange={ this.handleChange }
          required
        />
        <TextArea
          label="Descrição do cargo: "
          name="description"
          maxLength="500"
          onChange={ this.handleChange }
          value={ description }
          required
        />
        <Button
          label="enviar"
          onClick={ this.handleClick }
        />
      </fieldset>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setData: (data) => dispatch(professionalAction(data)),
});

ProfessionalForm.propTypes = {
  setData: PropTypes.func.isRequired,
  history: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ProfessionalForm);
