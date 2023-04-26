import './main.css'
import Sidebar from './sidebar/Sidebar';
import Contents from './contents/Contents';

function Main() {

    return (
        <div className='main-contents'>
            <Sidebar />
            <Contents />
        </div>
    );

}

export default Main;