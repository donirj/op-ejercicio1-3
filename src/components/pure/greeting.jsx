import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {

  // props es info que va a recibir
  // info que se pasa por atributos
  constructor(props){
    super(props)
    // this.state es info privada del componente, sirve para gestionarse o mostrar el contenido
    this.state = {
      age: 29
    }
  }

  render() {
    return (
      <div>
        <h1>
          hola {this.props.name}
        </h1>
        <h2>
          {/* tu edad es de {this.state.age} */}
          tu edad es de {this.state.age}
        </h2>
        <div>
          {/* <button onClick={this.birthdayMore}> */}
          <button onClick={this.birthdayMore}>
            subir años
          </button>
        </div>
      </div>
    );
  }

  birthdayMore = () => {
    console.log('CLICK')
    console.log(this.state.age)

    this.setState({
      age:
      this.state.age + 1
    })
    this.myAge++;
  }

}


Greeting.propTypes = {
  name: PropTypes.string,
};


export default Greeting;
