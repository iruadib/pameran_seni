import styles from './style.module.css'

export const Poster = () => {
  return (
    <>
      <div className={styles.in}>
        <div className={styles.cont}>
          <div className={styles.header}>
            <h3 className={styles.title}>Poster</h3>
          </div>
          <div className={styles.inner}>
            <div className={styles.card}>
              <img
                src="/img/poster.jpeg"
                alt="Menghello"
                className={styles.img}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
