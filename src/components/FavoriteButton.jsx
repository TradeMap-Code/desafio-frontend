import styles from '../styles/components/FavoriteButton.module.css';

export function FavoriteButton({ onButtonClick, company }) {
  return (
    <div className={styles.buttonWrapper}>
      <button
        className={styles.favoriteButton}
        onClick={() => {
          console.log(onButtonClick);
          onButtonClick(company);
        }}
      >
        Favoritar
      </button>
    </div>
  );
}
