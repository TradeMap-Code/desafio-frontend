import { IoMdArrowDropdown } from 'react-icons/io';

import styles from '../styles/components/Filter.module.css';

export function Filter({ filterOptions, onSelectFilter, activeFilter }) {
  const listedOptions = filterOptions.map((option) => {
    return (
      <li key={option.value}>
        <button onClick={() => onSelectFilter(option.label, option.value)}>
          {option.label}
        </button>
      </li>
    );
  });

  return (
    <div className={styles.filterWrapper}>
      <div className={styles.filterOptions}>
        <label>
          {activeFilter.label} <IoMdArrowDropdown />
        </label>
        <ul>{listedOptions}</ul>
      </div>
    </div>
  );
}
