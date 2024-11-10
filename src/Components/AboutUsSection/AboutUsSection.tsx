import Button from "../Button/Button";
import {useState, useRef} from "react";
import '../Button/Button.module.css'
import './AboutUsSection.css'

function StateRef(){
    const [value, setValue] = useState('')
    const [show, setShow] = useState(false)

    function handleKeyDown(event: any){
        if(event.key==='Enter'){
            setShow(true)
        }
    }
    return (
        <div>
            <h3 style={{marginLeft: '0px'}}>Input value: {show && value}</h3>
            <input type="text"
                   className='select'
                   value={value}
                   onKeyDown={handleKeyDown}
                   onChange={(event)=>setValue(event.target.value)}/>
        </div>
    )
}

export default function AboutUsSection(){
    const [form, setForm] = useState({
        name: "",
        hasError: true,
        reason: 'error'
    })

    function handleClickForName(title: any){
        setForm((prev)=>({
            ...prev,
            name: title.target.value,
            hasError: title.target.value.trim().length===0
        }))
    }

    return (
        <section>
            <h3>About us</h3>
            <h2>Contacts</h2>
            <form>
                <label htmlFor="name">Enter your name</label>
                <input
                    type="text"
                    id='name'
                    className="control"
                    value={form.name}
                    onChange={handleClickForName}
                    style={{
                        border: form.hasError ? '1px solid red' : undefined
                    }}
                />

                <label htmlFor="reason">Reason of contact</label>
                <select id="reason"
                        className='select'
                        value={form.reason}
                        onChange={(event)=>setForm((prev)=>({...prev, reason: event.target.value}))}>
                    <option value="error">Error</option>
                    <option value="help">Help</option>
                    <option value="idea">Idea</option>
                </select>
                <Button disabled={form.hasError} text='Send' isActive={!form.hasError} handleClick={()=>null}/>
            </form>
            <StateRef/>
        </section>
    );
}