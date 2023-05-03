import { useState } from "react";
import { Link } from "react-router-dom";
import Boothinfo from "./boothInfo/boothInfo";

const dataSet = [
    {
        number : 1,
        clubName : "Festival People",
        boothDescription : "삼각대 대여"
    },
    {
        number : 2,
        clubName : "Thug",
        boothDescription : "거리노래방"
    },
    {
        number : 3,
        clubName : "총학생회",
        boothDescription : "몰라 총학"
    }, 
]

function BoothList() {

    let [booths, setbooths] = useState(dataSet);

    return (
        <div className='info-wrap'>
            <div className='top-margin'></div>
            <p className='category-title'>Club Booth</p>
            {
                booths.map((booth) => {
                    return <Boothinfo booth={booth} />
                })
            }
            <Link to={'/booths/create'} className='plus-button'>+</Link>
        </div>
    );
}

export default BoothList