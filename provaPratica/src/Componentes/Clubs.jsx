import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [clubes, setClubes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://api.cartola.globo.com/clubes')
      .then((response) => {
        const clubesData = Object.values(response.data);
        setClubes(clubesData);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="App">
      <h1 id='titulo'>Times de Futebol</h1>
      <div className="clubes-container">
        {clubes.map(clube => (
          <div key={clube.id} className="clube">
            <img src={clube.escudos['60x60']} alt={`${clube.nome} logo`} />
            <p>{clube.nome} 
            <br/>
            
            </p><p className='apelido'>
                {clube.apelido}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;