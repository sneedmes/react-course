import Button from "../Button/Button";

type AboutUsProps = {
    active: string,
    onChange: (tab: string) => void
}


export default function TabsSection({active, onChange}: AboutUsProps){
    return (
        <section>
            <Button disabled={false} isActive={active === 'main'} text='Main' handleClick={()=>onChange('main')}/>
            <Button disabled={false} isActive={active === 'aboutUs'} text='About us' handleClick={()=>onChange('aboutUs')}/>
            <Button disabled={false} isActive={active === 'effect'} text='Effect' handleClick={()=>onChange('effect')}/>
        </section>
    )
}