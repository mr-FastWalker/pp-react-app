import './App.css'
import {useEffect} from "react";

const tg = window.Telegram.WebApp;

function App() {

  useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () => {
    tg.close();
  }

  return (
    <p>
      pp app 123
      <button onClick={onClose}>закрыть</button>
    </p>
  )
}

export default App
