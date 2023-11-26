export default function ListaViajes({data}){
    return (
    <div>
        <form></form>
    <ul>
        {data.map((data, index) => <li key={index}>{data}</li>)}
    </ul>
    </div>
    )
}