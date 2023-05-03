function MenuCreate() {

    return (
        <div className='info-wrap'>
            <div className='top-margin'></div>
            <p className='category-title'>Menu</p>
            <form className='truck-form'>
                <p className='form-title'>Menu Name</p>
                <input className='form-input-text width-300' type='text' required></input>
                <p className='form-title'>Menu Price</p>
                <input className='form-input-text width-300' type='text' required></input>
                <p className='form-title'>Menu Image Link</p>
                <input className='form-input-text width-100per' type='text' ></input><br/>
                <button className='form-submit-button'>Submit</button>
            </form>
        </div>
    );
}

export default MenuCreate