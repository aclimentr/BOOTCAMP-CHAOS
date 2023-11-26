import PersonasList from "./PersonasList";

export default function GetDigimon({data}){
    return <div>
<h3>{data.nombre}</h3>
<h3>{data.nivel}</h3>
<h3>{data.tipo}</h3>
<h3>{data.atributo}</h3>
<h3>Evoluciones:</h3>
<PersonasList data={data.evoluciones}/>
        </div>
        
}