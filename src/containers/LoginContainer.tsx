import React, { useState } from 'react'
import InputField from '../components/InputField'
import ButtonFieId from '../components/ButtonFieId'

interface formDataProps {
	email : string;
	password : string;
}

const LoginContainer = () => {

	const [formData, setFormData] = useState<formDataProps>({
		email : '',
		password : ''
	});

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

	const onSubmit = (event : React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	}
	return (
		<section className=' h-80 w-[422px] mt-7'>
		<form onSubmit={onSubmit}>
			<InputField  type="email" name='email' value={formData.email} label="Email" placeholder="Email" onChange={onChange}/>
			<InputField  type="password" name='password' value={formData.password} label="Password"placeholder="Password" onChange={onChange} />
			<div className='flex mt-6 justify-between'>
				<div>
					<input type='checkbox' className='accent-[#029664] size-4 inline-block align-middle'/>
					<label className='ml-2 align-middle'>Remember me</label>
				</div>
				<div>
					<a href='' className='underline underline-offset-4'>Forget password?</a>
				</div>
			</div>
			<div className='flex mt-6 w-full justify-between'>
					<ButtonFieId type={'submit'} style={'outline-none bg-[#029664] text-white'} name={'Login'}/>
					<ButtonFieId type={'button'} style={'outline-[#029664] text-[#029664] outline-1'} name={'Sign Up'}/>
			</div>
		</form>
	</section>
	)
}

export default LoginContainer
