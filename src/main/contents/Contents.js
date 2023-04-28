import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './contents.css'
import Trucklist from './foodtrucks/trucklist/Trucklist';
import TruckDetail from './foodtrucks/truckdetail/TruckDetail';

function Contents() {

    return (
        
        <div className='contents'>
            <Routes>
                <Route path='/trucks' element={<Trucklist/>} />
                <Route path='/trucks/detail' element={<TruckDetail/>} />
            </Routes>
        </div>
        
    );

}

export default Contents;