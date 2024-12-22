import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.scss';
import Exerciseone from './pages/Exerciseone';
import Exercisetwo from './pages/Exercisetwo';
import Header from './layout/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-circular-progressbar/dist/styles.css';
import { ROUTES } from "./constants/appConstant";

function App() {
  return (
    <div className="App">
      <Router>
        <Header /> 
        <Routes>
          <Route path={ROUTES.Home} element={<Exerciseone />} />
          <Route path={ROUTES.EXERCISE_TWO} element={<Exercisetwo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
