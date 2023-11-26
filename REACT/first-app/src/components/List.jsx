export default function List(){
    const array = ["Lujuria", "Pereza", "Gula", "Envidia", "Ira"];
    return <ul>{array.map((item, id) => <li key={id}>{item}</li>)}</ul>
}