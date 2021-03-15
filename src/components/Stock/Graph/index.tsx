//--------------------------------------------------------------------< hooks >
import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
//-------------------------------------------------------------------< styles >
import "./styles.css";
//--------------------------------------------------------------------< types >
import { RootState } from "../../../store";
type GraphProps = {
  chart: number[];
};
type ClassNameType = "increase" | "decrease" | "hidden";
interface StyleProps {
  top: string;
  left: string;
}
//================================================================[ < Graph > ]
export default function Graph({ chart }: GraphProps) {
  //-------------------------------------------------------------< properties >
  const { theme } = useSelector((state: RootState) => state.theme);
  //---------------------------------------------------------------------------
  const [className, setClassName] = useState<ClassNameType>("hidden");
  const [style, setStyle] = useState<StyleProps>();
  const [value, setValue] = useState(0);
  //----------------------------------------------------------------< methods >
  function onPopup(
    value: number,
    className: ClassNameType,
    x: number,
    y: number
  ) {
    setValue(value);
    setStyle({
      left: 100 * x + "%",
      top: 100 * y + "%",
    });
    setClassName(className);
  }
  //---------------------------------------------------------------------------
  const getThreshold = useCallback(
    function () {
      const _chart = [...chart];
      _chart.sort((a, b) => a - b);
      return [_chart[0] ?? 0, _chart.pop() ?? 0];
    },
    [chart]
  );

  const drawLines = useCallback(
    function () {
      const lines = [];

      const [min, max] = getThreshold();
      const span = max - min;
      const nLines = chart.length - 1;

      for (let i1 = 0, i2 = 1; i1 < nLines; i1++, i2++) {
        const y1 = 1 - (chart[i1] - min) / span;
        const y2 = 1 - (chart[i2] - min) / span;
        const className = y1 - y2 >= 0 ? "increase" : "decrease";

        lines.push(
          <svg
            key={i1}
            height="1"
            width="1"
            style={{ width: 100 / nLines + "%" }}
            onMouseEnter={() => onPopup(chart[i2], className, i2 / nLines, y2)}
            onMouseOut={() => setClassName("hidden")}
          >
            <line
              className={className}
              x1={"0%"}
              y1={`${100 * y1}%`}
              x2={"100%"}
              y2={`${100 * y2}%`}
            />
          </svg>
        );
      }

      return lines;
    },
    [chart, getThreshold]
  );
  //-----------------------------------------------------------------< return >
  return (
    <div className={`graph-container ${theme}`}>
      {drawLines()}
      <div className={`popup ${className}`} style={style}>
        R$ {value.toFixed(2)}
        <svg height="6" width="10">
          <path d="M5,6 L10,0 L0,0 Z" />
        </svg>
      </div>
    </div>
  );
}