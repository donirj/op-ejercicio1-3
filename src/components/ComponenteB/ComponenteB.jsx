
import PropTypes from 'prop-types';

const ComponenteB = (props) => {

    

    return (
        <div>
            <h5>
                Connectado: {props.connected ? 'CONNECTED' : 'DISCONNECTED'} 
            </h5>
        </div>
    );
};


ComponenteB.propTypes = {
    connected: PropTypes.bool
};


export default ComponenteB;
