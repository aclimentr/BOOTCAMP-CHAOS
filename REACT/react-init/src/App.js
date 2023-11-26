import "./App.css";
import ClickButton from "./components/ClickButton";
import Counter from "./components/Counter";
import Digimon from "./components/Digimon";
import Gallery from "./components/Gallery";
import HelloWorld from "./components/HelloWorld";
import Image from "./components/Image";
import InputButton from "./components/InputButton";
import List from "./components/List";
import ListNames from "./components/ListNames";
import Medabot from "./components/Medabot";
import X from "./components/X/X";
import Xyz from "./components/Xyz";
import Todo from "./components/Todo";

const digimon = {
  nombre: "Agumon",
  nivel: "Rookie",
  tipo: "Dinosaurio",
  atributo: "Fuego",
  evoluciones: [
    {
      nombre: "Greymon",
      nivel: "Campeón",
    },
    {
      nombre: "MetalGreymon",
      nivel: "Definitivo",
    },
    {
      nombre: "WarGreymon",
      nivel: "Mega",
    },
  ],
  habilidades: [
    {
      nombre: "Garra de Fuego",
      descripcion: "Agumon ataca al enemigo con garras de fuego.",
    },
    {
      nombre: "Burbuja Bebé",
      descripcion: "Crea una burbuja de aire para protegerse a sí mismo.",
    },
  ],
};

const medabot = {
  nombre: "Metabee",
  tipo: "KBT",
  propietario: "Abel",
};

const personas = [
  { nombre: "Juan", edad: 25 },
  { nombre: "María", edad: 30 },
  { nombre: "Carlos", edad: 22 },
  { nombre: "Luisa", edad: 28 },
];

const animes = [
  {
    nombre: "Naruto",
    imagen: "https://es.web.img2.acsta.net/pictures/13/12/13/08/50/378271.jpg",
  },
  {
    nombre: "One Piece",
    imagen:
      "https://pics.filmaffinity.com/One_Piece_Serie_de_TV-647985949-large.jpg",
  },
  {
    nombre: "Attack on Titan",
    imagen:
      "https://elcomercio.pe/resizer/s9FNsNUn4aCZWwzJ8E4CiI3nfAU=/620x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/7GIIGO2GA5FJBMKXN5XT4KA3NU.jpg",
  },
  {
    nombre: "Code Geass",
    imagen:
      "https://images.justwatch.com/poster/253937129/s718/code-geass-lelouch-of-the-rebellion.jpg",
  },
];

function App() {
  const btnText = "Editar";
  return (
    <div className="App">
      <div className="App-header">
        <Xyz />
        <HelloWorld />
        <X />
        <Image />
        <InputButton text="Aceptar" />
        <InputButton text="Cancelar" />
        <InputButton text="Eliminar" />
        <InputButton text={btnText} />
        <InputButton text={true} />
        <InputButton text={18} />

        <Digimon data={digimon} />
        <Medabot data={medabot} />

        <List />

        <ListNames data={personas} />

        <ClickButton />

        <Counter />

        <h1>Gallery</h1>
        <Gallery data={animes} />
        {/* <GalleryCard data={animes[0]}/> */}

        <h1>TODO LIST</h1>

        <Todo />
      </div>
    </div>
  );
}

export default App;

function pepe(name) {}

const na = "abel";

pepe(na);
