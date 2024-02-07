import Image from 'next/image';
import Logo from '/public/images/logo.svg';
import Styles from './header.module.scss';
import Button from '../button';
import { ScrollTo } from '../../utils/scrollTo';
import KnnLogo from '/public/images/knn-logo.png';
import WhatsappLogo from '/public/images/whatsapp-logo.png'

const Header = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.logotipo}>
        <Image src={KnnLogo} alt="KNN Logo" />
      </div>
      <div className={Styles.menu}>
        {/* <Link href="/">Home</Link>
        <Link href="/">Quem Somos?</Link>
        <Link href="/">Cases</Link> */}
        {/* <text>Promoção do Dia dos Namorados KNN Idiomas ❤</text> */}
      </div>
      <div className={Styles.action}>

        <Button
        // src={<Image src={WhatsappLogo} alt='whatsappLogo' width={45} height={40} />}
          kind="primary"
          title= "Entre em contato" 
          onClick={() => window.location = "https://w.app/KnnIdiomas"}
        /> 
      </div>
    </div>
  );
};

export default Header;
