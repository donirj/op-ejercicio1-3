
import PropTypes from 'prop-types';
import ComponenteB from '../ComponenteB/ComponenteB';
import { Data } from '../../models/data.class'

const ComponenteA = ({data}) => {


    return (
        <div>
            <h1>ComponenteA</h1>
            <h2>
                Nombre: {data.name}
            </h2>
            <h3>
                Apellido: {data.lastname}
            </h3>
            <h4>
                email: {data.email}
            </h4>
            <ComponenteB connected={true}></ComponenteB>

        </div>
    );
}

ComponenteA.propTypes = {
    data: PropTypes.instanceOf(Data)
};


export default ComponenteA;