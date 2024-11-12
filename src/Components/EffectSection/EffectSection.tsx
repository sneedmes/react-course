import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import React, {useEffect, useState, useCallback} from "react";
import useInput from "../../hooks/useInput";
import "./EffectSection.css"
export default function EffectSection(){
    const input = useInput()
    const [modal, setModal] = useState(false)
    const [load, setLoad] = useState(false)
    const [users, setUsers] = useState([])
    function openModal(){
        setModal(true)
    }
    const loadingUsers = useCallback(async ()=>{
        setLoad(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json()
        setUsers(users)
        setLoad(false)}, [])

        useEffect(() => {
            loadingUsers()
        }, [loadingUsers]);

    return(
        <section>
            <h3>Effects</h3>
            <Button text='Open info' handleClick={openModal} isActive={false} disabled={false}/>
            <Modal open={modal}>
                <h3>Modal form</h3>
                <p>Arcane is the best serial ever!!!</p>
                <Button text='Close dialog' handleClick={() => setModal(false)} isActive={false} disabled={true}/>
            </Modal>

            {load && <p>loading...</p>}
            {!load && (
                <section className='users'>
                    <input type="text" className="control" {...input}/>
                    <h5>{input.value}</h5>
                    <ul>
                        {users
                            .filter((user:any)=>
                                user.name.toLowerCase().includes(input.value.toLowerCase()))
                                    .map((user:any)=> (
                            <li key={user.id}>
                                {user.name}
                            </li>
                        ))}
                    </ul>
                </section>
            )}
        </section>
    )
}