import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navigation from '../features/navigation/ui/navigation';
import Today from '../pages/today';

function App() {
  return (
    <div style={{ height: '100vh', position: 'relative' }}>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Today />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
