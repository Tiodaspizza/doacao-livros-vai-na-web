import styles from './Footer.module.scss';
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";



export default function Footer() {
    return (
        <>
            <section className={styles.footer}>
                <p>4002-8922</p>
                <div className={styles.socialslink}>
                    <img src={facebook} alt="Facebook" />
                    <img src={instagram} alt="Instagram" />
                    <img src={linkedin} alt="LinkedIn" />
                    <img src={twitter} alt="twitter" />
                    <img src={youtube} alt="YouTube" />
                </div>
            </section>

            
            <section className={styles.extraInfo}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
            </section>
        </>
    );
}
