import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <nav>
            <h2>The mealIBd</h2>
            <Link to='/'>Home</Link>    
            <Link to='/user'>User</Link>                
            <Link to='/about'>About</Link>                
        </nav>
    );
};

export default Header;