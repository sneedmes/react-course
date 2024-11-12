import {useState} from "react";
import './App.css';
import Header from "./Components/Header/Header"
import TeachingSection from "./Components/TeachingSection/TeachingSection";
import DifferencesSection from "./Components/DifferencesSection/DifferencesSection";
import TabsSection from "./Components/TabsSection/TabsSection";
import AboutUsSection from "./Components/AboutUsSection/AboutUsSection";
import EffectSection from "./Components/EffectSection/EffectSection";

function App() {
    const [tab, setTab] = useState('effect')
    return (
        <>
            <div id='modal'></div>
            <Header/>
            <main>
                <TabsSection active={tab} onChange={setTab}/>
                {tab === 'main' && (
                    <>
                        <TeachingSection/>
                        <DifferencesSection/>
                    </>
                )}
                {tab === 'aboutUs' && (
                    <>
                        <AboutUsSection/>
                    </>
                )}
                {tab === 'effect' && (
                    <>
                        <EffectSection/>
                    </>
                )}
            </main>
        </>
    )
}

export default App