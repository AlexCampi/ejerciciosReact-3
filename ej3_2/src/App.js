
import './App.css';

function App() {
  let arrayPokemon = ["Charmander", "Bulbasaur", "Squirtle"]

  return (
    <>
      <header>
        <h1>Pokémon iniciales:</h1>
      </header>
      <main>
        <ul>
          {arrayPokemon.map((pokemon) => <li>{pokemon}</li>)}
        </ul>
      </main>
      <footer>
        <h4>2022© Nintendo</h4>
      </footer>
    </>
  );
}

export default App;
