import styles from "./querodoar.module.scss";
import frame from "../../assets/Frame.png";
import { useState } from 'react';
import axios from 'axios';

function BookDonationForm() {
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [autor, setAutor] = useState('');
  const [imagemUrl, setImagemUrl] = useState('');

  const capturaTitulo = (e) => {
    setTitulo(e.target.value);
  };

  const capturaCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const capturaAutor = (e) => {
    setAutor(e.target.value);
  };

  const capturaImagem = (e) => {
    setImagemUrl(e.target.value);
  };

  const sendData = async () => {
    // Verifique se todos os campos estão preenchidos
    if (!titulo || !categoria || !autor || !imagemUrl) {
      alert("🚨 Todos os campos são obrigatórios!");
      return;
    }

    const urlApi = "https://api-livros-vnw.onrender.com/doar";

    const dadosEnviar = {
      titulo,
      categoria,
      autor,
      imagemUrl: imagemUrl // Corrigido para "imagemUrl"
    };

    try {
      const envioApi = await axios.post(urlApi, dadosEnviar, {
        headers: { "Content-Type": "application/json" },
      });
      alert("Livro enviado com sucesso!");
      setTitulo("");
      setCategoria("");
      setAutor("");
      setImagemUrl("");
    } catch (error) {
      console.error("❌ Erro ao enviar para API:", error);
      alert("Erro ao enviar o livro. Verifique os dados e tente novamente.");
    }
  };




  return (
      <section className={styles.secquerodoar} >
        <h2>Por favor, preencha o formulário com suas informações e as informações do Livro</h2>
        <form className={styles.formulario} onSubmit={(e)=>e.preventDefault()} >
            <div className={styles.frame} >
            <img src={frame} alt="" />
            <p>Informações do Livro</p>
            </div>
          <div>
            <label></label>
            <input type="text" name="title" placeholder="Titulo" onChange={capturaTitulo} value={titulo} />
          </div>
          <div>
            <label></label>
            <input type="text" name="category" placeholder="Categoria" onChange={capturaCategoria} value={categoria} />
          </div>
          <div>
            <label></label> 
            <input type="text" name="author" placeholder="Autor" onChange={capturaAutor}  value={autor} />
          </div>
          <div>
            <label></label>
            <input type="text" name="imageUrl"  placeholder="Link da imagem"   onChange={capturaImagem} />
          </div>
          <button className={styles.buttondoar} type="submit"  onClick={sendData} >Doar</button>
          
        </form>
        </section>
    );
  }
  
export default BookDonationForm;
  

