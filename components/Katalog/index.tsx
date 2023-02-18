import { ContBg } from '../ContBg'
import { katalogList } from './katalogList'
import styles from './style.module.css'

export const Katalog = () => {
  return (
    <>
      <ContBg title="Katalog">
        <div className={`${styles.cont} ${styles.entered}`}>
          <ul className={styles.list}>
            {katalogList.map((item) => (
              <>
                <li className={styles.item}>
                  <button className={styles.card}>
                    <div className={styles.cursor}>
                      <div className={styles.deco}></div>
                    </div>
                    <div className={styles.blur_cont}>
                      <img
                        src={item.img}
                        alt={item.name}
                        loading="lazy"
                        width="500"
                        height="500"
                        className={styles.blur_bg}
                      />
                    </div>
                    <div className={styles.thumb}>
                      <img
                        src={item.img}
                        alt={item.name}
                        loading="lazy"
                        width="500"
                        height="500"
                        className={styles.img}
                      />
                    </div>
                    <div className={styles.name}>
                      <div className={styles.icon}>
                        <svg
                          className={styles.svg}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 13.3 25.6"
                        >
                          <polygon
                            className={styles.arrow}
                            points="13.3,12.8 13.3,12.8 13.3,12.8 2.9,25.6 1.9,24.5 11.3,12.8 1.9,1.1 2.9,0 13.3,12.8 13.3,12.8	13.3,12.8 "
                          ></polygon>
                          <polygon
                            className={styles.dot}
                            points="3.1,9.4 6.3,12.8 3.1,16.2 0,12.8 "
                          ></polygon>
                        </svg>
                      </div>
                      <div className={styles.text}>{item.name}</div>
                    </div>
                  </button>
                </li>
              </>
            ))}
          </ul>
        </div>
        {/* <div className={styles.card}>
          <img
            src="/img/pranko_card.jpeg"
            alt="Old Memories"
            className={styles.img}
            loading="lazy"
          />
          <p>Prangko</p>
        </div> */}
      </ContBg>
    </>
  )
}
