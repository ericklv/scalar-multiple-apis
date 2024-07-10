import { ThemeProps } from "../ts/types";

const Switch = ({ isDark, setIsDark }: ThemeProps) => {
  const hChange = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="toogle-fixed">
      <div className="toggle-switch">
        <label className="switch-label">
          <input
            type="checkbox"
            className="checkbox"
            defaultChecked={isDark}
            onChange={hChange}
          />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
};

export default Switch;
