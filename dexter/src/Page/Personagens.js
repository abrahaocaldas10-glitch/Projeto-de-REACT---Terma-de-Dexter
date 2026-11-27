
import CardPersonagem from '../components/CardPersonagem';

import dexter from '../assets/dexter.jpg';
import debra from '../assets/debra.jpg';
import doakes from '../assets/doakes.jpg';

import styles from './Personagens.module.css';

function Personagens() {
  return (
    <section className={styles.personagens}>
      <h1>Personagens</h1>

      <div className={styles.lista}>
        
        <CardPersonagem
          nome="Dexter Morgan"
          descricao="Especialista forense da polícia de Miami e um serial killer é não marta inocente."
          imagem={dexter}
        />
        
        <CardPersonagem
          nome="Debra Morgan"
          descricao="Detetive e irmã de Dexter é a pessonage de senso moralmente correto de justiça, enquanto Dexter buscava meios muito mais sombrios."
          imagem={debra}
        />
        
        <CardPersonagem
          nome="James Doakes"
          descricao="Sargento da polícia de Miami ele odeia o Dexter, o Doakes e ex-militar."
          imagem={doakes}
        />
        
      </div>
    </section>
  );
}

export default Personagens;
