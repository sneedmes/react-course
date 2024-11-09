import Button from "../Button/Button";
import React, {useState} from "react";
import {differences} from '../../data.js'

export default function DifferencesSection() {
    const [content, setContent] = useState<keyof typeof differences>('null')
    function handleClickForInfo(info: keyof typeof differences) {
        setContent(info);
    }
    return (
        <section>
            <Button isActive={content === 'way'} handleClick={() => handleClickForInfo('way')} text="Hydrogen"/>
            <Button isActive={content === 'program'} handleClick={() => handleClickForInfo('program')} text="Diet"/>
            <Button isActive={content === 'easy'} handleClick={() => handleClickForInfo('easy')} text="Sport"/>
            <p>{differences[content]}</p>
        </section>
    )

}