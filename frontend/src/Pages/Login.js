import React, { useState } from 'react'
// import axios from 'axios'
import "../App.css"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginUser = async (event) => {
        event.preventDefault()

        // const body = {
        //     email: email,
        //     password: password
        // }

        // const response = await axios.post('http://localhost:5000/login', body)
        // const data = await response.data

        const response = await fetch('http://localhost:5000/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()

        if (data.user) {
            localStorage.setItem('token', data.user)
            alert('Login successful')
            window.location.href = '/welcome'
        } else {
            alert('Wrong User credentials')
        }
    }

    return (
        <div className="Login">
            <h1>Login</h1>
            <form onSubmit={loginUser}>
                <input 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                />
                <br />
                <input 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login
