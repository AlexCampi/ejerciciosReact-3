import Cabecera from './Cabecera';
import Libro from './Libro';
import biblioteca from './biblioteca'
import './App.css';

function App() {
  return (
    <>
    <Cabecera biblioteca={biblioteca}/>
    <main className="catalogo">
    {biblioteca.libros.map((libro)=>{
      return <Libro libro={libro}/>
    })}
    </main>
    </>
  );
}

export default App;
