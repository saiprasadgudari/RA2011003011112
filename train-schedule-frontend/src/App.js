import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllTrainsPage from './components/AllTrainsPage';
import SingleTrainPage from './components/SingleTrainPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllTrainsPage />} />
        <Route path="/trains/:id" element={<SingleTrainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
