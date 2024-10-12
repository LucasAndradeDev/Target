import { useEffect, useState } from 'react';
import faturamentoData from '../../data/faturamento.json';

interface Faturamento {
  dia: string;
  valor: number;
}

const Challenge3 = () => {
  const [menorFaturamento, setMenorFaturamento] = useState<number | null>(null);
  const [maiorFaturamento, setMaiorFaturamento] = useState<number | null>(null);
  const [mediaFaturamento, setMediaFaturamento] = useState<number | null>(null);
  const [diasAcimaMedia, setDiasAcimaMedia] = useState<number>(0);

  useEffect(() => {
    const faturamentos: Faturamento[] = faturamentoData.faturamento;

    const valores = faturamentos.map(item => item.valor).filter(valor => valor > 0); 
    if (valores.length === 0) return;

    const menor = Math.min(...valores);
    const maior = Math.max(...valores);
    const media = valores.reduce((acc, valor) => acc + valor, 0) / valores.length;

    const diasComFaturamentoSuperiorMedia = faturamentos.filter(item => item.valor > media).length;

    setMenorFaturamento(menor);
    setMaiorFaturamento(maior);
    setMediaFaturamento(media);
    setDiasAcimaMedia(diasComFaturamentoSuperiorMedia);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="flex flex-col items-center justify-center p-12 bg-white rounded-lg shadow-lg max-w-6xl w-full">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">Desafio 3: Faturamento Diário</h2>
        <p className="text-lg text-gray-700 mb-4 text-center">
          Esse desafio tem o objetivo de analisar o faturamento diário de distribuidora ficticia..
          Para isso, utilizei como base de dados o arquivo faturamento.json.
        </p>

        <h3 className="text-2xl font-semibold mb-2">Faturamento Diário</h3>
        <ul className="w-full max-w-md bg-gray-100 rounded-lg shadow p-4">
          {faturamentoData.faturamento.map(item => (
            <li key={item.dia} className={`flex justify-between py-2 ${item.valor > 0 ? 'text-gray-800' : 'text-gray-400 italic'}`}>
              {item.dia}: 
              <span className={`font-semibold ${item.valor > 0 ? 'text-black' : 'text-gray-400'}`}>
                {item.valor > 0 ? `R$ ${item.valor.toFixed(2)}` : 'Sem faturamento'}
              </span>
            </li>
          ))}
        </ul>

        {menorFaturamento !== null && (
          <div className="mt-4 text-center">
            <h3 className="text-xl font-semibold">Resultados da Análise</h3>
            <p className="text-lg">Menor valor de faturamento: <span className="font-bold">R$ {menorFaturamento.toFixed(2)}</span></p>
            <p className="text-lg">Maior valor de faturamento: <span className="font-bold">R$ {maiorFaturamento.toFixed(2)}</span></p>
            <p className="text-lg">Média de faturamento: <span className="font-bold">R$ {mediaFaturamento.toFixed(2)}</span></p>
            <p className="text-lg">Número de dias com faturamento acima da média: <span className="font-bold">{diasAcimaMedia}</span></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Challenge3;
