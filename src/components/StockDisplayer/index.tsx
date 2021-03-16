//---------------------------------------------------------------< interfaces >
import IStock from "../../interfaces/IStock";
//---------------------------------------------------------------< components >
import Stock from "../Stock";
//--------------------------------------------------------------------< hooks >
import { useSelector } from "react-redux";
import { useState, useCallback, useMemo } from "react";
//-------------------------------------------------------------------< styles >
import "./styles.css";
//--------------------------------------------------------------------< types >
import { RootState } from "../../store";
import { useScroll } from "../../hooks/useScroll";
interface StockDisplayerProps {
  stocks: IStock[];
  placeholder: string;
}
//=======================================================[ < StockDisplayer > ]
export default function StockDisplayer({
  stocks,
  placeholder,
}: StockDisplayerProps) {
  //-------------------------------------------------------------< properties >
  const { theme } = useSelector((state: RootState) => state.theme);
  //---------------------------------------------------------------------------
  const [type, setType] = useState<"Preço" | "Variação">("Preço");
  const [order, setOrder] = useState<"decrescente" | "crescente">(
    "decrescente"
  );
  //---------------------------------------------------------------------------
  const scroll = useScroll({ wait: 500 });
  //---------------------------------------------------------------------------
  const isControllerHidden = useMemo(() => scroll.direction === "down", [
    scroll,
  ]);
  //----------------------------------------------------------------< methods >
  const sortStocks = useCallback(
    (stocks: IStock[]) => {
      const array = [...stocks];
      const key = type === "Preço" ? "price" : "variation";
      const one = order === "decrescente" ? -1 : 1;

      array.sort((a, b) => a[key] * one - b[key] * one);

      return array;
    },
    [type, order]
  );
  //---------------------------------------------------------------------------
  function onClickType() {
    setType(type === "Preço" ? "Variação" : "Preço");
  }

  function onClickOrder() {
    setOrder(order === "decrescente" ? "crescente" : "decrescente");
  }
  //-----------------------------------------------------------------< return >
  return (
    <main className={`stock-displayer-container ${theme}`}>
      {stocks.length ? (
        <>
          <span className={isControllerHidden ? "hidden" : "visible"}>
            <p>Ordenar por</p>
            <strong className="type" onClick={onClickType}>
              {type}
            </strong>
            <strong className="order" onClick={onClickOrder}>
              {order}
            </strong>
          </span>
          <ul>
            {sortStocks(stocks).map((stock, index) => (
              <Stock key={index} stock={stock} />
            ))}
          </ul>
        </>
      ) : (
        <p>{placeholder}</p>
      )}
    </main>
  );
}
