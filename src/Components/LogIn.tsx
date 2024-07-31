import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { auth } from '../config/firbase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { fetchExpenses } from '../services/api';

interface LoginData {
    email: string;
    pass: string;
}

export const LogIn = () => {
    const navigate = useNavigate();
    const [fireError, setFireError] = useState<string>('');

    // Schema validation
    const loginSchema = yup.object().shape({
        email: yup.string().email().required(),
        pass: yup.string().min(6).required(),
    });

    const { handleSubmit, register, formState: { errors } } = useForm<LoginData>({
        resolver: yupResolver(loginSchema),
    });

    // Redirect if user is already authenticated
    useEffect(() => {
        const authUserString = localStorage.getItem('auth');
        if (authUserString) {
            navigate('/dashboard');
        }
    }, [navigate]);

    const submitLogin = async (data: LoginData) => {
        try {
            const userInfo = await signInWithEmailAndPassword(auth, data.email, data.pass);
            const userAuth = {
                name: userInfo.user.displayName || '',
                email: userInfo.user.email || '',
                isAuth: true,
            };
            localStorage.setItem('auth', JSON.stringify(userAuth));
            
            // Fetch expenses after login
            const { expensesList, totalBalance } = await fetchExpenses(userAuth.email);
            
            // Store expenses and balance in localStorage or state if needed
            localStorage.setItem('expenses', JSON.stringify(expensesList));
            localStorage.setItem('totalBalance', totalBalance.toString());

            navigate('/dashboard');
        } catch (err) {
            const error = err as Error;
            setFireError(error.message);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(submitLogin)}>
                <input type="text" placeholder="Email" {...register('email')} />
                <p>{errors.email?.message}</p>
                <input type="password" placeholder="Password" {...register('pass')} />
                <p>{errors.pass?.message}</p>
                <input type="submit" value="Log In" />
                <p>{fireError}</p>
            </form>
            <Link to="/signup">Don't have an account?</Link>
        </div>
    );
};
