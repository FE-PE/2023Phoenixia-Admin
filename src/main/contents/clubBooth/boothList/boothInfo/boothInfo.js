import { Link } from "react-router-dom";
import { FaTrashAlt } from 'react-icons/fa';
import './boothInfo.css'

function Boothinfo(props) {
    return(
        <div className='truck-info'>
            <p className='truck-description boothNumber'>{props.booth.number}</p>
            <Link to="/trucks/detail" className='truck-name'>{props.booth.clubName}</Link>
            <p className='truck-description'>{props.booth.boothDescription}</p>
            <Link className='delete-button'><FaTrashAlt /></Link>
        </div>
    );
}

export default Boothinfo