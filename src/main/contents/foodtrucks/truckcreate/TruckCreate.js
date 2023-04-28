import './truckCreate.css'

function TruckCreate() {

    return (
        <div className='info-wrap'>
            <div className='top-margin'></div>
            <p className='category-title'>Food Trucks</p>
            <form className='truck-form'>
                <p className='form-title'>Truck Name</p>
                <input className='form-input-text width-300' type='text' required></input>
                <p className='form-title'>Truck Description</p>
                <input className='form-input-text width-100per' type='text' required></input>
                <p className='form-title'>Truck Image</p>
                <input type='file' accept='image/*'></input><br/>
                <button className='form-submit-button'>Submit</button>
            </form>
        </div>
    );
}

export default TruckCreate;