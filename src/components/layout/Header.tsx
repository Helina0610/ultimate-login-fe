import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<header className='flex justify-between'>
			<Link to={'/'} className='text-2xl'>HOME</Link>
			<Link to={'/'} className='text-2xl'>Sign in/Sign up</Link>
		</header >
	)
}

export default Header
