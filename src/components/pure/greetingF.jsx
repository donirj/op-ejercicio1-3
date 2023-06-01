import React, {useState} from 'react'
import PropTypes from 'prop-types'


const GreetingF = (props) => {

    // intro a useState
    // const [variable, metodo para actualizar] = useState(valor inicial)
    const [age, setAge] = useState(29)

    const birthdayMore = () => {
        // actualizar el state
        setAge(age + 1)
    }

    const birthdayLess = () => {
        // actualizar el state
        setAge(age - 1)
    }

  return (
    <div>
        <h1>
        hola {props.name} desde componente funcional
        </h1>
        <h2>
            tu edad es de: {age}
        </h2>
        <div>
            <button onClick={birthdayMore}>
                cumplir años
            </button>
        </div>
        <div>
            <button onClick={birthdayLess}>
                quitar años
            </button>
        </div>

    </div>
  )
}

GreetingF.propTypes = {
    name: PropTypes.string
}

export default GreetingF