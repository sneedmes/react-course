import Header from "./Components/Header/Header"
import {ways} from './data.js'
import WayToTeach from "./Components/WayToTeach/WayToTeach";
import Button from "./Components/Button/Button"
import { useState } from "react"

function App() {
  const [content, setContent] = useState('Please click the button')

  function handleClick(info: string){
    setContent(info)
  }
    return (
    <div>
      <Header />
      <main>
        <section>
          <h3>Подход к обучению</h3>
          <ul>
            <WayToTeach
             title={ways[0].title}
             description={ways[0].description}
             />
             <WayToTeach
             {...ways[1]}
             />
             <WayToTeach
             {...ways[2]}
             />
             <WayToTeach
             {...ways[3]}
             />
          </ul>
        </section>
        <section>
          <Button handleClick={() => handleClick('way')} text="Hydrogen"/>
          <Button handleClick={() => handleClick('program')} text="Diet"/>
          <Button handleClick={() => handleClick('easy')} text="Sport"/>
        </section>
        <p>{content}</p>
      </main>
    </div>
  )
}

export default App