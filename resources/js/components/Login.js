import axios from 'axios';
import FormData from 'form-data';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function submit(e) {
        e.preventDefault();

        const data = new FormData();
        
        data.append("email", email)
        data.append("password", password)

        axios.post('/login', data).then((response) => {
            if (response.data === "Ok") {
                window.location = '/'
            } else {
                window.location = '/login';
            }
        })
    }


    return (
        <div className='mt-3'>
            <a href='/' className='text-blue-700'>Back to home</a>
            <img src="/imgs/logo.svg" alt="CarTrade" className='w-32'/>
            <form onSubmit={(e) => submit(e)}>
                <input type="email" placeholder='Email' required onChange={(e) => setEmail(e.currentTarget.value)}/>
                <br />
                <br />
                <input type="password" placeholder='Password' required onChange={(e) => setPassword(e.currentTarget.value)}/>
                <br />
                <a href="/password/reset">Reset password</a>
                <br />
                <br />
                <button type='submit' className='hover:bg-blue-600 hover:border-blue-600 mr-3 border-2 border-blue-700 rounded-sm px-12 py-2 text-white bg-blue-700 uppercase'>Log in</button>
            </form>
        </div>
    );
}

export default Login;

if (document.getElementById('login')) {
    ReactDOM.render(<Login />, document.getElementById('login'));
}
