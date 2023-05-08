import axios from "axios";
import { useState } from "react";
import { BASE_URL, CONFIG } from "../../../../api/ApiConfig";
import './boothCreate.css'

function BoothCreate() {

    const [Number, setNumber] = useState("");
    const [Name, setName] = useState("");
    const [Category, setCategory] = useState("");
    const [Description, setDescription] = useState("");
    const [ImageUrl, setImageUrl] = useState("");

    function numberHandler(e) {
        e.preventDefault();
        setNumber(e.target.value);
    }

    function nameHandler(e) {
        e.preventDefault();
        setName(e.target.value);
    }

    function categoryHandler(e) {
        e.preventDefault();
        setCategory(e.target.value);
    }

    function descriptionHandler(e) {
        e.preventDefault();
        setDescription(e.target.value);
    }

    function imageUrlHandler(e) {
        e.preventDefault();
        setImageUrl(e.target.value);
    }

    function submitHandler(e) {
        e.preventDefault();

        let body = {
            number : Number,
            name : Name,
            category : Category,
            description : Description,
            imageUrl : ImageUrl
        }

        axios.post(BASE_URL + `api/club`, body)
        .then((Response) => {
            console.log(Response.data)
            window.location = "/2023Phoenixia-Admin/booths/detail/" + Response.data.id;
        })
        .catch((Error) => console.log(Error));
        
    }

    return (
        <div className='info-wrap'>
            <div className='top-margin'></div>
            <p className='category-title mg-top-50px'>Club Booth</p>
            <form onSubmit={submitHandler} className='truck-form'>
                <p className='form-title'>Club Number</p>
                <input value={Number} onChange={numberHandler} className='form-input-text width-300' type='text' required></input>
                <p className='form-title'>Club Name</p>
                <input value={Name} onChange={nameHandler} className='form-input-text width-300' type='text' required></input>
                <p className='form-title'>Booth Category</p>
                <input value={Category} onChange={categoryHandler} className='form-input-text width-300' type='text' required></input>
                <p className='form-title'>Booth Description</p>
                <input value={Description} onChange={descriptionHandler} className='form-input-text width-100per' type='text' required></input>
                <p className='form-title'>Booth Image Url</p>
                <input value={ImageUrl} onChange={imageUrlHandler} className='form-input-text width-100per' type='text' required></input>
                <button className='mg-top-30px mg-btm-50px form-submit-button'>Submit</button>
            </form>
        </div>
    );
}

export default BoothCreate;