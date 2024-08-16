
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar'
import Services from './components/Services';
import About from './components/About'
// import Approuter from './components/Approuter';

function App() {
  return (
    <div className="App">
      
    
      <Header/>
      <Navbar/>
      <Services/>
      <About/>
      {/* <Approuter/> */}
    </div>
  );
}

export default App;
