import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Homepage from './pages/Home/Homepage';
import News from './pages/News/news';
import Layout from './components/layout';

function App() {
  return (
    <div className="sss">
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
