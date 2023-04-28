import './truckinfo.css'
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';

function Truckinfo(props) {
    return(
        <div className='truck-info'>
            <Link className='truck-name'>{props.truckName}</Link>
            <p className='truck-description'>{props.truckDescription}</p>
            <Link className='delete-button'><FaTrashAlt /></Link>
        </div>
    );
}

export default Truckinfo;