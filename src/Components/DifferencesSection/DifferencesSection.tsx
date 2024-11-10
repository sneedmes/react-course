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
            <Button disabled={false} isActive={content === 'way'} handleClick={() => handleClickForInfo('way')} text="ZAUN"/>
            <Button disabled={false} isActive={content === 'easy'} handleClick={() => handleClickForInfo('easy')} text="PILTOVER"/>
            <p>{differences[content]}</p>
        </section>
    )

}