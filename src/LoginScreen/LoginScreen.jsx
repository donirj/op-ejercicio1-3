import {useState} from 'react';

const LoginScreen = () => {

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleInput = (e) => {
        e.preventDefault()
        console.log('CLICKS')
        console.log(values)
    }

    return (
        <div>
            <div>Login</div>
            <hr />

            <form>
                <input 
                    value={values.email}
                    type='email' 
                    className='form-control' 
                    placeholder='Email'
                    name='email'
                    onChange={handleInput}
                />
                <input 
                    value={values.password}
                    type='password' 
                    className='form-control' 
                    placeholder='Contraseña'
                    name='password'
                    onChange={handleInput}
                />
                
            </form>
        </div>
    );
}

export default LoginScreen;
