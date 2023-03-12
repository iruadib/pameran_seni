import { CSSProperties, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import styles from './style.module.css'

export const Carousel = () => {
  const [timer, setTimer] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [isChange, setIsChange] = useState(false)
  const listRef = useRef<null | HTMLUListElement>(null)
  const interval = useRef<null | NodeJS.Timer>(null)
  const idx = useRef<null | number>(0)
  useEffect(() => {
    setLoaded(true)
    if (idx && listRef) {
      const children = listRef.current!.children
      const handleTimer = () => {
        interval.current = setInterval(() => {
          setIsChange(true)
          setTimeout(() => {
            setIsChange(false)
          }, 600)
          // setIdx((prev) => (prev + 1 < children.length ? prev + 1 : 0))
          idx.current =
            idx.current! + 1 < children.length ? idx.current! + 1 : 0
          // idx.current = idx.current === 0 ? 1 : 0
          // console.log(idx.current)
          for (let i = 0; i < children.length; i++) {
            children.item(i)?.classList.remove(styles.current)
          }
          children.item(idx.current)?.classList.add(styles.current)
        }, 7500)
      }
      if (timer === 0) {
        handleTimer()
      }
    }
  }, [timer])
  return (
    <>
      <div
        className={`${styles.main} ${loaded && styles.loaded} ${
          isChange ? styles.is_change : ''
        }`}
      >
        <div className={styles.cont}>
          <div className={styles.carousel}>
            <div className={styles.sub_cont}>
              <div
                className={styles.slides}
                style={{ '--kv_slice': 3 } as CSSProperties}
              >
                <ul className={styles.list} ref={listRef}>
                  <li className={`${styles.item} ${styles.current}`}>
                    <div className={styles.data}>
                      <div className={styles.data_cursor}>
                        <div className={styles.cursor_deco}></div>
                      </div>
                      <div className={styles.data_list}>
                        <Link
                          href="/katalog"
                          className={styles.data_item}
                          data-visual="ma"
                        >
                          <div
                            className={`${styles.data_visual} ${styles._img1}`}
                          >
                            <figure className={styles.visual_img}>
                              <img
                                src="/img/visuals/Melankolia_Art.jpeg"
                                alt=""
                                className={styles.visual_source}
                              />
                            </figure>
                          </div>
                          <div
                            className={`${styles.data_visual} ${styles._img2}`}
                          >
                            <figure className={styles.visual_img}>
                              <img
                                src="/img/visuals/Melankolia_Art.jpeg"
                                alt=""
                                className={styles.visual_source}
                              />
                            </figure>
                          </div>
                          <div
                            className={`${styles.data_visual} ${styles._img3}`}
                          >
                            <figure className={styles.visual_img}>
                              <img
                                src="/img/visuals/Melankolia_Art.jpeg"
                                alt=""
                                className={styles.visual_source}
                              />
                            </figure>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li className={`${styles.item}`}>
                    <div className={`${styles.data} ${styles._slice}`}>
                      <div className={styles.data_list}>
                        <Link
                          href="/katalog"
                          className={styles.data_item}
                          data-visual="cd"
                        >
                          <div className={styles.data_cursor}>
                            <div className={styles.cursor_deco}></div>
                          </div>
                          <div className={styles.data_visual}>
                            <figure className={styles.visual_img}>
                              <picture>
                                <source
                                  srcSet="/img/visuals/Candy_girl.jpeg"
                                  media="(max-width: 960px)"
                                />
                                <img
                                  src="/img/visuals/Candy_girl.jpeg"
                                  alt=""
                                  className={styles.visual_source}
                                />
                              </picture>
                            </figure>
                          </div>
                        </Link>
                        <Link
                          href="/katalog"
                          className={styles.data_item}
                          data-visual="dg"
                        >
                          <div className={styles.data_cursor}>
                            <div className={styles.cursor_deco}></div>
                          </div>
                          <div className={styles.data_visual}>
                            <figure className={styles.visual_img}>
                              <picture>
                                <source
                                  srcSet="/img/visuals/Demon_girl.jpeg"
                                  media="(max-width: 960px)"
                                />
                                <img
                                  src="/img/visuals/Demon_girl.jpeg"
                                  alt=""
                                  className={styles.visual_source}
                                />
                              </picture>
                            </figure>
                          </div>
                        </Link>
                        <Link
                          href="/katalog"
                          className={styles.data_item}
                          data-visual="sn"
                        >
                          <div className={styles.data_cursor}>
                            <div className={styles.cursor_deco}></div>
                          </div>
                          <div className={styles.data_visual}>
                            <figure className={styles.visual_img}>
                              <picture>
                                <source
                                  srcSet="/img/visuals/Starry_night.jpeg"
                                  media="(max-width: 960px)"
                                />
                                <img
                                  src="/img/visuals/Starry_night.jpeg"
                                  alt=""
                                  className={styles.visual_source}
                                />
                              </picture>
                            </figure>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li className={`${styles.item} `}>
                    <div className={styles.data}>
                      <div className={styles.data_cursor}>
                        <div className={styles.cursor_deco}></div>
                      </div>
                      <div className={styles.data_list}>
                        <Link
                          href="/katalog"
                          className={styles.data_item}
                          data-visual="cg"
                        >
                          <div
                            className={`${styles.data_visual} ${styles._img1}`}
                          >
                            <figure className={styles.visual_img}>
                              <img
                                src="/img/visuals/Chill Girl.jpeg"
                                alt=""
                                className={styles.visual_source}
                              />
                            </figure>
                          </div>
                          <div
                            className={`${styles.data_visual} ${styles._img2}`}
                          >
                            <figure className={styles.visual_img}>
                              <img
                                src="/img/visuals/Chill Girl.jpeg"
                                alt=""
                                className={styles.visual_source}
                              />
                            </figure>
                          </div>
                          <div
                            className={`${styles.data_visual} ${styles._img3}`}
                          >
                            <figure className={styles.visual_img}>
                              <img
                                src="/img/visuals/Chill Girl.jpeg"
                                alt=""
                                className={styles.visual_source}
                              />
                            </figure>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li className={`${styles.item}`}>
                    <div className={`${styles.data} ${styles._slice}`}>
                      <div className={styles.data_list}>
                        <Link
                          href="/katalog"
                          className={styles.data_item}
                          data-visual="cd"
                        >
                          <div className={styles.data_cursor}>
                            <div className={styles.cursor_deco}></div>
                          </div>
                          <div className={styles.data_visual}>
                            <figure className={styles.visual_img}>
                              <picture>
                                <source
                                  srcSet="/img/visuals/An_eye.jpeg"
                                  media="(max-width: 960px)"
                                />
                                <img
                                  src="/img/visuals/An_eye.jpeg"
                                  alt=""
                                  className={styles.visual_source}
                                />
                              </picture>
                            </figure>
                          </div>
                        </Link>
                        <Link
                          href="/katalog"
                          className={styles.data_item}
                          data-visual="dg"
                        >
                          <div className={styles.data_cursor}>
                            <div className={styles.cursor_deco}></div>
                          </div>
                          <div className={styles.data_visual}>
                            <figure className={styles.visual_img}>
                              <picture>
                                <source
                                  srcSet="/img/visuals/Alley_of_silence.jpeg"
                                  media="(max-width: 960px)"
                                />
                                <img
                                  src="/img/visuals/Alley_of_silence.jpeg"
                                  alt=""
                                  className={styles.visual_source}
                                />
                              </picture>
                            </figure>
                          </div>
                        </Link>
                        <Link
                          href="/katalog"
                          className={styles.data_item}
                          data-visual="sn"
                        >
                          <div className={styles.data_cursor}>
                            <div className={styles.cursor_deco}></div>
                          </div>
                          <div className={styles.data_visual}>
                            <figure className={styles.visual_img}>
                              <picture>
                                <source
                                  srcSet="/img/visuals/Beautiful_chopstick.jpeg"
                                  media="(max-width: 960px)"
                                />
                                <img
                                  src="/img/visuals/Beautiful_chopstick.jpeg"
                                  alt=""
                                  className={styles.visual_source}
                                />
                              </picture>
                            </figure>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className={styles.footer}>
                  <div className={styles.bar}>
                    <div className={styles.bar_line}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
