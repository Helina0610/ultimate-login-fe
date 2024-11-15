import React from 'react'

interface InputFieidProps {
	label  :string;
	type  :string;
	placeholder :string;
}

const InputField = ({label, type, placeholder } : InputFieidProps) => {
	return (
		<div className='text-start'>
			<label className='text-base font-semibold '>{label}</label>
			<div className='mt-2 mb-6 h-12 w-full rounded-lg outline outline-2 outline-[#bcd8c3]'>
					<input type={type} className='ml-4 mt-3 w-[390px] outline-none' placeholder={placeholder}/>
				</div>
		</div>
	)
}

export default InputField
