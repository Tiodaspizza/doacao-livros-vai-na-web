import { useEffect, useState } from "react";
import book from "../../assets/book.png";
import styles from "../Doados/doados.module.scss";
import axios from "axios";

export default function Doados() {
    const [livros, setLivros] = useState([]);

    const getLivros = async () => {
        try {
            const response = await axios.get("https://api-livros-vnw.onrender.com/livros");
            setLivros(response.data);
        } catch (error) {
            console.error("Erro ao buscar os livros:", error);
        }
    };

    useEffect(() => {
        getLivros();
    }, []);

    return (
        <section className={styles.sectiondoados}>
            <h2>Livros Doados</h2>

            {livros.length === 0 ? (
                <p>Nenhum livro doado ainda.</p>
            ) : (
                <div className={styles.gridContainer}>
                    {livros.map((livro) => (
                        <article key={livro.id} className={styles.doados}>
                            <img 
                                className={styles.imgdoados} 
                                src={livro.imagemUrl || book} 
                                alt={livro.titulo} 
                            />
                            <div className={styles.textdoados}>
                                <p>{livro.titulo}</p>
                                <p>{livro.autor}</p>
                                <p>{livro.categoria}</p>
                            </div>
                        </article>
                    ))}
                </div>
            )}
        </section>
    );
}
