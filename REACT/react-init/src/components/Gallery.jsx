import GalleryCard from "./GalleryCard";

export default function Gallery({data}){
    return <div>
        {data.map((item, index) => <GalleryCard key={index} data={item}/>)}
    </div>
}