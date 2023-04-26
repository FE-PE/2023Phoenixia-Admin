import './sidebar.css'
import SelectCard from './selectCard/SelectCard';

function Sidebar() {
    
    return (
        <div className='side-bar'>
            <SelectCard />
            <SelectCard />
            <SelectCard />
        </div>
    );

}

export default Sidebar;