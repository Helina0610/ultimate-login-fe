import React from 'react'

interface ButtonFieIdProps {
	type: "button" | "submit" | "reset"; // 수정된 타입
	style : string;
	name : string;
}

const ButtonFieId = ({type, style, name} : ButtonFieIdProps) => {
	return (
		<div>
			<button type={type} className={`outline w-[199px] h-12 rounded-lg font-semibold ${style}`}>{name}</button>
		</div>
	)
}

export default ButtonFieId
