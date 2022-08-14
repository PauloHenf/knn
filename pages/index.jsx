import Header from "../components/header";
import Welcome from "../components/welcome";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Welcome />
    </div>
  );
}
