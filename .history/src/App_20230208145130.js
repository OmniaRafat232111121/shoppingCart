import './App.css';
import CartContainer from './Component/CartContainer';
import Navbar from './Component/Navbar';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotal} from './features/cart/cartSlice'
import {isOpen} from './features/modal/modalSlice'
import Modal from './Component/Modal';

function App() {
  const cartItems = useSelector((state) => state.cart);
  const isOpen=useSelector((state)=>state.modal)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems])

  return (
    <div className="App">
      {isOpen}
      <Modal/>
      <Navbar />
      <CartContainer/>
    </div>
  );
}

export default App;
