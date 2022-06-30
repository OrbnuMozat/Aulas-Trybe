import React from 'react';
import { pokemonType } from '../types';

class PokeCard extends React.Component {
  render() {
    const { pokemon } = this.props;
    const {
      name,
      type,
      averageWeight: { value, measurementUnit },
      image,
      moreInfo,
    } = pokemon;
    return (
      <div className="pokeCard">
        <section className="pokeData">
          <p>{ name }</p>
          <p>{ type }</p>
          <p>
            Average Weigth:
            {' '}
            {`${value}${measurementUnit}`}
          </p>
          <a href={ moreInfo }>More Info</a>
        </section>
        <img className="image" src={ image } alt="Pokemon" />
      </div>
    );
  }
}

PokeCard.propTypes = {
  pokemon: pokemonType.isRequired,
};

export default PokeCard;
