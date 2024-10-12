

const Challenge4 = () => {
  // Dados de faturamentoo por estado
  const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
  };

  // Calcula o total de faturamento
  const totalFaturamento = Object.values(faturamentoPorEstado).reduce((acc, valor) => acc + valor, 0);

  // Calcula o percentual de cada estado
  const percentualPorEstado = Object.entries(faturamentoPorEstado).map(([estado, valor]) => {
    const percentual = (valor / totalFaturamento) * 100;
    return { estado, percentual: percentual.toFixed(2) }; 
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="flex flex-col items-center justify-center p-12 bg-white rounded-lg shadow-lg max-w-4xl w-full mx-auto">
        <h2 className="text-4xl font-bold text-blue-600 mb-4 text-center">Desafio 4: Percentual de Faturamento por Estado</h2>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Esse desafio tem como objetivo calcular o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.
        </p>
        <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Estado</th>
              <th className="py-3 px-4 text-left">Percentual (%)</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {percentualPorEstado.map(({ estado, percentual }) => (
              <tr key={estado} className="border-b transition duration-300 hover:bg-blue-50">
                <td className="py-3 px-4">{estado}</td>
                <td className="py-3 px-4 font-semibold">{percentual}%</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-6 p-4 bg-blue-100 rounded-lg shadow-inner w-full text-center">
          <p className="font-bold text-lg text-blue-800">
            Total de Faturamento: R$ <span className="text-blue-600">{totalFaturamento.toFixed(2)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Challenge4;
