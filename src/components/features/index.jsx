import Image from 'next/image';
import Styles from './features.module.scss';
import Icon from '/public/images/icon.svg';

const Features = () => {
  return (
    <div className={Styles.container} id="details">
      <h1>Somos diferentes de verdade.</h1>
      <p>
        Conheça nossos maiores diferenciais e veja porque a KNN é uma das
        maiores escolas de idiomas do país.
      </p>

      <div className={Styles.features}>
        <div className={Styles.feature}>
          <Image src={Icon} alt="Icon" className={Styles.icon} />
          <h1>Conversação imediata.</h1>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p> */}
        </div>
        <div className={Styles.feature}>
          <Image src={Icon} alt="Icon" className={Styles.icon} />
          <h1>Reforço pedagógico gratuito.</h1>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p> */}
        </div>
        <div className={Styles.feature}>
          <Image src={Icon} alt="Icon" className={Styles.icon} />
          <h1>Material didático atualizado anualmente.</h1>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p> */}
        </div>
        <div className={Styles.feature}>
          <Image src={Icon} alt="Icon" className={Styles.icon} />
          <h1>Metodologia criada para quem fala português.</h1>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Features;
