
import styles from './CardPersonagem.module.css';

function CardPersonagem(props) {
  return (
    <div className={styles.card}>
      <img
        className={styles.imagem}
        src={props.imagem}
        alt={props.nome}
      />

      <h2>{props.nome}</h2>

      <p>{props.descricao}</p>
    </div>
  );
}

export default CardPersonagem;
