export default function TabButton({children,onSelect}){
    return(
        <>
            <li>
                <button type="button" onClick={onSelect}>{children}</button>
            </li>
        </>
    )
}