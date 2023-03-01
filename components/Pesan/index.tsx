import { ContBg } from '../ContBg'
import styles from './style.module.css'

export const Pesan = () => {
  return (
    <>
      <ContBg title="Buku Kesan dan Pesan">
        <p className={styles.head}>Isi langsung atau scan QR di bawah!</p>
        <div className={styles.card}>
          <div className={styles.cont}>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSe1qelLWOLgEAAsd1GvYJrfyo6y1RXdMV62opczIoguq3_yaw/viewform?embedded=true"
              width="640"
              height="792"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              className={styles.iframe}
            >
              Loading...
            </iframe>
            <div className={styles.img_cont}>
              <div className={styles.qr}>
                <img
                  src="/img/others/buku_kesan_pesan_qr.png"
                  alt="Buku Kesan Pesan QR Code"
                  loading="lazy"
                  className={styles.img}
                />
              </div>
            </div>
          </div>
        </div>
      </ContBg>
    </>
  )
}
