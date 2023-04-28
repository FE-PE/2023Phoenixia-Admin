import './menuinfo.css'
import { Link } from 'react-router-dom';

function MenuInfo() {

    return (
        <div className='menu-info-card'>
            <div className='menu-image'></div>
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