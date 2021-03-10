import styles from '../styles/components/Filter.module.css';
import { IoMdArrowDropdown } from 'react-icons/io';

export function Filter({ options, onSelectFilter }) {
  const listedOptions = options.map((option) => {
    return (
      <li key={option.value}>
        <a href='/#' onClick={() => onSelectFilter(option.value)}>
          {option.label}
        </a>
      </li>
    );
  });

  return (
    <div className={styles.filterWrapper}>
      <div className={styles.filterOptions}>
        <label>
          Escolha um filtro <IoMdArrowDropdown />
        </label>
        <ul>{listedOptions}</ul>
      </div>
    </div>
  );
}
