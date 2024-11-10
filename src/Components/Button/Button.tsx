import classes from './Button.module.css'

type ButtonProps = {
    text: string
    handleClick: ()=>void
    isActive: boolean
    disabled: boolean
}

export default function Button ({text, handleClick, isActive, disabled}: ButtonProps){
    return <button className={isActive ? `${classes.button} ${classes.active}` : classes.button} onClick={handleClick}>{text}</button>
}