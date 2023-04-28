import './trucklist.css'
import Truckinfo from './truckinfo/TruckInfo';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const dataSet = [
    {
        truckName : "언니네 타코야키",
        truckDescription : "손으로 직접 만든 맛집"
    },
    {
        truckName : "우리집 닭꼬치",
        truckDescription : "닭꼬치가 맛있어요"
    },
    {
        truckName : "터키 아이스크림",
        truckDescription : "터키 장인이 직접 온 아이스크림"
    },
]

function Trucklist() {

    let [trucks, setTrucks] = useState(dataSet);

    return (
        <div className='info-wrap'>
            <div className='top-margin'></div>
            <p className='category-title'>Food Trucks</p>
            {
                trucks.map((truck) => {
                    return <Truckinfo truck={truck} />
                })
            }
            <Link className='plus-button'>+</Link>
        </div>
    );
}

export default Trucklist;