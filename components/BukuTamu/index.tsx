import styles from './style.module.css'
import { ContBg } from '../ContBg'

export const BukuTamu = () => {
  return (
    <>
      <ContBg title="Buku Tamu">
        <p className={styles.head}>Isi langsung atau scan QR di bawah!</p>
        <div className={styles.card}>
          <div className={styles.cont}>
            <div
              data-tf-widget="rpvYfdP8"
              data-tf-opacity="100"
              data-tf-hide-headers
              data-tf-iframe-props="title=Buku Tamu"
              data-tf-transitive-search-params
              data-tf-medium="snippet"
              style={{ width: '100%', height: '500px' }}
            ></div>
            {/* <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdBReoszg38wjxkx0-VkvbH8gS7ELZPoEJbNCUFla4n_pO5_w/viewform?embedded=true"
              width="640"
              height="792"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              className={styles.iframe}
            >
              Loading...
            </iframe> */}
            <div className={styles.img_cont}>
              <div className={styles.qr}>
                <img
                  src="/img/others/buku_tamu_qr_2.png"
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
