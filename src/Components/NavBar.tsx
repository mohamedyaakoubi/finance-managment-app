import '../Styles/NavBar.css';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    console.log('NavBar component is rendering');
    return (
        <nav>
            
                
                    <Link to="/">Home</Link>
                
                
                    <Link to="/about">About</Link>
                
                
                    <Link to="/contact">Contact</Link>
                
                
                    
                
                
                    
                
            
        </nav>
    );
};
