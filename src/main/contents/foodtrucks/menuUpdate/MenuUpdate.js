import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../../../api/ApiConfig";

function MenuUpdate() {

    const [Name, setName] = useState("");
    const [Price, setPrice] = useState("");
    const [ImageUrl, setImageUrl] = useState("");
    const {truck_id, menu_id} = useParams();

    function nameHandler(e) {
        e.preventDefault();
        setName(e.target.value);
    }

    function priceHandler(e) {
        e.preventDefault();
        setPrice(e.target.value);
    }

    function imageUrlHandler(e) {
        e.preventDefault();
        setImageUrl(e.target.value);
    }

    function submitHandler(e) {
        e.preventDefault();

        let body = {
            name : Name,
            price : Price,
            imageUrl : ImageUrl,
        }

        axios.patch(BASE_URL + `api/foodtruck/${truck_id}/menu/${menu_id}`, body)
        .then((Response) => {
            console.log(Response.data)
            window.location = "/2023Phoenixia-Admin/trucks/detail/" + truck_id;
        })
        .catch((Error) => console.log(Error));
        
    }

    return (
        <div className='info-wrap'>
            <div className='top-margin'></div>
            <p className='category-title'>Menu</p>
            <form onSubmit={submitHandler} className='truck-form'>
                <p className='form-title'>Menu Name</p>
                <input value={Name} onChange={nameHandler} className='form-input-text width-300' type='text' required></input>
                <p className='form-title'>Menu Price</p>
                <input value={Price} onChange={priceHandler} className='form-input-text width-300' type='text' required></input>
                <p className='form-title'>Menu Image Link</p>
                <input value={ImageUrl} onChange={imageUrlHandler} className='form-input-text width-100per' type='text' ></input><br/>
                <button className='form-submit-button'>Submit</button>
            </form>
        </div>
    );
}

export default MenuUpdate