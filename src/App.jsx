import React, { useState } from 'react';
import './App.css';

function App() {
  const [altura, setAltura] = useState('180');
  const [peso, setPeso] = useState('80');
  const [imc, setImc] = useState(null);

  const calcularIMC = () => {
    if (!altura || !peso) {
      setImc(null);
      return;
    }

    const alturaMetros = altura / 100;
    const imcCalculado = peso / (alturaMetros * alturaMetros);
    setImc(imcCalculado.toFixed(2));
  };

  const getClassificacao = () => {
    if (!imc) return '';
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc < 24.9) return 'Peso normal';
    if (imc < 29.9) return 'Sobrepeso';
    if (imc < 34.9) return 'Obesidade grau I';
    if (imc < 39.9) return 'Obesidade grau II';
    return 'Obesidade grau III';
  };

  return (
    <div className="container">
      <h1>Calculadora de IMC</h1>
      <div className="form">
        <div className="form-group">
          <label htmlFor="altura">Altura (cm):</label>
          <input id="altura" type="number" value={altura} onChange={(e) => { setAltura(e.target.value); calcularIMC(); }} />
        </div>
        <div className="form-group">
          <label htmlFor="peso">Peso (kg):</label>
          <input id="peso" type="number" value={peso} onChange={(e) => { setPeso(e.target.value); calcularIMC(); }} />
        </div>
        {imc && (
          <div className="resultado">
            <p>Seu IMC é: {imc}</p>
            <p>Classificação: {getClassificacao()}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
