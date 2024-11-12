import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import React, {useEffect, useState} from "react";

export default function EffectSection(){
    const [modal, setModal] = useState(false)
    const [load, setLoad] = useState(false)
    const [users, setUsers] = useState([])
    function openModal(){
        setModal(true)
    }
    async function loadingUsers(){
        setLoad(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json()
        setUsers(users)
        setLoad(false)
    }

    useEffect(() => {
        loadingUsers()
    }, []);

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
                <ul>
                    {users.map((user:any)=> (
                        <li key={user.id}>
                            {user.name}
                        </li>
                    ))}
                </ul>
            )}
        </section>
    )
}