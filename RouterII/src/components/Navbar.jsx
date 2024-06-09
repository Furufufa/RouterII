import { NavLink } from "react-router-dom";
import { Navbar } from 'react-bootstrap';
import logo from '../assets/img/OIP.jpg';


export default function NavbarComponent() {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
    return (
        <div style={{ backgroundColor: 'hsl(0, 0%, 50%)', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
                <Navbar.Brand>
                    <img src={logo} alt="logo" className="w-50" style={{ marginRight: '5px' }} />
                </Navbar.Brand>
            </div>
            <div>
                <NavLink className={setActiveClass} to="/" style={{ color: 'white', textDecoration: 'none', marginRight: '10px' }}>Home</NavLink>
                <NavLink className={setActiveClass} to="/Pokemones" style={{ color: 'white', textDecoration: 'none' }}>Pokemones</NavLink>
            </div>
        </div>
    );
}

