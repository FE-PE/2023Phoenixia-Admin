import './menuinfo.css'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL, CONFIG } from '../../../../api/ApiConfig';

function MenuInfo(props) {

    const {truck_id} = useParams();

    function menuDeleteButtonHandler(e) {
        axios.delete(BASE_URL + "api/foodtruck/" + truck_id + "/menu/" + props.menu.menu_id, CONFIG)
            .then((res) => {
                console.log(res.data)
                window.location = "/2023Phoenixia-Admin/trucks/detail/" + truck_id;
            })
            .catch(((Error) => console.log(Error)));
    }

    return (
        <div className='menu-info-card'>
            <img src={props.menu.imageUrl} className='menu-image'></img>
            <p className='menu-name'>{props.menu.name}</p>
            <p className='menu-price'>₩ {props.menu.price}</p>
            <div className='menu-ud-button-wrap'>
            <Link to={`/trucks/${truck_id}/menu/update/${props.menu.menu_id}`} className='menu-ud-button'>수정</Link>
            <button onClick={menuDeleteButtonHandler} className='menu-ud-button'>삭제</button>
            </div>
        </div>
    );

}

export default MenuInfo;