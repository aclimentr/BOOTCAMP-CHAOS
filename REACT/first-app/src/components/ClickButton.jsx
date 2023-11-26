export default function ClickButton(){
    const showMessage = (e) =>{
        console.log("Holaaaa", e)
    }
    return <button onClick={showMessage}>Clickame!</button>
}