const matches = ({ matches }: { matches: any }) => matches ? "dark" : "light";
const wmm = window.matchMedia("(prefers-color-scheme: dark)")
const p = (v: any) => { console.log(v); return v };

export const getKeyLS = (v: string) => localStorage[v];
export const setKeyLS = (k: string, v: any) => localStorage[k] = v;
export const remKeyLS = (k: string) => localStorage.removeItem(k)

export const getSColor = () => matches(wmm);
export const isDark = (v: string) => v.split("-")[0] == "dark"

export const getDLS = () => (getKeyLS("isDark") === undefined) ? p(getSColor() === "dark") : getKeyLS("isDark") === "true";
export const getTMode = (v:boolean) => (v ? "dark" : "light") + "-mode";