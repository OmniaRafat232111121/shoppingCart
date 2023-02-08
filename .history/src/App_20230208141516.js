import './App.css';
import CartContainer from './Component/CartContainer';
import Navbar from './Component/Navbar';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotal} from './features/cart/cartSlice'
function App() {
  const cartItems =useSelector((state)=>state.cart)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems])

  return (
    <div className="App">
      <Mo
      <Navbar />
      <CartContainer/>
    </div>
  );
}

export default App;
