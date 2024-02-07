import { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Styles from './contato.module.scss';
import Button from '../button/index';
import Input from '../input';
import Select from '../select';
import { Loading } from '../loading/index';
import { SuccessModal } from '../successModal';
import { FailModal } from '../failModal/index';

import logoCasa from '../../../public/images/casa1.png';
import Image from 'next/image';

const Contato = () => {
  const [isloading, setLoading] = useState(false);
  const [successModal, setModalSuccess] = useState(false);
  const [failModal, setFailModal] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      age: '',
      // language: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Campo Obrigatório'),
      phone: Yup.string()
        .matches('', 'Digite um telefone válido')
        .required('Campo Obrigatório'),
      email: Yup.string().email('Email Inválido!').required('Required'),
      age: Yup.string().min(1).max(2).required('Campo Obrigatório'),
      // language: Yup.string().required('Campo Obrigatório'),
    }),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => handleSubmitForm(values),
  });

  /*   formik?.errors -> Pode ser utilizado para dar feedback no campo e para o usuario*/

  const handleSubmitForm = (values) => {
    setLoading(true);
    axios
      .post('/api/sendEmail', {
        name: values.name,
        phone: values.phone,
        email: values.email,
        age: values.age,
        // language: values.language,
      })
      .then(() => {
        formik.resetForm();
        setLoading(false);
        setModalSuccess(true);
      })
      .catch(() => {
        setLoading(false);
        setFailModal(true);
      });
  };

  const closeModal = () => {
    setFailModal(false);
    setModalSuccess(false);
  };

  return (
    <>
      {successModal && <SuccessModal closeModal={closeModal} />}
      {failModal && <FailModal closeModal={closeModal} />}
      {isloading && <Loading />}
      <div className={Styles.container} id="contato">
        <div className={Styles.texts}>
          <span>CONCORRA E GANHE!!</span>
          <h1>
          PREENCHA O FORMULÁRIO AO LADO E CONCORRA a R$ 500,00 Reais.
          </h1>
          <p>
          E se matriculando até o final de fevereiro você também garante a participação em um sorteio de um incrível Tablet Samsumg Galaxay A7 Lite!
          </p>
          {/* <Image src={logoCasa} alt="Casa Restaurante e Café" /> */}
        </div>

        <div className={Styles.form}>
          <h1>Preencha o formulário abaixo e
garanta já a sua participação neste
sorteio incrível.</h1>

          <form id="formulario" onSubmit={formik.handleSubmit}>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Nome completo"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.name}
              required
            />
            <Input
              id="phone"
              name="phone"
              type="number"
              placeholder="Celular/Whatsapp"
              pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.phone}
              required
            />
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="E-mail"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
              required
            />
            <Input
              id="age"
              name="age"
              type="number"
              placeholder="Idade"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.age}
              required
            />
            {/* <Select
              id="language"
              name="language"
              placeholder="Língua que deseja enviar a mensagem:"
              options={[
                { label: 'Inglês', value: 'english' },
                { label: 'Espanhol', value: 'spanish' },
                { label: 'Francês', value: 'france' },
                { label: 'Italiano', value: 'italy' },
                { label: 'Alemão', value: 'germany' },
              ]}
              onChange={formik.handleChange}
              value={formik.values.language}
              required
            /> */}

            <Button type="submit" title="Enviar" kind="full" />
          </form>
        </div>
        <div className={Styles.footer}>
          <p>
            Ao enviar esse formulário, você reconhece que leu e concorda com a
            nossa
            <Link
              href="https://www.knnidiomas.com.br/privacidade/ "
              target="blank"
              rel="noopener noreferrer"
            >
              <span> Política de Privacidade.</span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Contato;
