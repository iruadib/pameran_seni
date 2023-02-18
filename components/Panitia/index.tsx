import { ContBg } from '../ContBg'
import styles from './style.module.css'

export const Panitia = () => {
  return (
    <>
      <ContBg title="Panitia">
        <ul className={styles.list}>
          <li className={styles.item}>
            <div className={styles.jabatan}>Pembina</div>
            <div className={styles.nama}>Drs. Sudiharto, M.A.P.</div>
          </li>
          <li className={styles.item}>
            <div className={styles.jabatan}>Penanggung Jawab</div>
            <div className={styles.nama}>Pramita Apriliyana, S.Pd.</div>
          </li>
          <li className={styles.item}>
            <div className={styles.jabatan}>Ketua</div>
            <div className={styles.nama}>Khoirul Adib Fairuza</div>
          </li>
          <li className={styles.item}>
            <div className={styles.jabatan}>Wakil Ketua</div>
            <div className={styles.nama}>Muhammad Maula Khadavi</div>
          </li>
          <li className={styles.item}>
            <div className={styles.jabatan}>Sekretaris</div>
            <div className={styles.nama}>Zahira Maulidina Nur Adzra</div>
          </li>
          <li className={styles.item}>
            <div className={styles.jabatan}>Bendahara</div>
            <div className={styles.nama}>Diva Edenia</div>
          </li>
          <li className={styles.item}>
            <div className={styles.jabatan}>Seksi Acara</div>
            <div className={styles.nama}>Diva Edenia</div>
          </li>
          <li className={styles.item}>
            <div className={styles.jabatan}>Seksi Dekdok</div>
            <div className={styles.nama}>Nayla Atha Fadilah</div>
          </li>
          <li className={styles.item}>
            <div className={styles.jabatan}>
              Seksi Pengumpulan dan Seleksi Karya
            </div>
            <div className={styles.nama}>Muhammad Maula Khadavi</div>
          </li>
          <li className={styles.item}>
            <div className={styles.jabatan}>Seksi Perlengkapan</div>
            <div className={styles.nama}>Windari Brilliani Prasasti</div>
          </li>
          <li className={styles.item}>
            <div className={styles.jabatan}>Seksi Keamanan</div>
            <div className={styles.nama}>Muhammad Firmansyah</div>
          </li>
        </ul>
      </ContBg>
    </>
  )
}
