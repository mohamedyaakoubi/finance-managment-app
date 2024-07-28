import { useNavigate, Link } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { auth } from '../config/firbase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState, useEffect } from 'react';

interface loginData {
	email: string;
	pass: string;
}

export const LogIn = () => {
	useEffect(() => {
		const authUserString = localStorage.getItem('auth');
		if (authUserString !== null) {
			navigate('/home');
		}
	}, []);

	const navigate = useNavigate();
	const [fireError, setFireError] = useState('');

	const loginSchema = yup.object().shape({
		email: yup.string().email().required(),
		pass: yup.string().min(6).required(),
	});

	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<loginData>({ resolver: yupResolver(loginSchema) });

	const submitLogin = (data: loginData) => {
		signInWithEmailAndPassword(auth, data.email, data.pass)
			.then((userInfo) => {
				const userAuth = {
					name: userInfo.user.displayName,
					email: userInfo.user.email,
					isAuth: true,
				};
				localStorage.setItem('auth', JSON.stringify(userAuth));
				navigate('/home');
			})
			.catch((err) => {
				setFireError(err.message);
			});
	};

	return (
		<div>
			<form onSubmit={handleSubmit(submitLogin)}>
				<input type="text" placeholder="email" {...register('email')} />
				<p>{errors.email?.message}</p>
				<input type="password" placeholder="password" {...register('pass')} />
				<p>{errors.pass?.message}</p>
				<input type="submit" />
				<p>{fireError}</p>
			</form>
			<Link to="/sign-up">Dont have an account ?</Link>
		</div>
	);
};
