import '../Styles/SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../config/firbase';
import { useEffect, useState } from 'react';

interface UserForm {
    name: string;
    email: string;
    pass: string;
}

export const SignUp = () => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState<string>('');

    // Redirect if user is already authenticated
    useEffect(() => {
        const authUserString = localStorage.getItem('auth');
        if (authUserString !== null) {
            navigate('/dashboard');
        }
    }, [navigate]);

    const userScheme = yup.object().shape({
        name: yup.string().required('Name is required'),
        email: yup.string().email('Invalid email format').required('Email is required'),
        pass: yup.string().min(6, 'Password must be at least 6 characters long').required('Password is required'),
    });

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<UserForm>({
        resolver: yupResolver(userScheme),
    });

    const submitData = async (data: UserForm) => {
        try {
            const userCredentials = await createUserWithEmailAndPassword(auth, data.email, data.pass);
            if (auth.currentUser) {
                await updateProfile(auth.currentUser, { displayName: data.name });
                const authUser = {
                    email: data.email,
                    name: data.name,
                    isAuth: true,
                };
                localStorage.setItem('auth', JSON.stringify(authUser));
                navigate('/dashboard');
            }
        } catch (err: any) {
            console.error('Error signing up:', err.message);
            setErrorMessage(err.message);
        }
    };

    return (
        <div className="signup-container">
            <form onSubmit={handleSubmit(submitData)} className="signup-form">
                <input type="text" placeholder="Full name" {...register('name')} />
                {errors.name && <p className="error-message">{errors.name.message}</p>}
                <input type="text" placeholder="Email" {...register('email')} />
                {errors.email && <p className="error-message">{errors.email.message}</p>}
                <input type="password" placeholder="Password" {...register('pass')} />
                {errors.pass && <p className="error-message">{errors.pass.message}</p>}
                <input type="submit" value="Sign Up" />
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
            <Link to="/login" className="signin-link">Already have an account?</Link>
        </div>
    );
};
