import './App.scss';
import SideBar from './components/layout/SideBar';
import Home from './pages/Home';

function App() {
  return (
    <div className='app'>
      <SideBar />
      <Home />
    </div>
  );
}

export default App;
