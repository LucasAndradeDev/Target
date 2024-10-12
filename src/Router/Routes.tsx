import { Routes, Route } from 'react-router-dom';
import Challenge1 from '../components/pages/challenge1';
import Challenge2 from '../components/pages/challenge2';
import Home from '../components/pages/home';
import Challenge3 from '../components/pages/challenge3';
import Challenge4 from '../components/pages/challenge4';
import Challenge5 from '../components/pages/challenge5';
import Footer from '../components/pages/footer'; 

const AppRoutes = () => {
    return (
      <div className="flex flex-col min-h-screen"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/desafio1" element={<Challenge1 />} />
          <Route path="/desafio2" element={<Challenge2 />} />
          <Route path="/desafio3" element={<Challenge3 />} />
          <Route path="/desafio4" element={<Challenge4 />} />
          <Route path="/desafio5" element={<Challenge5 />} />
        </Routes>
        <div className='mt-auto'>
          <Footer />
        </div>
      </div>
    );
  };
  
  export default AppRoutes;
  
