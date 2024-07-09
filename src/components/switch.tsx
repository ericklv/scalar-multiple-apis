import { ThemeProps } from "../ts/types";
import { FunctionComponent } from "react";

const Switch: FunctionComponent<ThemeProps> = (props: ThemeProps) => {
  const hChange = () => {
    props.setIsDark(!props.isDark);
  };

  return (
    <div className="toogle-fixed">
      <div className="toggle-switch">
        <label className="switch-label">
          <input
            type="checkbox"
            className="checkbox"
            defaultChecked={props.isDark}
            onChange={hChange}
          />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
};

export default Switch;
