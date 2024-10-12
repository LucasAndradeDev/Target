import React, { useState } from 'react';

const Challenge2 = () => {
  const [inputValue, setInputValue] = useState<string>(''); // Iniciar como string vazia
  const [fibonacciSequence, setFibonacciSequence] = useState<number[]>([]);
  const [belongsToSequence, setBelongsToSequence] = useState<boolean | null>(null);

  const generateFibonacci = (num: number) => {
    const sequence = [0, 1]; // Começa com 0 e 1
    while (true) {
      const nextValue = sequence[sequence.length - 1] + sequence[sequence.length - 2];
      if (nextValue > num) break; // Para se o próximo número for maior que o número informado
      sequence.push(nextValue);
    }
    return sequence;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const numericValue = Number(inputValue); // Converte inputValue para número
    const sequence = generateFibonacci(numericValue);
    setFibonacciSequence(sequence);
    setBelongsToSequence(sequence.includes(numericValue)); // Verifica se o valor numérico pertence à sequência
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="flex flex-col items-center justify-center p-12 bg-white rounded-lg shadow-lg max-w-6xl w-full">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">Desafio 2: Sequência de Fibonacci</h2>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Esse desafio tem o objetivo de gerar uma sequência de Fibonacci até o número informado. Por exemplo, para o número 5, a sequência é 0, 1, 1, 2, 3, 5.
        </p>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-col sm:flex-row mb-4 justify-center items-center space-x-2">
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)} // Continua armazenando como string
              placeholder="Insira um número"
              className="border border-blue-400 rounded-lg p-2 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-96"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-lg px-4 py-2 transition duration-300 transform hover:bg-blue-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Calcular Fibonacci
            </button>
          </div>
        </form>
        {fibonacciSequence.length > 0 && (
          <div className="mt-4 text-center">
            <p>Sequência de Fibonacci até o número informado: {fibonacciSequence.join(', ')}</p>
            <p>
              O número {inputValue} {belongsToSequence ? 'pertence' : 'não pertence'} à sequência.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Challenge2;
