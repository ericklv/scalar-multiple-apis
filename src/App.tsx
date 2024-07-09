import "./App.css";
import Router from "./router";
import { company as co } from "./config";
import { useEffect } from 'react';
import { getTMode, getDLS, setKeyLS } from './components/utils';

interface HTMLInputElementX extends Omit<HTMLInputElement, "href"> {
  href: string;
}

function App() {

  useEffect(() => {
    const favicon_ = async () => {
      const favicon = document.getElementById("favicon") as HTMLInputElementX;
      if (co.favicon) favicon.href = co.favicon;
      else if (co.logo) favicon.href = co.logo;
    };

    const setTheme = async () => {
      const isDark = getDLS();
      const theme = getTMode(isDark);
      const body = document.getElementById("bd-theme");
      if (body) {
        body.classList.add(theme);
        setKeyLS("isDark", isDark)
      }
    }

    setTheme();
    favicon_();
    document.title = co.title || co.name + "Docs";
  }, []);

  return <Router />;
}

export default App;