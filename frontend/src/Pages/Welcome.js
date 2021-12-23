import React, { useState, useEffect } from 'react'
import jwt from 'jsonwebtoken'
import { useHistory } from 'react-router-dom'
import '../App.css'

const Welcome = () => {
	const history = useHistory()
	const [user, setUser] = useState('User')

	useEffect(() => {
		const token = localStorage.getItem('token')
		if (token) {
			const authUser = jwt.decode(token)
			if (!authUser) {
				localStorage.removeItem('token')
				history.replace('/login')
			} else {
				setUser(authUser)
			}
		}
	}, [])

	const logoutUser = () => {
		alert('Logged Out')
		localStorage.removeItem('token')
		history.replace('/login')
	}

	return (
		<div>
			<h1>Welcome inside </h1>
			<h3>{user.name}</h3>
			<input type="submit" value="Logout" onClick={logoutUser} />
		</div>
	)
}

export default Welcome
