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
        <h1 className={Styles.title}>(11) 99004-1932</h1>
        <p>acoesknnsbs@gmail.com</p>
      </div>
      <div className={Styles.column}>
        <h1>ENDEREÇO</h1>
        <p>Rua 7 de Setembro, Número 267</p>
        <p>São Bento do Sapucaí - SP</p>
      </div>
      <div className={`${Styles.column} ${Styles.columnCurse}`}>
        <h1>CONTEÚDO</h1>
        <Link href="https://www.knnidiomas.com.br/#cursos">
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
        ©2023 KNN Idiomas - Todos os direitos reservados.
      </div>
    </div>
  );
};

export default Footer;
