import styles from './style.module.css'

export const Proposal = () => {
  return (
    <>
      <div className={styles.in}>
        <div className={styles.cont}>
          <div className={styles.header}>
            <h3 className={styles.title}>Proposal</h3>
          </div>
          <div className={styles.inner}>
            <iframe
              src="https://drive.google.com/file/d/1CZXMQDsQ70my87Qja4ZvZa7pnkm7gKkL/preview"
              width="100%"
              height="600px"
            />
          </div>
        </div>
      </div>
    </>
  )
}
