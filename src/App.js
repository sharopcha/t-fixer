import './App.scss';
import SideBar from './components/layout/SideBar';
import Home from './pages/Home';

import PrimeReact from 'primereact/api';

PrimeReact.ripple = true;

function App() {
  return (
    <div className='app'>
      <SideBar />
      <Home />
    </div>
  );
}

export default App;
