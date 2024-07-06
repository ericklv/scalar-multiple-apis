import './App.css'
import Router from './router';
import { useEffect } from 'react';
import { company as co } from './docs';

function App() {
  useEffect(() => {
    const favicon_ = async () => {
      const favicon = document.getElementById('favicon');
      if(!!co.favicon) favicon.href = co.favicon
      else if(!!co.logo) favicon.href = co.logo
    };

    favicon_();
    document.title = co.title;
  }, []);

  return (
      <Router />
  )
}

export default App
