import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL, CONFIG } from '../../../../api/ApiConfig';

function TruckUpdate() {

    const [Name, setName] = useState("");
    const [Description, setDescription] = useState("");
    const [ImageUrl, setImageUrl] = useState("");

    const {truck_id} = useParams();

    useEffect(() => {
        axios.get(BASE_URL + `api/foodtruck/` + truck_id, CONFIG)
            .then((Response) => {
                console.log(Response.data)
                setName(Response.data.name)
                setDescription(Response.data.description)
                setImageUrl(Response.data.imageUrl)
            })
            .catch((Error) => console.log(Error));
    }, []);

    function nameHandler(e) {
        e.preventDefault();
        setName(e.target.value);
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
            name : Name,
            description : Description,
            imageUrl : ImageUrl
        }

        axios.patch(BASE_URL + `api/foodtruck/` + truck_id, body)
        .then((Response) => {
            console.log(Response.data)
            window.location = "/2023Phoenixia-Admin/trucks/detail/" + Response.data.truck_id;
        })
        .catch((Error) => console.log(Error));
        
    }

    return (
        <div className='info-wrap'>
            <div className='top-margin'></div>
            <p className='category-title'>Food Truck</p>
            <form className='truck-form' onSubmit={submitHandler}>
                <p className='form-title'>Truck Name</p>
                <input value={Name} onChange={nameHandler} className='form-input-text width-300' type='text' required></input>
                <p className='form-title'>Truck Description</p>
                <input value={Description} onChange={descriptionHandler} className='form-input-text width-100per' type='text' required></input>
                <p className='form-title'>Truck Image Link</p>
                <input value={ImageUrl} onChange={imageUrlHandler} className='form-input-text width-100per' type='text' ></input><br/>
                <button className='form-submit-button'>Submit</button>
            </form>
        </div>
    );
}

export default TruckUpdate;