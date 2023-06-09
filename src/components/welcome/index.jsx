import Styles from './welcome.module.scss';
import Button from '../button/index';
import BannerWelcome from '/public/images/bannerWelcome.svg';
import Image from 'next/image';
import BannerPartner from '/public/images/casa.jpeg';
import { ScrollTo } from '../../utils/scrollTo';

const Welcome = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.text}>
        <h1>KNN idiomas nos dias dos namorados!! ❤</h1>
        <p>
          Mande uma mensagem nesse dia tão especial para a pessoa que você ama,
          ou até mesmo aquele crush secreto. Ao mandar a mensagem, mandaremos a
          mensagem na língua desejada para o seu love.
        </p>
        <Button
          title="Mandar Mensagem 💘"
          kind="secundary"
          onClick={() => ScrollTo('contato')}
        />
      </div>
      <div className={Styles.image}>
        <Image src={BannerWelcome} alt="Banner Welcome" />
      </div>
      {/* <div>
        <Image src={BannerPartner} alt="Casa Café e Restaurante!" />
      </div> */}
    </div>
  );
};

export default Welcome;
