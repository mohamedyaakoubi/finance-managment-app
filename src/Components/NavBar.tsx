import '../Styles/NavBar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const NavBar = () => {
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        const authUserString = localStorage.getItem('auth');
        if (authUserString) {
            setIsAuth(true);
        } else {
            setIsAuth(false);
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('auth');
        setIsAuth(false);
        navigate('/login');
    };

    return (
        <nav>
            <Link to="/">Home</Link>
            {isAuth ? (
                <>
                    <Link to="/dashboard">Dashboard</Link>
                    <button onClick={handleLogout}>Log Out</button>
                </>
            ) : (
                <>
                    <Link to="/login">Log In</Link>
                    <Link to="/signup">Sign Up</Link>
                </>
            )}
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
};
