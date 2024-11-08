import { info } from 'console'
import './Button.css'

type ButtonProps = {
    text: string
    handleClick: (info: string)=>void
}

export default function Button ({text, handleClick}: ButtonProps){
    return <button className='button' onClick={()=>handleClick(text)}>{text}</button>
}