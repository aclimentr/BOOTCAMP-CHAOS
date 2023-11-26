import logo from './logo.svg';
import './App.css';
import GamesList from './components/printgames';

const games = [
  { name: "Valorant", 
    image: "https://hardzone.es/app/uploads-hardzone.es/2021/04/Valorant-Portada.jpg" 
  },
  { name: "League of Legends", 
    image: "https://i.blogs.es/19ba21/league-of-legends/1366_2000.jpg" 
  },
  { name: "Mortal Kombat", 
    image: "https://s01.riotpixels.net/data/1e/0d/1e0d8938-0620-4bbb-b420-a77e016d4837.jpg/cover.mortal-kombat-4.500x500.2020-03-17.11.jpg" 
  },
  { name: "Imagina ser el crush", 
    image: "https://pbs.twimg.com/media/DUGlUS1XUAAbwc4.jpg" 
  },
  { name: "Imagina ser guay", 
    image: "https://img.desmotivaciones.es/201009/76364_1.jpg" 
  },
  { name: "Hunt: Showdown", 
    image: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/02/hunt-showdown-1870375.jpg?tf=3840x" 
  },
  { name: "Dead by Deadlight", 
    image: "https://culturageek.com.ar/wp-content/uploads/2023/02/Dead-by-Daylight.jpg" 
  },
  { name: "Imagina ser el fary", 
    image: "https://jodamiasno.files.wordpress.com/2008/10/imagina-ser-el-fary.png" 
  },
  { name: "Imagina tus movidas", 
    image: "https://pbs.twimg.com/media/DZJEiAMWAAA9e8X.jpg" 
  },
  { name: "Imagina ser alicatador", 
    image: "https://2.bp.blogspot.com/_pHHFS6VniWA/SUGdWz8v0-I/AAAAAAAAACc/Ue0fsL9KSVE/s320/imagina+ser+alicatador.jpg" 
  },
];


function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      </header>
      <main>
      <GamesList data={games}/>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
