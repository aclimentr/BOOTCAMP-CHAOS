export default function ListNames({ data }) {
  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>{item.nombre}</li>
      ))}
    </ul>
  );
}
