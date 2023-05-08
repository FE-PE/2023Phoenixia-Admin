import './trucklist.css'
import Truckinfo from './truckinfo/TruckInfo';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL, CONFIG } from '../../../../api/ApiConfig';

function Trucklist() {

    let [trucks, setTrucks] = useState([]);

    useEffect(() => {
        axios.get(BASE_URL + "/api/foodtruck", CONFIG)
            .then((Response) => {
                console.log(Response.data)
                setTrucks(Response.data)
            })
            .catch((Error) => console.log(Error));
    }, []);

    return (
        <div className='info-wrap'>
            <div className='top-margin'></div>
            <p className='category-title'>Food Trucks</p>
            {
                trucks.map((truck) => {
                    return <Truckinfo truck={truck} />
                })
            }
            <Link to={'/trucks/create'} className='plus-button'>+</Link>
        </div>
    );
}

export default Trucklist;