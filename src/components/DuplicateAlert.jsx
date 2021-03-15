import styles from '../styles/components/DuplicateAlert.module.css';

export function DuplicatedAlert({ setIsNotDuplicated, isNotDuplicated }) {
  const displayBox = isNotDuplicated && 'none';
  return (
    <div className={styles.overlay} style={{ display: displayBox }}>
      <div className={styles.alertWrapper}>
        <h1>ALERTA</h1>
        <p>Esta ação já foi adicionada a lista de favotios.</p>
        <button type='button' onClick={() => setIsNotDuplicated(true)}>
          Entendi
        </button>
      </div>
    </div>
  );
}
