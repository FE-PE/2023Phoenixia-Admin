import './selectCard.css'

function SelectCard(props) {

    return (
        <button className='select-card'>{props.category}</button>
    );

}

export default SelectCard;