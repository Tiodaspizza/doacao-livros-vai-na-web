import styles from "./querodoar.module.scss"
import frame from "../../assets/Frame.png"


function BookDonationForm() {
    return (
      <section className={styles.secquerodoar} >
        <h2>Por favor, preencha o formulário com suas informações e as informações do Livro</h2>
        <form className={styles.formulario} >
            <div className={styles.frame} >
            <img src={frame} alt="" />
            <p>Informações do Livro</p>
            </div>
          <div>
            <label></label>
            <input type="text" name="title" placeholder="Titulo" />
          </div>
          <div>
            <label></label>
            <input type="text" name="category" placeholder="Categoria"  />
          </div>
          <div>
            <label></label> 
            <input type="text" name="author" placeholder="Autor"  />
          </div>
          <div>
            <label></label>
            <input type="text" name="imageUrl"  placeholder="Link da imagem" />
          </div>
          <button className={styles.buttondoar} type="submit">Doar</button>
          
        </form>
        </section>
    );
  }
  
  export default BookDonationForm;