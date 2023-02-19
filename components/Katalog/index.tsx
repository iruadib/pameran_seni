import { useEffect, useState } from 'react'
import { ContBg } from '../ContBg'
import { motion, AnimatePresence } from 'framer-motion'
import { katalogList, KatalogProps, mainKatalog } from './katalogList'
import styles from './style.module.css'

export const Katalog = () => {
  const [selected, setSelected] = useState<null | string>(null)
  const [item, setItem] = useState<null | KatalogProps>(null)

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === 'Esc' || e.key === 'Escape') {
        setSelected(null)
        setItem(null)
      }
    }
    if (selected) {
      document.querySelector('body')?.classList.add('scroll-hide')
      window.addEventListener('keydown', close)
    }
    return () => {
      document.querySelector('body')?.classList.remove('scroll-hide')
      window.removeEventListener('keydown', close)
    }
  }, [selected])

  const handleClose = () => {
    setItem(null)
    setSelected(null)
  }
  return (
    <>
      <ContBg title="Katalog">
        <div className={`${styles.cont} ${styles.entered}`}>
          <motion.div className={styles.main} layoutId={mainKatalog.name}>
            <motion.div className={styles.item}>
              <motion.button
                className={styles.card}
                onClick={() => {
                  setSelected(mainKatalog.name)
                  setItem(mainKatalog)
                }}
              >
                <motion.div className={styles.cursor}>
                  <motion.div className={styles.deco}></motion.div>
                </motion.div>
                <motion.div className={styles.thumb}>
                  <img
                    src={mainKatalog.img}
                    alt={mainKatalog.name}
                    loading="lazy"
                    width="500"
                    height="500"
                    className={styles.img}
                  />
                </motion.div>
                <motion.div className={styles.name}>
                  <motion.div className={styles.icon}>
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
                  </motion.div>
                  <motion.div className={styles.text}>
                    {mainKatalog.name}
                  </motion.div>
                </motion.div>
              </motion.button>
            </motion.div>
          </motion.div>
          <ul className={styles.list}>
            {katalogList.map((item) => (
              <motion.li
                layoutId={item.name}
                className={styles.item}
                key={item.name}
              >
                <motion.button
                  className={styles.card}
                  onClick={() => {
                    setSelected(item.name)
                    setItem(item)
                  }}
                >
                  <motion.div className={styles.cursor}>
                    <motion.div className={styles.deco}></motion.div>
                  </motion.div>
                  <motion.div className={styles.thumb}>
                    <img
                      src={item.img}
                      alt={item.name}
                      loading="lazy"
                      width="500"
                      height="500"
                      className={styles.img}
                    />
                  </motion.div>
                  <motion.div className={styles.name}>
                    <motion.div className={styles.icon}>
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
                    </motion.div>
                    <motion.div className={styles.text}>{item.name}</motion.div>
                  </motion.div>
                </motion.button>
              </motion.li>
            ))}
          </ul>
          <AnimatePresence>
            {selected && item && (
              <motion.div layoutId={selected} className={styles.modal}>
                <motion.div className={styles.modal_detail}>
                  <motion.div className={styles.modal_header}>
                    <motion.div className={styles.modal_visual}>
                      <img
                        src={item.img}
                        alt={item.name}
                        className={styles.modal_img}
                      />
                    </motion.div>
                  </motion.div>
                  <motion.div className={styles.modal_info}>
                    <motion.div className={styles.info_header}>
                      <motion.div className={styles.info_name}>
                        {item.name}
                      </motion.div>
                      <motion.div
                        className={styles.info_maker}
                        data-prefix="By "
                      >
                        {item.pembuat}
                      </motion.div>
                    </motion.div>
                    <motion.div className={styles.info_catalog}>
                      <motion.div className={styles.catalog}>
                        <motion.div className={styles.catalog_header}>
                          DATA
                        </motion.div>
                        <motion.div className={styles.catalog_inner}>
                          <motion.div className={styles.catalog_data}>
                            <motion.div className={styles.data_cap}>
                              Tipe
                            </motion.div>
                            <motion.div className={styles.data_text}>
                              {item.type}
                            </motion.div>
                          </motion.div>
                          <motion.div className={styles.catalog_data}>
                            <motion.div className={styles.data_cap}>
                              Tanggal Pembuatan
                            </motion.div>
                            <motion.div className={styles.data_text}>
                              {item.tanggal}
                            </motion.div>
                          </motion.div>
                          <motion.div className={styles.catalog_data}>
                            <motion.div className={styles.data_cap}>
                              Panjang
                            </motion.div>
                            <motion.div className={styles.data_text}>
                              {item.panjang}
                            </motion.div>
                          </motion.div>
                          <motion.div className={styles.catalog_data}>
                            <motion.div className={styles.data_cap}>
                              Lebar
                            </motion.div>
                            <motion.div className={styles.data_text}>
                              {item.lebar}
                            </motion.div>
                          </motion.div>
                          {item.type === '3D' && (
                            <motion.div className={styles.catalog_data}>
                              <motion.div className={styles.data_cap}>
                                Tinggi
                              </motion.div>
                              <motion.div className={styles.data_text}>
                                {item.tinggi}
                              </motion.div>
                            </motion.div>
                          )}
                        </motion.div>
                      </motion.div>
                    </motion.div>
                    <motion.button
                      onClick={handleClose}
                      className={styles.modal_btn}
                    >
                      <motion.div className={styles.btn_text}>Tutup</motion.div>
                      <motion.div className={styles.btn_icon}>
                        <svg
                          className={styles.btn_svg}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 13.3 25.6"
                        >
                          <polygon
                            className={styles.btn_arrow}
                            points="13.3,12.8 13.3,12.8 13.3,12.8 2.9,25.6 1.9,24.5 11.3,12.8 1.9,1.1 2.9,0 13.3,12.8 13.3,12.8	13.3,12.8 "
                          ></polygon>
                          <polygon
                            className={styles.btn_dot}
                            points="3.1,9.4 6.3,12.8 3.1,16.2 0,12.8 "
                          ></polygon>
                        </svg>
                      </motion.div>
                    </motion.button>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </ContBg>
    </>
  )
}
