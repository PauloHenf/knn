import Link from "next/link";
import Styles from "./contato.module.scss";
import Button from "../button/index";
import Input from "../input";
import Select from "../select";
import axios from "axios";
import { useState } from "react";

const Contato = () => {
  const [nome, setNome] = useState(null);
  const [telefone, setTelefone] = useState(null);
  const [email, setEmail] = useState(null);
  const [site, setSite] = useState(null);
  const [midia, setMidia] = useState(null);

  console.log("teste: ", midia);
  const SendEmail = () => {
    axios
      .post("/api/sendEmail", {
        messageBody: `Nome: ${nome}, Email: ${email}, Telefone: ${telefone}, Site: ${site}, Midia: ${midia}`,
      })
      .then(() => console.log("Uhuuu"))
      .catch(() => console.log("Opsss"));
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.texts}>
        <span>ENTRE EM CONTATO</span>
        <h1>Aumente seu resultado de vendas e performance</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna
        </p>
      </div>
      <div className={Styles.form}>
        <h1>Fale com um especialista</h1>

        <Input
          type="text"
          placeholder="Nome completo"
          onBlur={(e) => setNome(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="E-mail profissional"
          onBlur={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Celular/Whatsapp"
          pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"
          onBlur={(e) => setTelefone(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Site"
          onBlur={(e) => setSite(e.target.value)}
          required
        />
        <Select
          placeholder="Orçamento para mídia"
          options={[
            { label: "Instagram", value: "instagram" },
            { label: "Facebook", value: "facebook" },
          ]}
          onChange={(e) => setMidia(e.target.value)}
          required
        />

        <Button title="Enviar" kind="full" onClick={() => SendEmail()} />
      </div>
      <div className={Styles.footer}>
        <p>
          Ao enviar esse formulário, você reconhece que leu e concorda com a
          nossa
          <Link href="/">
            <span> Política de Privacidade.</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Contato;
