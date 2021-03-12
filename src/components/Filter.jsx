import styles from '../styles/components/Filter.module.css';
import { IoMdArrowDropdown } from 'react-icons/io';

export function Filter({
  filterOptions,
  onSelectFilter,
  activeFilter,
  activePage,
}) {
  const listedOptions = filterOptions.map((option) => {
    return (
      <li key={option.value}>
        <a href='/#' onClick={() => onSelectFilter(option.label, option.value)}>
          {option.label}
        </a>
      </li>
    );
  });

  return (
    <div className={styles.filterWrapper}>
      <h1>{activePage === 'list' ? 'Lista de Ações' : 'Ações Favoritas'}</h1>
      <div className={styles.filterOptions}>
        <label>
          {activeFilter.label} <IoMdArrowDropdown />
        </label>
        <ul>{listedOptions}</ul>
      </div>
    </div>
  );
}
