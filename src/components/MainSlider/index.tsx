/* eslint-disable @typescript-eslint/no-unused-vars */
import styles from './styles.module.scss';
import imageExample from '../../assets/image-48.png';

export function MainSlider() {
  return (
    <div
      className={styles.mainImageBackground}
      style={{ backgroundImage: `url(${imageExample})` }}
    >
      <div className={styles.shadowMask}>
        <div className={styles.opacityMask}>
          <div className={styles.mainSliderContainer}>
            <h1>As melhores guias para os melhores passeios.</h1>

            <a href="/">CONFIRA</a>
          </div>

          <div className={styles.caretLeft}>
            <h1>{'<'}</h1>
          </div>

          <div className={styles.caretRight}>
            <h1>{'>'}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
