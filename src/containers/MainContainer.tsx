import React from 'react'
import IntroContainer from '../containers/IntroContainer'
import LoginContainer from '../containers/LoginContainer'
import SnsLoginContainer from '../containers/SnsLoginContainer'
const MainContainer = () => {
	return (
		<div className='w-[522px] bg-white rounded-l-3xl'>
		<div className="mt-8 ml-14">
			<IntroContainer/>
			<LoginContainer/>
			<SnsLoginContainer/>
		</div>
	</div>
	)
}

export default MainContainer
