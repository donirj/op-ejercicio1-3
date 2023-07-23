import React, { useState } from 'react';

const Ejemplo1 = () => {
    
    // valor inicial para un contador
    const valorInicial = 0;

    // valor inicial para una persona
    const personaInicial = {
        nombre: 'Martin',
        email: 'martin@mail.com'
    }

    /**
     * queremos que el valor inicial y personainicial 
     * sean parte del estado del componente, para así 
     * poder gestionar su cambio
     * y que este se vea reflejado en la lista
     * del componente
     * 
     * const [nombreVariable, functionParaCambiar] = useState(valorInicial)
     */
        const [contador, setContador] = useState(valorInicial)
        const [persona, setPersona] = useState(personaInicial)

        function incrementarContador() {
            setContador(contador + 1)
            console.log('CLICK')
        }

    return (
        <div>
            <p>Contador: {contador}</p>
            <button onClick={incrementarContador}>aumentar</button>
        </div>
    );
}

export default Ejemplo1;
