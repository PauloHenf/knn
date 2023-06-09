import Image from 'next/image';
import Logo from '/public/images/logo.svg';
import Styles from './header.module.scss';
import Button from '../button';
import { ScrollTo } from '../../utils/scrollTo';
import KnnLogo from '/public/images/knn-logo.png';

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
          kind="primary"
          title="Participe Já"
          onClick={() => ScrollTo('contato')}
        />
      </div>
    </div>
  );
};

export default Header;
