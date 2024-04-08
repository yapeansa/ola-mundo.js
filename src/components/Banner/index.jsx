import styles from "./Banner.module.css";
import circuloColorido from "@/assets/circulo_colorido.png";
import minhaFoto from "@/assets/minha_foto.jpg";

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, mundo!
                </h1>
                <p className={styles.paragrafo}>
                    Sejam bem-vindos ao meu website! Eu sou Yago Pereira, desenvolvedor Front-end com formação pela Alura no framework React.js e também possuo formação em Matemática pela UFJF. Aqui, compartilho todo o conhecimento que permeia minha vida. Espero que goste!
                </p>
            </div>
            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />
                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto do Yago Pereira"
                />
            </div>
        </div>
    );
};

export default Banner;
