import { Link } from "react-router-dom";


function BoothDetail() {
    return (
        <div className='detail-wrap'>
            <div className='top-margin'></div>
            <p className='title-truck-name'>1. Festival People</p>
            <div className='button-wrap'>
                <div></div>
                <div>
                    <Link className='update-delete-button'>수정</Link>
                    <Link className='update-delete-button'>삭제</Link>
                </div>
            </div>
            <p className='detail-truck-description'>삼각대 빌려드립니다.</p>
        </div>
    );
}

export default BoothDetail