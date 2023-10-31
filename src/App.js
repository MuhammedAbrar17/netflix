import logo from './logo.svg';
import './App.css';
import {originals,action} from './urls'
import Navbar from './components/Navbar/navbar';
import Banner from './components/Banner/Banner';
import Rowpost from './components/Rowpost/Rowpost';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowpost url={originals} title='Netflix Originals'/>
      <Rowpost url={action} title='Action' isSmall/>
    </div>
  );
}

export default App;
