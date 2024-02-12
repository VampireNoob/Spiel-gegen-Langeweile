import { useCallback, useEffect, useState } from 'react';
import video from './intro.mp4'
import './App.css';

function App() {

  const [quote, setQuote] = useState('');

  const getQuote = useCallback(async () => {
    const response = await fetch(`http://www.boredapi.com/api/activity/ `);
      const data = await response.json();
      console.log(data)
      setQuote(data.activity)
  }, [])

  useEffect(() => {
    getQuote()
  }, [getQuote])


  return (
    <div className="App">
      <video autoPlay muted>
        <source src={video} type="video/mp4" />
      </video>

      <div className='inputContainer'>
          <h1>{ quote }</h1>
        <button onClick={getQuote}>CLICK HERE</button>
      </div>
    </div>
  );
}

export default App;