import './trucklist.css'
import Truckinfo from './truckinfo/TruckInfo';
import { Link } from 'react-router-dom';

function Trucklist() {
    return (
        <div className='info-wrap'>
            <div className='top-margin'></div>
            <p className='category-title'>Food Trucks</p>
            <Truckinfo truckName="asd" truckDescription="asasd" />
            <Truckinfo truckName="asd" truckDescription="asasd" />
            <Link className='plus-button'>+</Link>
        </div>
    );
}

export default Trucklist;