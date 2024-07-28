import { Link, useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../config/firbase';
import { useEffect } from 'react';

interface userForm {
	name: string;
	email: string;
	pass: string;
}

export const SignUp = () => {
	useEffect(() => {
		const authUserString = localStorage.getItem('auth');
		if (authUserString !== null) {
			navigate('/home');
		}
	}, []);

	const userScheme = yup.object().shape({
		name: yup.string().required(),
		email: yup.string().email().required(),
		pass: yup
			.string()
			.min(6, 'password must be at least 6 charachters long')
			.required(),
	});

	const navigate = useNavigate();
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<userForm>({
		resolver: yupResolver(userScheme),
	});

	const SubmitData = (data: userForm) => {
		createUserWithEmailAndPassword(auth, data.email, data.pass)
			.then((userCredentials) => {
				if (auth.currentUser !== null) {
					updateProfile(auth.currentUser, { displayName: data.name }).then(
						() => {
							const authUser = {
								email: data.email,
								name: data.name,
								isAuth: true,
							};
							localStorage.setItem('auth', JSON.stringify(authUser));
							navigate('/home');
						}
					);
				}
			})
			.catch((err) => {
				console.log(err.message);
			});
			navigate('/Dashboard');
	};

	return (
		<div>
			<form onSubmit={handleSubmit(SubmitData)} className="myForm">
				<input type="text" placeholder="full name" {...register('name')} />
				<p>{errors.name?.message}</p>
				<input type="text" placeholder="email" {...register('email')} />
				<p>{errors.email?.message}</p>
				<input type="password" placeholder="password" {...register('pass')} />
				<p>{errors.pass?.message}</p>
				<input type="submit" />
			</form>
			<Link to="/LogIn">Already have an account ?</Link>
		</div>
	);
};
