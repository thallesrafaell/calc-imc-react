import styles from "./Formulario.module.css";

const Formulario = () => {
  return (
    <>
      <form className={styles.form}>
        <input type="number" placeholder="Peso" className={styles.formInput} />
        <input type="number" placeholder="Altura" className={styles.formInput} />
        <button className={styles.formBtn} type="submit">
          Calcular IMC
        </button>
      </form>
      <div className={styles.resultado}>
        <h3>Resultatdo</h3>
        <p >Resultado 31.5 Acima do Peso</p>
      </div>
    </>
  );
};

export default Formulario;
