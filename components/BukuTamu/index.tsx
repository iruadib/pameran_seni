import styles from './style.module.css'
import { ContBg } from '../ContBg'

export const BukuTamu = () => {
  return (
    <>
      <ContBg title="Buku Tamu">
        <p className={styles.head}>Isi langsung atau scan QR di bawah!</p>
        <div className={styles.card}>
          <div className={styles.cont}>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdBReoszg38wjxkx0-VkvbH8gS7ELZPoEJbNCUFla4n_pO5_w/viewform?embedded=true"
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
                  src="/img/others/buku_tamu_qr.png"
                  alt="Buku Tamu QR Code"
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
