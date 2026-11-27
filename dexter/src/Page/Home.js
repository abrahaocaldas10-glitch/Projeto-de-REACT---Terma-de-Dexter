
import styles from './Home.module.css';

function Home() {
  return (
    <section className={styles.home}>
      <h1>DEXTER</h1>
      <br></br>
      <h2>Uma série cheia de mistérios</h2>
      <br></br>
      <p>
        Conheça o universo de Dexter, uma série que acompanha
        a vida de um especialista forense que trabalha na polícia
        de Miami.
      </p>
      <br></br>
      <p>
        Dexter é um personagem complexo,que vive uma vida dupla como um assasino em série é como police forense. A série explora
        o tema da moralidade, da justiça e da psicologia humana, enquanto dexter luta para equilibrar sua vida pessoal e profisional.
      </p>
      <br></br>
      <a href="/personagens">Conhecer personagens</a>
      <br></br>
      <a href="/sobre">Sobre a Série</a>
      <br></br>
    </section>
  );
}

export default Home;
