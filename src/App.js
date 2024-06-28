import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Store from './components/Store';
import Singleproduct from './components/Singleproduct';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
    <Routes>
<Route path="/" element={<Home/>} />
<Route path="/products" element={<Products/>} />
<Route path="/store" element={<Store/>} />
<Route path="/Singleproduct" element={<Singleproduct/>} />
</Routes>
    </div>
  );
}

export default App;
