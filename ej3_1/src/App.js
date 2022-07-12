import persona from './persona';
import './App.css';

function App() {
  return (
    <>
      <header>
        <h1>Tu perfil, {persona.nombre}</h1>
      </header>
      <main>
        <h4>{persona.nombre}</h4>
        <p>Edad:{persona.edad}</p>
        <p>Año de nacimiento: {persona.nacimiento}</p>
        <p>Dirección: {persona.direccion.calle}, {persona.direccion.numero}, {persona.direccion.piso}, {persona.direccion.cp}, {persona.direccion.ciudad}</p>
        <p>Grupo sanguíneo: {persona.grupoSanguineo.grupo}{persona.grupoSanguineo.rh}</p>
      </main>
      <footer>
        <h4>2022© Ayuntamiento de {persona.direccion.ciudad}</h4>
      </footer>
    </>
  );
}

export default App;
