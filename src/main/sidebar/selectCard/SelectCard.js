import { Link } from 'react-router-dom';
import './selectCard.css' 

function SelectCard(props) {

    return (
        <Link className='icon' to={props.link}>{props.icon}</Link>
    );

}

export default SelectCard;