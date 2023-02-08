import './App.css';
import CartContainer from './Component/CartContainer';
import Navbar from './Component/Navbar';
import { useSelector,useDispatch } from 'react-redux';
function App() {
  const cartItems=useSelector((state)=>state.cartItems)
  const dispatch = useDispatch();
  useEffect(() => {
  
  }, [cart])

  return (
    <div className="App">
      <Navbar />
      <CartContainer/>
    </div>
  );
}

export default App;
