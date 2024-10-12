import React, { useState } from 'react';

const Challenge1 = () => {
  const [inputValue, setInputValue] = useState<string>(''); 
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string>(''); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); 
    let soma = 0;
    const numericValue = Number(inputValue); 

    if (!isNaN(numericValue) && numericValue > 0) { 
      for (let k = 1; k <= numericValue; k++) {
        soma += k;
      }
      setResult(soma);
    } else {
      setError('Por favor, insira um número válido maior que 0.'); 
      setResult(null); 
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="flex flex-col items-center justify-center p-12 bg-white rounded-lg shadow-lg max-w-6xl w-full"> 
        <h2 className="text-4xl font-bold text-blue-600 mb-4">Desafio 1: Soma dos Números</h2> 
        <p className="text-lg text-gray-700 mb-6 text-center">
          Esse desafio tem o objetivo de somar todos os números de 1 a N. Por exemplo, para N = 4, o resultado é 10, pois 1 + 2 + 3 + 4 = 10.
        </p>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-col sm:flex-row mb-4 justify-center items-center space-x-2"> 
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)} 
              placeholder="Insira um número"
              className="border border-blue-400 rounded-lg p-2 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-96" 
            />
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-lg px-4 py-2 transition duration-300 transform hover:bg-blue-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Calcular Soma
            </button>
          </div>
        </form>
        {error && (
          <p className="mt-4 text-lg text-red-600 animate-pulse text-center">
            {error}
          </p>
        )}
        {result !== null && (
          <p className="mt-4 text-lg text-green-600 transition-transform transform hover:scale-105 text-center">
            O valor da soma é: <strong>{result}</strong>
          </p>
        )}
      </div>
    </div>
  );
};

export default Challenge1;
