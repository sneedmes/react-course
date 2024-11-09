import classes from './Header.module.css'
import logo from '../../Images/logo-name.svg'
import {useState} from "react";
import { styled } from 'styled-components'

// const HeaderStyles = styled.header`
//     color: red;
//      background-color: blue;
// `
//<HeaderStyles>BlaBla</HeaderStyles>

export default function Header(){
    const [time, setTime] = useState(new Date)

    setInterval(()=>setTime(new Date()), 1000)

    return (
        <div className={classes.header}>
            <img src={logo} alt="" />
            <h1>SneedmeS</h1>
            <p>Time: {time.toLocaleTimeString()}</p>
        </div>
    )
}