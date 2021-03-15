import { useLocation } from 'react-router-dom';
import { IoMdArrowDropdown } from 'react-icons/io';

import styles from '../styles/components/Filter.module.css';

export function Filter({ filterOptions, onSelectFilter, activeFilter }) {
  const location = useLocation();
  const listedOptions = filterOptions.map((option) => {
    return (
      <li key={option.value}>
        <a
          href={location.pathname}
          onClick={() => onSelectFilter(option.label, option.value)}
        >
          {option.label}
        </a>
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
