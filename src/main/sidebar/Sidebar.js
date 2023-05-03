import './sidebar.css'
import SelectCard from './selectCard/SelectCard';
import { FaTruck, FaPersonBooth, FaHome } from 'react-icons/fa';
import { IconContext } from "react-icons";

function Sidebar() {
    
    return (
        <div className='side-bar'>
            <div className='sidebar-wrap'>
                <SelectCard link="/" icon={<FaHome/>}/>
                <SelectCard link="/trucks" icon={<FaTruck/>}/>
                <SelectCard link="/booths" icon={<FaPersonBooth/>} />
            </div>
        </div>
    );

}

export default Sidebar;