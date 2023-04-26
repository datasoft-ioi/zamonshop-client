import './login.css'


export default function Login({ isOpen, setIsOpen }) {
    return (
        <>
            <div className={isOpen} onClick={() => setIsOpen('loginClose closeLogin')}> </div>
            <div className={isOpen === 'loginClose closeLogin' ? 'closeLogin' : 'login'}>
                <h3>KIRISH</h3>
                <div className="login_userInfos">
                    <select name="" id="">
                        <option value="">+998</option>
                    </select>
                    <input type="tel" name='phone_number' maxLength='9' placeholder='91 311 11 12' />
                    <input name='otp' style={{width: '100px'}} type="text" placeholder="SMS KOD" />
                </div>
                <button className='login_userInfosBTN'>KIRISH</button>
                <button className='mClose' onClick={() => setIsOpen('loginClose closeLogin')}>X</button>
            </div>
        </>
    )
}