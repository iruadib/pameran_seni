import styles from './style.module.css'

export const Katalog = () => {
  return (
    <>
      <div className={styles.in}>
        <div className={styles.cont}>
          <div className={styles.header}>
            <h3 className={styles.title}>Katalog</h3>
          </div>
          <div className={styles.inner}>
            <div className={styles.card}>
              <img
                src="/img/pranko_card.jpeg"
                alt="Menghello"
                className={styles.img}
              />
              <p>Prangko</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
