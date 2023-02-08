import './App.css';
import CartContainer from './Component/CartContainer';
import Navbar from './Component/Navbar';
import { useSelector,useDispatch } from 'react-redux';
function App() {
  const {cartItems}=useSelector()
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Navbar />
      <CartContainer/>
    </div>
  );
}

export default App;
