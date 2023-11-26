export default function ClickButton(){
    const showMessage = (e) => {
        console.log("Holaaaaa", e)
    }
    return <button onClick={showMessage}>Clickame</button>
}