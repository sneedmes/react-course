import './Header.css'
import logo from '../../Images/logo-name.svg'

export default function Header(){
    const time = new Date()
    return (
        <div className="header">
            <img src={logo} alt="" />
            <h1>SneedmeS</h1>
            <p>Time: {time.toLocaleTimeString()}</p>
        </div>
    )
}