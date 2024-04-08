import PostModelo from "../../components/PostModelo";
import fotoCapa from '@/assets/sobre_mim_capa.jpg';
import styles from './Sobre.module.css';
import fotoSobreMim from '@/assets/sobre_mim_foto.jpg';

const Sobre = () => {
    return (
        <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
            <h3 className={styles.subtitulo}>Olá, eu sou o Yago!</h3>
            <img src={fotoSobreMim} alt="Foto de Yago Pereira" className={styles.fotoSobreMim} />
            <p className={styles.paragrafo}>Sejam muito bem-vindos ao meu espaço virtual. Como introduzir e descrever esse pequeno cantinho, esse pequeno recorte do meu ser? Bom, aqui você encontrará um certo tanto de matemática e também (por que não?) um certo tanto de computação. Basicamente, estou criando este site com o objetivo de reunir e resumir todos os meus feitos profissionais e acadêmicos. A fim de deixar com que o público conheça um pouco das minhas habilidades e, de certa forma, não deixar-me esquecer do que fui capaz de fazer até a presente data. Assim, conforme você for navegando por esta página, encontrará informações como: algumas informações pessoais sobre mim, minha formação, minhas experiências, etc. Aproveite a viagem! </p>
            <p className={styles.paragrafo}>Como você já sabe, eu me chamo Yago. Tenho 29 anos, possuo o título de bacharel em Matemática pela IES-UFJF e sou discente do curso de Mestrado Acadêmico em Matemática nesta mesma instituição. Desde a adolescência possuo um fascínio por tecnologia no geral, o que me levou na época a estudar as linguagens (de marcação) HTML e (as folhas de estilo) CSS por conta própria. Atualmente, estou me aperfeiçoando ainda mais nestas linguagens na intituição de ensino Alura, além de também estudar Javascript/React.js e Python. Durante meu curso de graduação, tive a oportunidade de ter um primeiro contato com a linguagem de programação C nas disciplinas de Algoritmos (teórica) e Laboratório de Programação (prática).</p>
            <p className={styles.paragrafo}>Minha monografia foi desenvolvida na área de Lógica e Teoria dos Conjuntos, na qual estabeleço a equivalência entre o Axioma da Escolha, o Lema de Zorn e o Teorema de Zermelo e apresento algumas aplicações em áreas de estudo da matemática como, por exemplo, Álgebra e Análise.</p>
            <p className={styles.paragrafo}>Atualmente, no mestrado, tenho estudado o recente conceito de álgebras zpd/zLpd, isto é, álgebras "zero product determined" (respectivamente, "zero Lie product determined"). Venho pesquisando sobre exemplos e não-exemplos destas álgebras tanto no contexto algébrico quanto no contexto analítico (álgebras de Banach) além de também trabalhar com aplicações deste conceito.</p>
        </PostModelo>
    );
};

export default Sobre;
