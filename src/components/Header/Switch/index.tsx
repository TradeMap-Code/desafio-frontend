//--------------------------------------------------------------------< hooks >
import { useDispatch, useSelector } from "react-redux";
//--------------------------------------------------------------------< redux >
import { switchTheme } from "../../../store/theme/actions";
//-------------------------------------------------------------------< styles >
import "./styles.css";
//--------------------------------------------------------------------< types >
import { RootState } from "../../../store";
interface SwitchProps {
  size: number;
}
//===============================================================[ < Switch > ]
export function Switch({ size }: SwitchProps) {
  //-------------------------------------------------------------< properties >
  const { theme } = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();
  //----------------------------------------------------------------< methods >
  function onSwitchTheme() {
    switch (theme) {
      case "white-theme":
        dispatch(switchTheme("black-theme"));
        break;
      case "black-theme":
        dispatch(switchTheme("white-theme"));
        break;
      default:
        break;
    }
  }
  //-----------------------------------------------------------------< return >
  return (
    <button
      type="button"
      className={`switch-container ${theme}`}
      onClick={onSwitchTheme}
      style={{ width: size + "rem", height: size / 2 + "rem" }}
    >
      <div className="ball" />
    </button>
  );
}
