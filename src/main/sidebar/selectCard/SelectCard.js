import { Link } from 'react-router-dom';
import './selectCard.css'

function SelectCard(props) {

    return (
        <Link to={props.link} className='select-card'>{props.category}</Link>
    );

}

export default SelectCard;