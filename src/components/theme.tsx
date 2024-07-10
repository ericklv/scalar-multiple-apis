import { FC, useEffect, useState } from "react";
import { company as co } from "../config";
import { getTMode, getDLS, setKeyLS } from "./utils";
import { HTMLInputElementX, Props } from "../ts/interfaces";
import Switch from "./switch";

const Theme: FC<Props> = ({ children }) => {
  const [isDark, setIsDark] = useState(getDLS());

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
        setKeyLS("isDark", isDark);
      }
      setIsDark(isDark);
    };

    setTheme();
    favicon_();
    document.title = co.title || co.name + "Docs";
  }, []);

  useEffect(() => {
    if (isDark !== undefined) {
      const body = document.getElementById("bd-theme");
      if (body) {
        body.classList.remove(getTMode(!isDark));
        body.classList.add(getTMode(!!isDark));
        setKeyLS("isDark", isDark);
      }
    }
  }, [isDark]);

  return (
    <>
      <Switch isDark={isDark} setIsDark={setIsDark} />
      {children}
    </>
  );
};

export default Theme;
