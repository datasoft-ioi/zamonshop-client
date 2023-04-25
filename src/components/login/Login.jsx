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
                    <input type="tel" placeholder='91 311 11 12' />
                </div>
                <button>KIRISH</button>
            </div>
        </>
    )
}