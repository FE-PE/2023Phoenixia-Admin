import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './contents.css'
import Trucklist from './foodtrucks/trucklist/Trucklist';

function Contents() {

    return (
        
        <div className='contents'>
            <Routes>
                <Route path='/trucks' element={<Trucklist/>} />
            </Routes>
        </div>
        
    );

}

export default Contents;