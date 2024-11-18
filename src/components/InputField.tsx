import React from 'react'
import ShowYnButton from './ShowYnButton';


interface InputFieidProps {
	label  :string;
	type  :string;
	placeholder :string;
	name : string;
	value : string;
	onChange : (event : React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({label, type, placeholder, onChange ,name , value } : InputFieidProps) => {
	return (
		<div className='text-start'>
			<label className='text-base font-semibold '>{label}</label>
			<div className='flex mt-2 mb-6 h-12 w-full rounded-lg outline outline-2 outline-[#bcd8c3]'>
					<input type={type} name={name} value={value} className='ml-4 w-[390px] outline-none' placeholder={placeholder} onChange={event => onChange(event)}/>
					{type === 'password' && 
						<ShowYnButton/>
					}
			</div>
		</div>
	)
}

export default InputField
