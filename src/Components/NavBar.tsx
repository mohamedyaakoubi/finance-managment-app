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
            <div className="nav-links">
                <Link className="nav-link" to="/">Home</Link>
                {isAuth && <Link className="nav-link" to="/dashboard">Dashboard</Link>}
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
            </div>
            <div className="nav-actions">
                {isAuth ? (
                    <button onClick={handleLogout}>Log Out</button>
                ) : (
                    <>
                        <Link className="nav-action" to="/login">Log In</Link>
                        <Link className="nav-action" to="/signup">Sign Up</Link>
                    </>
                )}
            </div>
        </nav>
    );
};
