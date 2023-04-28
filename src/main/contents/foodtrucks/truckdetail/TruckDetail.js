import './truckdetail.css'
import { Link } from 'react-router-dom';
import MenuInfo from '../menuinfo/MenuInfo';

const dataSet = [
    {
        truckName: "언니네 타코야키",
        truckDescription: "직접 만드는 타코야키 맛집",
        menus : {
            maenuName: "타코야키 치즈맛",
            menuPrice: "4000"
        }
    }
]

function TruckDetail() {
    return (
        <div className='detail-wrap'>
            <div className='top-margin'></div>
            <p className='title-truck-name'>언니네 타코야키</p>
            <div className='button-wrap'>
                <div></div>
                <div>
                    <Link className='update-delete-button'>수정</Link>
                    <Link className='update-delete-button'>삭제</Link>
                </div>
            </div>
            <p className='detail-truck-description'>직접 만드는 타코야키 맛집</p>
            <p className='title-menus'>Menus</p>
            <div className='menus-wrap'>
                <MenuInfo />
                <MenuInfo />
                <MenuInfo />
                <Link to={'/trucks/menu/create'} className='menu-plus-button'>+</Link>
            </div>
        </div>
    );
}

export default TruckDetail;