import  { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {


// propiedades que puede recibir un componente como atributos/ se pueden pasar como atributos
    constructor(props){
        super(props);
        // información privada del componente para mostrar contenido
        this.state = {
            age: 29
        }
    }

    render() {
        return (
            <div>
                <h1>
                    ¡HOLA! tu nombre es: {this.props.name}
                </h1>
                <h2>
                    tu edad es de: {this.state.age}
                </h2>
                <button onClick={this.birthday} >
                    cumplir años
                </button>
            </div>
        );
    }

    birthday = () => {
        
        this.setState((prevState) => (
            {
                age: prevState. age +1
            }
        ))
        
    }
}


Greeting.propTypes = {
    name: PropTypes.string
};


export default Greeting;
