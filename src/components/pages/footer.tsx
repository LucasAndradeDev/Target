import { FaGithub, FaLinkedin, FaRegFile } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 w-full">
      <div className="container mx-auto px-4">
        {/* Seção principal do rodapé */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start">
          {/* Logo ou nome do sistema */}
          <div className="mb-4 sm:mb-0">
            <h2 className="text-2xl font-bold text-white">Desenvolvido por:</h2>
            <p className="text-gray-400 text-sm">Lucas Andrade</p>
          </div>

          {/* Links do footer */}
          <div className="flex flex-col sm:flex-row sm:space-x-6 text-sm">
            <h1 className="text-white font-semibold mb-2 sm:mb-0">Links importantes</h1>
            <ul className="flex space-x-6">
              <li>
                <a
                  href="https://github.com/LucasAndradeDev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-white transition-colors"
                >
                  <FaGithub className="mr-1" /> GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/lucas-andrade-6a03331b2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-white transition-colors"
                >
                  <FaLinkedin className="mr-1" /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://aromatic-amusement-f87.notion.site/Curr-culo-9883ea293e9a4fe48217189abf35f58c?pvs=4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-white transition-colors"
                >
                  <FaRegFile className="mr-1" /> Meu currículo
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra inferior com direitos autorais */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-500 text-xs">&copy; {new Date().getFullYear()} Lucas Andrade. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
