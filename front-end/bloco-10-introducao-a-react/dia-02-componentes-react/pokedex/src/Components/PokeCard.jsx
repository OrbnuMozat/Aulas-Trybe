import React from "react";

class PokeCard extends React.Component {
    render() {
        const { name, type, averageWeigth, image, moreInfo} = this.props;
        return (
            <div className="pokeCard">
                <section className="pokeData">
                    <p>{ name }</p>
                    <p>{ type }</p>
                    <p>Average Weigth: { averageWeigth }</p>
                    <a href={ moreInfo }>More Info</a>
                </section>
                <img className="image" src={ image } alt="Pokemon" />
            </div>
        )
    }
}

export default PokeCard;