import { useState } from "react";

import styles from './style.module.css';

import Stocks from "../Stocks";

function Sidebar({ favorites }) {

  const [filter, setFilter] = useState("");

  return (
    <aside className={styles.sidebar}>

      <div className={styles.container_filter}>
        <select className={styles.filter} onChange={(e) => setFilter(e.target.value)}>
          <option defaultValue>Ordernar por</option>
          <option value="lowerPrice">Menor preço</option>
          <option value="greaterPrice">Maior preço</option>
          <option value="lowerVariation">Menor Variação</option>
          <option value="greaterVariation">Maior Variação</option>
        </select>
      </div>

      <Stocks filter={filter} favorites={favorites} />
    </aside>
  );
}

export default Sidebar;
