import ListNames from "./ListNames";

export default function Digimon({data}){
    return <div>
        <h2>{data.nombre}</h2>
        <h3>Nivel: {data.nivel}</h3>
        <h3>Tipo: {data.tipo}</h3>
        <h3>Atributo: {data.atributo}</h3>

        {/* LLames al componente lista enviandole las evoluciones
        del digimon para que imprima sus nombres */}
        <h3>Evoluciones</h3>
        <ListNames data={data.evoluciones}/>

        <h3>Habilidades</h3>
        <ListNames data={data.habilidades}/>
    </div>
}