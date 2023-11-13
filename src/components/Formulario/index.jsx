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
      
    </>
  );
};

export default Formulario;
