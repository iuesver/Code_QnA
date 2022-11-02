import { Routes, Route } from 'react-router-dom';
import { CreatePage } from './pages/CreatePage';
import { MainPage } from './pages/MainPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </div>
  );
}

export default App;
