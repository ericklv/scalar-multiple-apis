import './App.css'
import Router from './router';
import { useEffect } from 'react';
import co from './docs/company.json'

function App() {
  useEffect(() => {
    document.title = co.title;
  }, []);

  return (
    <Router/>
  )
}

export default App
