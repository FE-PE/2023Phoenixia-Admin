import './truckdetail.css'
import { Link } from 'react-router-dom';
import MenuInfo from '../menuinfo/MenuInfo';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL, CONFIG } from '../../../../api/ApiConfig';
import { useParams } from 'react-router-dom';

function TruckDetail() {

    let [truck, setTruck] = useState([]);
    let [menus, setMenus] = useState([]);
    const {truck_id} = useParams();

    useEffect(() => {
        axios.get(BASE_URL + `api/foodtruck/` + truck_id, CONFIG)
            .then((Response) => {
                console.log(Response.data)
                setTruck(Response.data)
            })
            .catch((Error) => console.log(Error));
    }, []);

    function deleteButtonHandler(e) {
        axios.delete(BASE_URL + "api/foodtruck/" + truck_id, CONFIG)
            .then((res) => {
                console.log(res.data)
                window.location = "/2023Phoenixia-Admin/trucks";
            })
            .catch(((Error) => console.log(Error)));
    }

    return (
        <div className='detail-wrap'>
            <div className='top-margin'></div>
            <p className='title-truck-name'>{truck.name}</p>
            <div className='button-wrap'>
                <div></div>
                <div>
                    <Link className='update-delete-button'>수정</Link>
                    <button onClick={deleteButtonHandler} className='update-delete-button'>삭제</button>
                </div>
            </div>
            <p className='detail-truck-description'>{truck.description}</p>
            <div className='image-wrap'>
            <img src={truck.imageUrl} className='truck-image'></img>
            <div></div>
            </div>
            <p className='title-menus'>Menus</p>
            <div className='menus-wrap'>
                {
                    truck.menus && truck.menus.map((menu) => {
                        <MenuInfo menu={menu}/>
                    })
                }
                <Link to={'/trucks/menu/create'} className='menu-plus-button'>+</Link>
            </div>
        </div>
    );
}

export default TruckDetail;