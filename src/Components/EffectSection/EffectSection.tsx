import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import {useState} from "react";

export default function EffectSection(){
    const [modal, setModal] = useState(false)
    function openModal(){
        setModal(true)
    }

    return(
        <section>
            <h3>Effects</h3>
            <Button text='Open info' handleClick={openModal} isActive={false} disabled={false}/>
            <Modal open={modal}>
                <h3>Modal form</h3>
                <p>Arcane is the best serial ever!!!</p>
            </Modal>
        </section>
    )
}