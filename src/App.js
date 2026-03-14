import { useCallback, useEffect, useState } from 'react';
import video from './intro.mp4';
import './App.css';

function App() {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getQuote = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('https://bored-api.appbrewery.com/random');
      if (!response.ok) throw new Error('API nicht erreichbar');
      const data = await response.json();
      setQuote(data.activity);
    } catch (err) {
      setError('Ups! Keine Aktivität gefunden. Versuch es nochmal! 😅');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getQuote();
  }, [getQuote]);

  return (
    <div className="App">
      <video autoPlay muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className='inputContainer'>
        <h1>{loading ? 'Lädt...' : error ? error : quote}</h1>
        <button onClick={getQuote} disabled={loading}>
          {loading ? 'Lädt...' : 'CLICK HERE'}
        </button>
      </div>
    </div>
  );
}

export default App;
