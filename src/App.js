import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/' element={} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
