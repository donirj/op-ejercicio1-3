
import PropTypes from 'prop-types';
import { useState } from 'react';

const GreetingF = (props) => {

    // useState
    const [age, setAge] = useState(29)

    const birthday = () => {
        // actualizamos el state
        setAge(age + 1)
    }

    return (
        <div>
            <h1>
                ¡HOLA! {props.name} desde el componente que funciona
            </h1>
            <h2>
                tu edad es de: {age}
            </h2>
            <div>
                <button onClick={birthday} >
                    cumplir años
                </button>
            </div>
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string
};


export default GreetingF;
