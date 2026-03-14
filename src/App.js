import { useCallback, useEffect, useState } from 'react';
import video from './intro.mp4';
import './App.css';

const activities = [
  { activity: "Lerne eine neue Programmiersprache", type: "education" },
  { activity: "Geh eine Stunde spazieren", type: "relaxation" },
  { activity: "Koche ein neues Rezept", type: "cooking" },
  { activity: "Lies 30 Minuten ein Buch", type: "education" },
  { activity: "Zeichne etwas", type: "creativity" },
  { activity: "Schreibe ein Tagebucheintrag", type: "relaxation" },
  { activity: "Ruf einen alten Freund an", type: "social" },
  { activity: "Mache 20 Minuten Yoga", type: "sport" },
  { activity: "Lerne 10 Wörter einer neuen Sprache", type: "education" },
  { activity: "Schaue eine Dokumentation", type: "relaxation" },
  { activity: "Räume dein Zimmer auf", type: "housework" },
  { activity: "Schreibe eine Kurzgeschichte", type: "creativity" },
  { activity: "Mache ein Puzzle", type: "relaxation" },
  { activity: "Lerne ein Musikinstrument", type: "music" },
  { activity: "Backe einen Kuchen", type: "cooking" },
  { activity: "Mache eine Fahrradtour", type: "sport" },
  { activity: "Schreibe einen Brief an dich selbst", type: "relaxation" },
  { activity: "Lerne wie man origami macht", type: "creativity" },
  { activity: "Mache ein digitales Kunstwerk", type: "creativity" },
  { activity: "Starte ein kleines Coding-Projekt", type: "education" },
];

function App() {
  const [quote, setQuote] = useState('');
  const [lastIndex, setLastIndex] = useState(null);

  const getQuote = useCallback(() => {
    let randomIndex;

    // Verhindert dass dieselbe Aktivität zweimal hintereinander kommt
    do {
      randomIndex = Math.floor(Math.random() * activities.length);
    } while (randomIndex === lastIndex);

    setLastIndex(randomIndex);
    setQuote(activities[randomIndex].activity);
  }, [lastIndex]);

  useEffect(() => {
    getQuote();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="App">
      <video autoPlay muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className='inputContainer'>
        <h1>{quote}</h1>
        <button onClick={getQuote}>CLICK HERE</button>
      </div>
    </div>
  );
}

export default App;
