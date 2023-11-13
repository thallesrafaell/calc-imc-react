import { useState } from "react";
import { useCalcImc } from "../../hooks/useCalcImc";
import styles from "./Formulario.module.css";

const Formulario = () => {
  const { capturaPeso, capturaAltura, calculoImc, resultado } = useCalcImc();
  const info = resultado <= 0;
  const muitoAbaixo = resultado < 17 && resultado > 0;
  const abaixo = resultado >= 17 && resultado < 18.5;
  const pesoIndicado = resultado >= 18.5 && resultado < 25;
  const acimaDoPeso = resultado >= 25 && resultado < 30;
  const obesidadeI = resultado >= 30 && resultado <= 35;
  const obesidadeII = resultado >= 35 && resultado < 40;
  const obesidadeIII = resultado > 40;

  return (
    <>
      <form className={styles.form}>
        <input
          onChange={(e) => capturaPeso(parseFloat(e.target.value))}
          type="number"
          placeholder="Peso"
          className={styles.formInput}
        />
        <input
          onChange={(e) => capturaAltura(parseFloat(e.target.value))}
          type="number"
          placeholder="Altura"
          className={styles.formInput}
        />
        <button
          onClick={(e) => calculoImc(e)}
          className={styles.formBtn}
          type="submit"
        >
          Calcular IMC
        </button>
      </form>
      <h3>Resultatdo</h3>
      <div className={styles.resultado}>
        {info && <p className={styles.info}>Digite seu peso para ver o resultado</p>}
        {muitoAbaixo && (
          <div>
            <p>{resultado}</p> <p>você está muito abaixo do peso indicado</p>
          </div>
        )}
        {abaixo && (
          <div>
            <p>{resultado}</p> <p>você está abaixo do peso indicado</p>
          </div>
        )}
        {pesoIndicado && (
          <div>
            <p>{resultado}</p> <p>parabéns você está com peso indicado</p>
          </div>
        )}
        {acimaDoPeso && (
          <div>
            <p>{resultado}</p> <p>você está acima do peso indicado</p>
          </div>
        )}
        {obesidadeI && (
          <div>
            <p>{resultado}</p> <p>você esta com obesidade Grau I</p>
          </div>
        )}
        {obesidadeII && (
          <div>
            <p>{resultado}</p> <p>você esta com obesidade Grau II</p>
          </div>
        )}
        {obesidadeIII && (
          <div>
            <p>{resultado}</p> <p>você esta com obesidade Grau III</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Formulario;
