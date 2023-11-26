export default function List() {
  const array = ["Lujuria", "Pereza", "Gula", "Envidia", "Ira"];

  // En el key puedes poner el index siempre y cuando no muevas o elimines elementos
  return <ul>
      {array.map((item, index) => <li key={index}>{item}</li>)}
      {/* {[
          <li>Lujuria</li>,
          <li>Pereza</li>,
          <li>Gula</li>,
          <li>Envidia</li>,
          <li>Ira</li>
      ]} */}
  </ul>;
}