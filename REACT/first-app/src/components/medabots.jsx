export default function Medabots({data}){
    return (
        <div>
            <h1>{data.nombre}</h1>
            <h1>Propietario: {data.propietario}</h1>
            <h1>Tipo: {data.tipo}</h1>
        </div>
    )
}