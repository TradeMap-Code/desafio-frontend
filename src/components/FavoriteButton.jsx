import styles from '../styles/components/FavoriteButton.module.css';

export function FavoriteButton({ onButtonClick, company, buttonFavText }) {
  return (
    <div className={styles.buttonWrapper}>
      <button
        className={styles.favoriteButton}
        onClick={() => {
          onButtonClick(company);
        }}
      >
        {buttonFavText}
      </button>
    </div>
  );
}
