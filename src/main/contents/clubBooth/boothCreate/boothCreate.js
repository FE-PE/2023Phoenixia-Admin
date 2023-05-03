function BoothCreate() {

    return (
        <div className='info-wrap'>
            <div className='top-margin'></div>
            <p className='category-title'>Club Booth</p>
            <form className='truck-form'>
                <p className='form-title'>Club Number</p>
                <input className='form-input-text width-300' type='text' required></input>
                <p className='form-title'>Club Name</p>
                <input className='form-input-text width-300' type='text' required></input>
                <p className='form-title'>Booth Description</p>
                <input className='form-input-text width-100per' type='text' required></input>
                <button className='form-submit-button'>Submit</button>
            </form>
        </div>
    );
}

export default BoothCreate;