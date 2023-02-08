import './App.css';
import CartContainer from './Component/CartContainer';
import Navbar from './Component/Navbar';
import {use}
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotal} from './features/cart/cartSlice'
function App() {
  const cartItems=useSelector((state)=>state.cartItems)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems])

  return (
    <div className="App">
      <Navbar />
      <CartContainer/>
    </div>
  );
}

export default App;
