import './truckinfo.css'
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import axios from 'axios';
import { BASE_URL, CONFIG } from '../../../../../api/ApiConfig';

function Truckinfo(props) {

    function deleteButtonHandler(e) {
        axios.delete(BASE_URL + "api/foodtruck/" + props.truck.truck_id, CONFIG)
            .then((res) => {
                console.log(res.data)
                window.location = "/2023Phoenixia-Admin/trucks";
            })
            .catch(((Error) => console.log(Error)));
    }

    return(
        <div className='truck-info'>
            <Link to={`/trucks/detail/${props.truck.truck_id}`} className='truck-name'>{props.truck.name}</Link>
            <p className='truck-description'>{props.truck.description}</p>
            <button onClick={deleteButtonHandler} className='delete-button'><FaTrashAlt /></button>
        </div>
    );
}

export default Truckinfo;