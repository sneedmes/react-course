import classes from './Header.module.css'
// import logo from '../../Images/logo-name.svg'
import {useState, useEffect} from "react";
import { styled } from 'styled-components'

// const HeaderStyles = styled.header`
//     color: red;
//      background-color: blue;
// `
//<HeaderStyles>BlaBla</HeaderStyles>

export default function Header(){
    const [time, setTime] = useState(new Date)
    useEffect(()=>{
        const interval = setInterval(()=>setTime(new Date()), 1000)
        return ()=>{
            clearInterval(interval)
        }
    }, [])

    return (
        <div className={classes.header}>
            <h1>Arcane</h1>
            <p>Time: {time.toLocaleTimeString()}</p>
        </div>
    )
}