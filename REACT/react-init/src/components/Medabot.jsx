export default function Medabot({data}){
    return <div>
        <h2>{data.nombre}</h2>
        <h3>Tipo: {data.tipo}</h3>
        <h3>propietario: {data.propietario}</h3>
    </div>
}