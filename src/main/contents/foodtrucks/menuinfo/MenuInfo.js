import './menuinfo.css'
import { Link } from 'react-router-dom';

function MenuInfo() {

    return (
        <div className='menu-info-card'>
            <img src='https://user-images.githubusercontent.com/64270501/235955935-5c937fa1-0d8b-4e35-896d-946567448bef.png' className='menu-image'></img>
            <p className='menu-name'>타코야키 6알</p>
            <p className='menu-price'>₩ 4000</p>
            <div className='menu-ud-button-wrap'>
            <Link className='menu-ud-button'>수정</Link>
            <Link className='menu-ud-button'>삭제</Link>
            </div>
        </div>
    );

}

export default MenuInfo;