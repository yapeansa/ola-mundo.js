import { useParams } from "react-router-dom";
import posts from '@/json/posts.json';
import PostModelo from "@/components/PostModelo";
import ReactMarkdown from 'react-markdown';
import './Post.css';
import styles from './Post.module.css';
import NotFound from '../notfound';
import PaginaPadrao from "../../components/PaginaPadrao";
import PostCard from "../../components/PostCard";

const Post = () => {

    const parametro = useParams();
    const post = posts.find((post) => post.id === Number(parametro.id));

    if (!post) {
        return <NotFound />;
    }

    const postsRecomendados = posts
        .filter((post) => post.id !== Number(parametro.id))
        .sort((a, b) => b.id - a.id)
        .slice(0, 4);

    return (
        <PaginaPadrao>
            <PostModelo
                fotoCapa={`/assets/posts/${post.id}/capa.png`}
                titulo={post.titulo}
            >
                <div className={styles.container}>
                    <div className="post-markdown-container">
                        <ReactMarkdown>{post.texto}</ReactMarkdown>
                    </div>

                    <h2 className={styles.tituloOutrosPosts}>
                        Outros posts que você pode gostar:
                    </h2>

                    <ul className={styles.postsRecomendados}>
                        {postsRecomendados.map((post) => (
                            <li key={post.id}>
                                <PostCard post={post} />
                            </li>
                        ))}
                    </ul>
                </div>
            </PostModelo>
        </PaginaPadrao>
    );
};

export default Post;
