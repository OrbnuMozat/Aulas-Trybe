import React from 'react';
import {
  arrayOf,
} from 'prop-types';
import PokeCard from './PokeCard';

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div className="pokeCardSection">
        { pokemons.map((pokemon) => (<PokeCard
          key={ pokemon.id }
          pokemon={ pokemon }
        />))}
      </div>
    );
  }
}

Pokedex.propTypes = {
  pokemons: arrayOf(pokemonType).isRequired,
};

export default Pokedex;
