import { Routes, Route } from 'react-router-dom';
import { CreatePage } from './pages/CreatePage';
import { MainPage } from './pages/MainPage';
import { ProductPage } from './pages/ProductPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/:id" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
