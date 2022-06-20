import React from "react";
import logo from '../logo.svg';

class Apresentation extends React.Component {
    render () {
        return (
            <>
                <h1>Bruno Diniz Tomaz</h1>
                <p>Sou estudante de desenvolvimento web e estou muito animado {String.fromCodePoint(0x1F600)} com React <img src={logo} width={'35px'} alt="logo" /></p>
            </>
        )
    }
}

export default Apresentation;