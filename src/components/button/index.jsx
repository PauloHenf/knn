import Styles from "./button.module.scss";

/* 
Props

title: String
kind: "primary"| "secundary"
*/

const Button = ({ src, title, kind, onClick, type }) => {
  const generationClassByKind = () => {
    if (kind === "secundary") return Styles.secundary;
    if (kind === "full") return Styles.full;

    return Styles.primary;
  };

  return (
    <button
      type={type}
      className={`${Styles.button} ${generationClassByKind()}`}
      onClick={onClick}
    >
      {src}
      {title}
    </button>
  );
};

export default Button;
