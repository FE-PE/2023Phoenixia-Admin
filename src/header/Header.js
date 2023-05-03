import './header.css'
import { Link } from 'react-router-dom';

function Header() {

    return (

        <div className='header'>
            <Link to={'/'} className='logo'>2023 Phoenixia</Link>
            <img className='likelion-logo' src='https://user-images.githubusercontent.com/64270501/235893017-fae3af47-5f2c-4d68-9861-d8134e9f2aff.png'></img>
        </div>

    );

}

export default Header;