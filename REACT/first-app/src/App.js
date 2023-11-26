// import logo from './logo.svg';
import './App.css';
import Xyz from './components/Xyz';
// import Abc from './components/Abc';
import HelloWorld from './components/HelloWorld';
import Image from './components/X/image';
import InputButton from './components/InputButton';
import InputText from './components/InputText';
import GetDigimon from './components/digimon';
import Medabots from './components/medabots';
import List from './components/List';
import PersonasList from './components/PersonasList';
import ClickButton from './components/ClickButton';
import Counter from './components/Counter';
import ListaViajes from './components/ListaViajes';

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
      }
  ],
  habilidades: [
      {
          nombre: "Garra de Fuego",
          descripcion: "Agumon ataca al enemigo con garras de fuego.",
      },
      {
          nombre: "Burbuja Bebé",
          descripcion: "Crea una burbuja de aire para protegerse a sí mismo.",
      }
  ]
};

const medabot = {
  nombre: "Metabee",
  tipo: "KBT",
  propietario: "Abel"
};

const personas = [
  { nombre: "Juan", edad: 25 },
  { nombre: "María", edad: 30 },
  { nombre: "Carlos", edad: 22 },
  { nombre: "Luisa", edad: 28 }
];

const viajes = [
  "Vacaciones en la playa",
  "Explorar ciudades históricas",
  "Senderismo en las montañas",
  "Viaje en tren panorámico",
  "Camping en el bosque",
  "Tour de comida callejera en Asia",
  "Crucero por el Caribe",
  "Aventura en el desierto",
  "Esquí en las montañas",
  "Observación de auroras boreales en Islandia"
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Xyz></Xyz>
        <Image></Image>
        <HelloWorld/>
        <InputButton text="Aceptar"/>
        <InputButton text="Cancelar"/>
        <InputButton text="Eliminar"/>
        <InputButton text= {true}/>
        <InputText text="Texto por params"/>
        <GetDigimon data={digimon}/>
        <Medabots data={medabot}/>
        <List/>
        <PersonasList data={personas}/>
        <ClickButton/>
        <Counter/>
        <ListaViajes data={viajes}/>
      </header>
    </div>
  );
}

export default App;
