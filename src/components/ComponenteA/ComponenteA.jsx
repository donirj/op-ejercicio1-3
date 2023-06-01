import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ComponenteB from '../ComponenteB/ComponenteB'

class ComponenteA extends Component {
    constructor(props) {
        super(props)
        
        // estado inicial del componente
        this.state ={
            nombre: 'doni',
            apellido: 'jacks',
            email: 'andoniresendiz@gmail.com',
        }
    }

    render() {
        const { nombre, apellido, email } = this.state;
        return (
            <div>
                <h2>Información del usuario</h2>
                <p>Nombre: {nombre}</p>
                <p>Apellido: {apellido}</p>
                <p>Email: {email}</p>
                <ComponenteB conectado={true}/>
            </div>
        )
    }
}

ComponenteA.propTypes = {
    nombre: PropTypes.string,
    apellido: PropTypes.string,
    email: PropTypes.string
}

export default ComponenteA