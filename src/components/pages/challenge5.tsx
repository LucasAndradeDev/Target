import { useState } from 'react';

const Challenge5 = () => {
  const [inputString, setInputString] = useState('');
  const [invertedString, setInvertedString] = useState('');

  const handleInvertString = () => {
    let result = '';
    for (let i = inputString.length - 1; i >= 0; i--) {
      result += inputString[i];
    }
    setInvertedString(result);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-lg max-w-xl w-full mx-auto mt-20">
        <h2 className="text-4xl font-bold text-blue-600 mb-4 text-center">Desafio 5: Inversão de String</h2>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Esse desafio tem o objetivo de inverter uma string manualmente.
        </p>
        <div className="flex w-full mb-6">
          <input
            type="text"
            placeholder="Digite uma string"
            value={inputString}
            onChange={(e) => setInputString(e.target.value)}
            className="flex-grow p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleInvertString}
            className="p-3 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition duration-200"
          >
            Inverter
          </button>
        </div>
        {invertedString && (
          <div className="w-full p-4 bg-blue-100 rounded-lg shadow-inner">
            <h3 className="text-lg font-semibold text-blue-800">String Invertida:</h3>
            <p className="text-gray-700 font-mono">{invertedString}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Challenge5;
