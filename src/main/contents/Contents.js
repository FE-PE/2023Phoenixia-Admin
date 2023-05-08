import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './contents.css'
import Home from './home/Home';
import Trucklist from './foodtrucks/trucklist/Trucklist';
import TruckDetail from './foodtrucks/truckdetail/TruckDetail';
import TruckCreate from './foodtrucks/truckcreate/TruckCreate';
import MenuCreate from './foodtrucks/manucreate/MenucCreate';
import BoothList from './clubBooth/boothList/boothList';
import BoothCreate from './clubBooth/boothCreate/boothCreate';
import BoothDetail from './clubBooth/boothDetail/BoothDetail';

function Contents() {

    return (
        
        <div className='contents'>
            <Routes basename={process.env.PUBLIC_URL}>
                <Route path='/' element={<Home/>} />

                <Route path='/trucks' element={<Trucklist/>} />
                <Route path='/trucks/detail/:truck_id' element={<TruckDetail/>} />
                <Route path='/trucks/create' element={<TruckCreate/>} />
                <Route path='/trucks/menu/create' element={<MenuCreate/>} />
                
                <Route path='/booths' element={<BoothList/>} />
                <Route path='/booths/create' element={<BoothCreate/>} />
                <Route path='/booths/detail' element={<BoothDetail/>} />
            </Routes>
        </div>
        
    );

}

export default Contents;