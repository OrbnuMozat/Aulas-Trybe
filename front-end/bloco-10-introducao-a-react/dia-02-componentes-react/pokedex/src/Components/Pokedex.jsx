import React from "react";
import pokemons from "../data";
import PokeCard from "./PokeCard";

class Pokedex extends React.Component {
    render() {
        const pokeDataCard = pokemons.map((pokemon) => {
            const { id, name, type, averageWeight: { value, measurementUnit }, image, moreInfo } = pokemon;
            return <PokeCard
            key={ id }
            name={ name }
            type={ type }
            averageWeigth={ `${value}${measurementUnit}`}
            image={ image }
            moreInfo={ moreInfo } />
        })
        return (
            <div className="pokeCardSection">{ pokeDataCard }</div>
        )
    }
}

export default Pokedex;