import { Routes, Route } from 'react-router-dom';
import { CreatePage } from './pages/CreatePage';
import { MainPage } from './pages/MainPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProductPage } from './pages/ProductPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/:id" element={<ProductPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
