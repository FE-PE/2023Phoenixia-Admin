import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Boothinfo from "./boothInfo/boothInfo";
import axios from "axios";
import { BASE_URL, CONFIG } from "../../../../api/ApiConfig";

function BoothList() {

    let [booths, setBooths] = useState([]);

    useEffect(() => {
        axios.get(BASE_URL + "/api/club", CONFIG)
            .then((Response) => {
                console.log(Response.data)
                var data = Response.data
                data.sort(function(a,b) {
                    return a.number - b.number;
                })
                setBooths(Response.data)
            })
            .catch((Error) => console.log(Error));
    }, []);

    return (
        <div className='info-wrap'>
            <div className='top-margin'></div>
            <p className='category-title'>Club Booth</p>
            {
                booths.map((booth) => {
                    return <Boothinfo booth={booth} />
                })
            }
            <Link to={`/booths/create`} className='plus-button'>+</Link>
        </div>
    );
}

export default BoothList