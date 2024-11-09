import Button from "../Button/Button";
import {useState} from "react";
import '../Button/Button.module.css'

export default function AboutUsSection(){
    const [name, setName] = useState('')
    const [value, setValue] = useState('')

    return (
        <section>
            <h3>About us</h3>
            <h2>Contacts</h2>
            <form>
                <label htmlFor="name">Enter your name</label>
                <input type="text" id='name' className="control" value={name} onChange={(name)=>setName(name.target.value)}/>

                <label htmlFor="reason">Reason of contact</label>
                <select id="reason" className='control' value={value} onChange={(event)=>setValue(event.target.value)}>
                    <option value="error">Error</option>
                    <option value="help">Help</option>
                    <option value="idea">Idea</option>
                </select>
                <pre>
                    name: {name}
                    value: {value}
                </pre>
                <Button text='Send' isActive={false} handleClick={()=>null}/>
            </form>
        </section>
    );
}