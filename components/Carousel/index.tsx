import { CSSProperties } from 'react'
import styles from './style.module.css'

export const Carousel = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.cont}>
          <div className={styles.carousel}>
            <div className={styles.sub_cont}>
              <div
                className={styles.slides}
                style={{ '--kv_slice': 3 } as CSSProperties}
              >
                <ul className={styles.list}>
                  <li className={`${styles.item} ${styles.current}`}>
                    <div className={`${styles.data} ${styles._slice}`}>
                      <div className={styles.data_list}>
                        <div className={styles.data_item}>
                          {/* <div className="p-kv_data__cursor">
                            <div className="p-kv_data__cursor-deco"></div>
                          </div> */}
                          <div
                            className={styles.data__visual}
                            data-modal-open="img:/assets/img/top/kv/kv_2b_c.jpg"
                          >
                            <figure className={styles.visual_img}>
                              <picture>
                                <source
                                  srcSet="/img/carousel/kv_2b_up.jpg"
                                  media="(max-width: 960px)"
                                />
                                <img
                                  src="/img/carousel/kv_2b.jpg"
                                  alt=""
                                  className="p-kv_data__visual-source"
                                />
                              </picture>
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
