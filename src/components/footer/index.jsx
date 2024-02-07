import Link from 'next/link';
import Image from 'next/image';
import Styles from './footer.module.scss';
import Logo from '/public/images/logo.svg';
import IconInstagram from '/public/images/icon-instagram.svg';
import IconFacebook from '/public/images/icon-facebook.svg';
import IconLinkedin from '/public/images/icon-linkedin.svg';
import IconYoutube from '/public/images/icon-youtube.svg';

const Footer = () => {
  return (
    <div className={Styles.container}>
      <div className={`${Styles.column} ${Styles.columnPrincipal}`}>
        <Image src={Logo} alt="Logo" />
        <h1 className={Styles.title}>(12) 97412-4983</h1>
        <p>acoesknnsbs@gmail.com</p>
      </div>
      <div className={Styles.column}>
        <h1>ENDEREÇO</h1>
        <p>Rua Dr. Gama Rodrigues, Número 71</p>
        <p>São Bento do Sapucaí - SP</p>
        {/* <Link href="https://www.google.com/maps/place/KNN+Idiomas/@-22.6865391,-45.7378953,17z/data=!3m1!4b1!4m6!3m5!1s0x94cc7bfc225720e3:0x2f339db4a391b3c6!8m2!3d-22.6865392!4d-45.7330298!16s%2Fg%2F11tx66ccpy?entry=ttu">
          <p>Obter Localização</p>
        </Link> */}
      </div>
      <div className={`${Styles.column} ${Styles.columnCurse}`}>
        <h1>CONTEÚDO</h1>
        <Link
          href="https://www.knnidiomas.com.br/#cursos"
          target="_blank"
          rel="noreferrer"
        >
          <p>Nossos Cursos</p>
        </Link>
      </div>
      <div className={`${Styles.column} ${Styles.alignRight}`}>
        <h1>SOCIAL</h1>
        <div className={Styles.icons}>
          <Link href="https://www.instagram.com/knnsaobento/">
            <Image src={IconInstagram} alt="Icon" className={Styles.icon} />
          </Link>
          <Link href="https://www.facebook.com/knnidiomasoficial/">
            <Image src={IconFacebook} alt="Icon" className={Styles.icon} />
          </Link>
          <Link href="https://www.linkedin.com/company/knnidiomasbrasil/?originalSubdomain=br">
            <Image src={IconLinkedin} alt="Icon" className={Styles.icon} />
          </Link>
          <Link href="https://www.youtube.com/@KNNIdiomasBrasil">
            <Image src={IconYoutube} alt="Icon" className={Styles.icon} />
          </Link>
        </div>
      </div>
      <div className={Styles.allRightReserved}>
        ©2024 KNN Idiomas - Todos os direitos reservados.
      </div>
    </div>
  );
};

export default Footer;
