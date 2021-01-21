import './Navbar.css';
import piePic from '../../assets/pie.jpg';
import Logout from './Logout/Logout';

const Navbar = () => {
    return(
        <div>
            <nav>
                <img id="piePic" src={piePic} alt="pie" />
                <Logout />
            </nav>
        </div>
    );
};

export default Navbar;