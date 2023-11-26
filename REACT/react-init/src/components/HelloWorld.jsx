export default function HelloWorld() {
  const name = "Abel";

  const pepe = <h1>Name: El Pepe</h1>;

  const print = () => {
      return <h1>Jaula</h1>
  }

  const url = "https://ca-times.brightspotcdn.com/dims4/default/796e6c9/2147483647/strip/true/crop/1970x1108+39+0/resize/1200x675!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F12%2Fa5%2F79e097ccf62312d18a025f22ce48%2Fhoyla-recuento-11-cosas-aman-gatos-top-001";
  
  return (
    <div>
      {name === "Abel" ? <h1>Profesor</h1> : "Alumno"}
      <h1>Name: {name}</h1>
      {pepe === "Abel" ? <h1>Profesor</h1> : "Alumno"}
      {pepe}
      {print()}

      <img src={url} alt={"Soy una imagen"} />
    </div>
  );
}
