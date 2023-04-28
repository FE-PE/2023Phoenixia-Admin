import './sidebar.css'
import SelectCard from './selectCard/SelectCard';

function Sidebar() {
    
    return (
        <div className='side-bar'>
            <SelectCard category="푸드트럭"/>
            <SelectCard category="동아리부스" />
        </div>
    );

}

export default Sidebar;