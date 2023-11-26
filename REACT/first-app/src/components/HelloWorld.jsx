export default function HelloWorld(){
    const name = "Alvaro";
    const pepe = <h1>El Pepe</h1>;
    const print = () => {
        return <h2>Jaula</h2>
    }
    const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQySc5iIQpSxUtm98q7w1YfTFk9sRv3pPTBNdGb5AM7Apc5CvJDZBV8WB7EFsjnSLLMG6c&usqp=CAU";
    return (
        <div>
        {name === "Alvaro" ? "Alumno" : "Profesor"}  condicional ternario: nombres === a alvaro ?? entonces alumno, si no, profesor
        <h1>Name: {name}</h1>
        {pepe}
        {print()}
        <img src={url} alt="Soy una imagen"/>
        </div>
    );
}