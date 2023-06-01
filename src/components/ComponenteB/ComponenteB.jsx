import React, { Component } from 'react'
import PropTypes from 'prop-types';

class ComponenteB extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
                <p>Conectado: {this.props.conectado ? 'Contacto en línea' : 'Contacto No Disponible'}</p>
            </div>
        )
    }
}


ComponenteB.propTypes = {
    
};


export default ComponenteB;
