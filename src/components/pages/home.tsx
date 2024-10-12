import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 px-6">
      <h1 className="text-5xl font-extrabold text-blue-800 mb-6 drop-shadow-sm">
        Desafio da Target Sistemas
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        Fiz esse site para mostrar as respostas dos desafios impostos pelo Target para uma vaga de desenvolvedor.
      </p>
      <p className="text-lg text-blue-600 mb-8">Selecione o desafio desejado:</p>

      <div className="grid gap-8 w-full max-w-5xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { path: '/desafio1', title: 'Desafio 1: Soma dos Números' },
          { path: '/desafio2', title: 'Desafio 2: Sequência de Fibonacci' },
          { path: '/desafio3', title: 'Desafio 3: Faturamento Diário' },
          { path: '/desafio4', title: 'Desafio 4: Percentual de Faturamento por Estado' },
          { path: '/desafio5', title: 'Desafio 5: Inversão de uma String' },
        ].map((challenge) => (
          <div
            key={challenge.path}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl duration-300"
          >
            <Link
              to={challenge.path}
              className="block p-6 text-center transition duration-300 hover:bg-blue-100"
            >
              <h3 className="text-xl font-bold text-blue-700 mb-2">
                {challenge.title}
              </h3>
              <p className="text-gray-500 text-sm">
                Clique aqui para acessar o desafio.
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
