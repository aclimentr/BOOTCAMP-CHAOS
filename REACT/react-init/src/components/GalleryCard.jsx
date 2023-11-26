export default function GalleryCard({data}){
    return <div>
        <img width="300" src={data.imagen} alt={data.nombre} />
        <h2>{data.nombre}</h2>
    </div>
}