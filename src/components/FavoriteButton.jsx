import { useState } from 'react';
import styles from '../styles/components/FavoriteButton.module.css';

export function FavoriteButton({ onButtonClick, company, buttonFavText }) {
  const [buttonText, setButtonText] = useState(buttonFavText); 
  const originalButtonText = buttonText === buttonFavText;

  function setNewButtonText() {
    originalButtonText && setButtonText('favorito');
  }
  return (
    <div className={styles.buttonWrapper}>
      <button
        className={originalButtonText ? styles.favoriteButton : styles.favoritedButton}
        onClick={() => {
          onButtonClick(company);
          setNewButtonText();
        }}
      >
        {buttonText}
      </button>
    </div>
  );
}
