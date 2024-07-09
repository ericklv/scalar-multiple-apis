import { Dispatch, SetStateAction } from "react";

export interface ThemeProps {
  isDark: boolean;
  setIsDark: Dispatch<SetStateAction<boolean>>;
}
