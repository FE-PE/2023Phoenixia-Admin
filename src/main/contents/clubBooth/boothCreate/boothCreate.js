import axios from "axios";
import { useState } from "react";
import { BASE_URL, CONFIG } from "../../../../api/ApiConfig";

function BoothCreate() {

    const [Number, setNumber] = useState("");
    const [Name, setName] = useState("");
    const [Description, setDescription] = useState("");

    function numberHandler(e) {
        e.preventDefault();
        setNumber(e.target.value);
    }

    function nameHandler(e) {
        e.preventDefault();
        setName(e.target.value);
    }

    function descriptionHandler(e) {
        e.preventDefault();
        setDescription(e.target.value);
    }

    function submitHandler(e) {
        e.preventDefault();

        let body = {
            number : Number,
            name : Name,
            description : Description,
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
            <p className='category-title'>Club Booth</p>
            <form onSubmit={submitHandler} className='truck-form'>
                <p className='form-title'>Club Number</p>
                <input value={Number} onChange={numberHandler} className='form-input-text width-300' type='text' required></input>
                <p className='form-title'>Club Name</p>
                <input value={Name} onChange={nameHandler} className='form-input-text width-300' type='text' required></input>
                <p className='form-title'>Booth Description</p>
                <input value={Description} onChange={descriptionHandler} className='form-input-text width-100per' type='text' required></input>
                <button className='form-submit-button'>Submit</button>
            </form>
        </div>
    );
}

export default BoothCreate;