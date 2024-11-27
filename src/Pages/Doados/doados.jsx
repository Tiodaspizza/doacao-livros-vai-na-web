import book from "../../assets/book.png";
import styles from "../Doados/doados.module.scss"


export default function Doados(){
   
    return(
        <section className={styles.sectiondoados}>
            <h2>Livros Doados</h2>
            <article  className={styles.doados}  >
                <img className={styles.imgdoados} src={book} alt="imagem livro doado" />
                <div className={styles.textdoados} >
                    <p>O protagonista</p>
                    <p>Susanne Andrade</p>
                    <p>Ficção</p>
                </div>
            </article>
        </section>
    )
}