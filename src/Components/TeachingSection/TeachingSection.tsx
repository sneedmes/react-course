import {ways} from "../../data";
import WayToTeach from "../WayToTeach/WayToTeach";
import React from "react";

export default function TeachingSection() {
    return (
        <section>
            <h3>Arcane's characters</h3>
            <ul>
                {ways.map(way => <WayToTeach key={way.title} {...way}/>)}
            </ul>
        </section>
    )
}