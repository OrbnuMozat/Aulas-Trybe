import React from "react";
import contextCreator from "./contextCreator";

class Creator extends React.Component {
  constructor() {
    super();

    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    }
  }

  handelMoveCar = (car, bool) => {
    this.setState(prevState => {
      return{
        cars: {
          ...prevState.cars,
          [car]: bool,
        }
      }
    })
  }

  render() {
    const { Provider } = contextCreator;
    const { children } = this.props;
    return (
      <Provider value={ {
        ...this.state,
        moveCar: this.handelMoveCar, 
        } }>
        { children }
      </Provider>
    )
  }
};

export default Creator;