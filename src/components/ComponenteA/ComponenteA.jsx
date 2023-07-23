import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ComponenteB from '../ComponenteB/ComponenteB';
import { Data } from '../../models/data.class'
import white from '../../../assets/white.png'
import red from '../../../assets/red.png'


const ComponenteA = ({data}) => {

    const [corazon, setCorazon] = useState(false);

    const handleCorazonClick = () => {
        console.log('click')
      setCorazon(!corazon);
    };

    return (
        <div>
            {/* <h1>ComponenteA</h1>
            <h2>
                Nombre: {data.name}
            </h2>
            <h3>
                Apellido: {data.lastname}
            </h3>
            <h4>
                email: {data.email}
            </h4>
            <ComponenteB connected={true}></ComponenteB> */}

            <button onClick={handleCorazonClick}>
                    <img src={corazon ? red : white} alt="Corazon" />
            </button>

        </div>
    );
}

ComponenteA.propTypes = {
    data: PropTypes.instanceOf(Data)
};


export default ComponenteA;