import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './contents.css'
import Trucklist from './foodtrucks/trucklist/Trucklist';
import TruckDetail from './foodtrucks/truckdetail/TruckDetail';
import TruckCreate from './foodtrucks/truckcreate/TruckCreate';

function Contents() {

    return (
        
        <div className='contents'>
            <Routes>
                <Route path='/trucks' element={<Trucklist/>} />
                <Route path='/trucks/detail' element={<TruckDetail/>} />
                <Route path='/trucks/create' element={<TruckCreate/>} />
            </Routes>
        </div>
        
    );

}

export default Contents;