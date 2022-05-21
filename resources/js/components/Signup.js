import axios from 'axios';
import FormData from 'form-data';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Signup() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

    async function submit(e) {
        e.preventDefault()

        const data = new FormData()

        data.append("name", name)
        data.append("email", email)
        data.append("password", password)
        data.append("passwordConfirmation", passwordConfirmation)

        if (password == passwordConfirmation) {
            axios.post('/signup', data).then(() => {
                window.location = '/'
            })
        } else {
            window.location.reload()
        }

    }

    return (
        <div className='mt-3'>
            <a href='/' className='text-blue-700'>Back to home</a>
            <img src="/imgs/logo.svg" alt="CarTrade" className='w-32'/>
            <form onSubmit={(e) => submit(e)}>
                <input type="text" placeholder='Name' required className='mt-3' onChange={(e) => setName(e.currentTarget.value)}/>
                <br />
                <br />
                <input type="email" placeholder='Email' required onChange={(e) => setEmail(e.currentTarget.value)}/>
                <br />
                <br />
                <input type="password" placeholder='Password' required onChange={(e) => setPassword(e.currentTarget.value)}/>
                <br />
                <br />
                <input type="password" placeholder='Retype password' required onChange={(e) => setPasswordConfirmation(e.currentTarget.value)} />
                <br />
                <br />
                <button type='submit' className='hover:bg-blue-600 hover:border-blue-600 mr-3 border-2 border-blue-700 rounded-sm px-12 py-2 text-white bg-blue-700 uppercase'>Sign Up</button>
            </form>
        </div>
    );
}

export default Signup;

if (document.getElementById('signup')) {
    ReactDOM.render(<Signup />, document.getElementById('signup'));
}
