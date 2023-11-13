import { useEffect, useState } from "react";

export function useCalcImc() {
    const [peso, setPeso] = useState(0.0)
    const [altura, setAltura] = useState(0.0)
    const [resultado, setResultado] = useState(0)


   const capturaPeso = (valor) => {
    setPeso( valor)
   }

   const capturaAltura = (valor) => {
    setAltura(valor)
   }

    const calculoImc = (e) => {
        e.preventDefault()
         
        setResultado((peso / (altura * altura)).toFixed(2))
    }

    const tabelaIMC = () => {
        if (resultado >= 30 && resultado < 35) {
            console.log(`Seu imc é ${resultado}, você esta com obesidade Grau I `)
           return `Seu imc é ${resultado}, você esta com obesidade Grau I`
        }
        }

    

 return {
    calculoImc,
    capturaPeso,
    capturaAltura,
    resultado
 }
}