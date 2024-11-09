import Button from "../Button/Button";

type AboutUsProps = {
    active: string,
    onChange: (tab: string) => void
}


export default function TabsSection({active, onChange}: AboutUsProps){
    return (
        <section>
            <Button isActive={active === 'main'} text='Main' handleClick={()=>onChange('main')}/>
            <Button isActive={active === 'aboutUs'} text='About us' handleClick={()=>onChange('aboutUs')}/>
        </section>
    )
}