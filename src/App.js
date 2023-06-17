import './App.css';
import Player from './component/Players';
import ListOfPlayers from './Shared/ListOfPlayers';
import Navigation from './component/Navigation';
import Footer from './component/Footer';
import Detail from './component/Detail';
import {
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className='App'>
      <Navigation/>
      <Routes>
          <Route path='/' element={<Player/>}> 
      </Route>
      <Route path='/detail/:id' element={<Detail/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
