import { Link } from "react-router-dom";
import { FaTrashAlt } from 'react-icons/fa';
import './boothInfo.css'
import axios from "axios";
import { BASE_URL, CONFIG } from "../../../../../api/ApiConfig";

function Boothinfo(props) {

    function deleteButtonHandler(e) {
        axios.delete(BASE_URL + "api/club/" + props.booth.id, CONFIG)
            .then((res) => {
                console.log(res.data)
                window.location = "/2023Phoenixia-Admin/booths";
            })
            .catch(((Error) => console.log(Error)));
    }

    return(
        <div className='truck-info'>
            <p className='truck-description boothNumber'>{props.booth.number}</p>
            <Link to={`/booths/detail/${props.booth.id}`} className='truck-name'>{props.booth.name}</Link>
            <p className='truck-description'></p>
            <button onClick={deleteButtonHandler} className='delete-button'><FaTrashAlt /></button>
        </div>
    );
}

export default Boothinfo