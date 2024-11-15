import React from 'react'
import logo from '../assets/logo.png'

const IntroContainer = () => {
	return (
		<>
			<section className='flex h-12'>
				<img src={logo} className='w-12 h-12'></img>
				<h1 className='text-4xl  font-semibold ml-4'>Travalizer</h1>
			</section>
			<section className='w-[422px] mt-9 text-start text-2xl font-semibold '>
				<h1>Artificial Intelligence giving you</h1>
				<h1>travel recommendations</h1>
			</section>
			<section className='text-start mt-2.5 h-4 text-base'>
				<p>Welcome Back, Please login to your account</p>
			</section>	
		</>
	)
}

export default IntroContainer
