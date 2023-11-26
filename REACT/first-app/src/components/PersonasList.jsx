export default function PersonasList({data}){
    return (
        
        <ul>
            {data.map((item, index) => <li key={index}>{item.nombre}</li>)}
        </ul>
    )
}