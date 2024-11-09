import {useState} from "react";
import './App.css';
import Header from "./Components/Header/Header"
import TeachingSection from "./Components/TeachingSection/TeachingSection";
import DifferencesSection from "./Components/DifferencesSection/DifferencesSection";
import TabsSection from "./Components/TabsSection/TabsSection";
import AboutUsSection from "./Components/AboutUsSection/AboutUsSection";

function App() {
    const [tab, setTab] = useState('main')
    return (
        <>
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
            </main>
        </>
    )
}

export default App