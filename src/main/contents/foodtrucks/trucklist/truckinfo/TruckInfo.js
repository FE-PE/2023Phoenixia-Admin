import './truckinfo.css'
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';

function Truckinfo(props) {
    return(
        <div className='truck-info'>
            <Link to="/trucks/detail" className='truck-name'>{props.truck.truckName}</Link>
            <p className='truck-description'>{props.truck.truckDescription}</p>
            <Link className='delete-button'><FaTrashAlt /></Link>
        </div>
    );
}

export default Truckinfo;