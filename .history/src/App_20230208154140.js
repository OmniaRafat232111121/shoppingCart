import './App.css';
import CartContainer from './Component/CartContainer';
import Navbar from './Component/Navbar';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotal, getCartItems} from './features/cart/cartSlice'
import {isOpen} from './features/modal/modalSlice'
import Modal from './Component/Modal';

function App() {
  const {cartItems,isLoading} = useSelector((state) => state.cart);
  const { isOpen } =useSelector((state)=>state.modal)
  const dispatch = useDispatch();
   useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems('random'));
  }, []);

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="App">
      {isOpen &&
         <Modal/>
      }
     
      <Navbar />
      <CartContainer/>
    </div>
  );
}

export default App;
