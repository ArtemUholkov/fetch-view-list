import React from 'react';
import './App.css';
import Cards from './components/Cards';

function App() {
  const [characters, setCharacters] = React.useState([]);
  React.useEffect(() => {
    fetch(
      'https://gateway.marvel.com:443/v1/public/characters?apikey=b9afc4de963a0318d4110e911fd9888d',
    )
      .then((response) => response.json())
      .then((json) => {
        setCharacters(json.data.results);
      })
      .catch((error) => console.error(error));
  }, []);
  console.log(characters);
  return (
    <div className="App">
      {characters.map((obj) => (
        <Cards name={obj.name} link={obj.thumbnail.path + '.jpg'} comics={obj.description} />
      ))}
    </div>
  );
}

export default App;
