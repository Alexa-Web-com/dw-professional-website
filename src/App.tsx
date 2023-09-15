import './App.css';
import Navbar from './components/Navbar/Navbar'
import SideBarLeft from './components/SideBarLeft/SideBarLeft';
import SideBarRight from './components/SideBarRight/SideBarRight';
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer';
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const App: () => JSX.Element = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">
      <Navbar />
      <Home />
      <SideBarLeft />
      <SideBarRight />
      <Footer />
    </div>
  );
}

export default App;
