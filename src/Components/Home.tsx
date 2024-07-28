import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>
                Welcome to financial management app.
            </h1>

            <button onClick={() => navigate('/login')}>Login</button>
            <div>Don't have an account?</div>
            <button onClick={() => navigate('/signup')}>Signup</button>
        </div>
    );
};
