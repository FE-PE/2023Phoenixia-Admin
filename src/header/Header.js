import './header.css'
import { Link } from 'react-router-dom';

function Header() {

    return (

        <div className='header'>
            <Link to={'/'} className='logo'>2023 Phoenixia</Link>
            <img className='likelion-logo' src='/img/likelionsch_logo_long.png'></img>
        </div>

    );

}

export default Header;