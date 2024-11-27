import styles from "./inicio.module.scss";
import hero from "../../assets/hero.png";
import card1 from "../../assets/card1.png"
import card2 from "../../assets/card2.png"
import card3 from "../../assets/card3.png"
import card4 from "../../assets/card4.png"




export default function Inicio() {
  return (
    <main>
      <section className={styles.inicio}>
        <img src={hero} alt="Imagem Hero" />
        <h1 className={styles.texthero}>
          VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO
        </h1>
      </section>
      <section className={styles.whydonate}>
      <h2 className={styles.whydonatetitle}>Por que devo doar?</h2>
        <div className={styles.allcardcontainer} >
          <div className={styles.cardcontainer} >
           <div  className={styles.cardimg}>
            <img src={card1} alt="" />
            </div>
            <div className={styles.cardcontent} >
              <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
            </div>
          </div>
          <div className={styles.cardcontainer} >
           <div  className={styles.cardimg}>
            <img src={card2} alt="" />
            </div>
            <div className={styles.cardcontent} >
              <p> Estimula o hábito da leitura e o aprendizado contínuo.</p>
            </div>
          </div>
          <div className={styles.cardcontainer} >
           <div  className={styles.cardimg}>
            <img src={card3} alt="" />
            </div>
            <div className={styles.cardcontent} >
              <p> Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
            </div>
          </div>
          <div className={styles.cardcontainer} >
           <div  className={styles.cardimg}>
            <img src={card4} alt="" />
            </div>
            <div className={styles.cardcontent} >
              <p> Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
