import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BASE_URL, CONFIG } from "../../../../api/ApiConfig";


function BoothDetail() {

    let [booth, setBooth] = useState([]);
    const {club_id} = useParams();

    useEffect(() => {
        axios.get(BASE_URL + "api/club/" + club_id, CONFIG)
            .then((Response) => {
                console.log(Response.data)
                setBooth(Response.data)
            })
            .catch((Error) => console.log(Error));
    }, []);

    function deleteButtonHandler(e) {
        axios.delete(BASE_URL + "api/club/" + club_id, CONFIG)
            .then((res) => {
                console.log(res.data)
                window.location = "/2023Phoenixia-Admin/booths";
            })
            .catch(((Error) => console.log(Error)));
    }

    return (
        <div className='detail-wrap'>
            <div className='top-margin'></div>
            <p className='title-truck-name'>{booth.number}. {booth.name}</p>
            <div className='button-wrap'>
                <div></div>
                <div>
                    <Link to={`/booths/update/${club_id}`} className='update-delete-button'>수정</Link>
                    <button onClick={deleteButtonHandler} className='update-delete-button'>삭제</button>
                </div>
            </div>
            <p className='detail-truck-description'>{booth.category}</p>
            <p className='detail-truck-description'>{booth.description}</p>
            <div className='image-wrap'>
            <img src={booth.imageUrl} className='truck-image'></img>
            <div></div>
            </div>
        </div>
    );
}

export default BoothDetail