import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cart from './components/Cart';
import ProduceList from './components/ProduceList';
import { populateProduce } from './store/produce';
import { getAllCartItems } from './store/cart';

function App() {
  const [showCart, setShowCart] = useState(false);

  // when page opens, show list of all produce
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(populateProduce());
  }, [dispatch]);

  // when first item added to cart, show cart side bar
  const cart = useSelector(state => state.cart);
  useEffect(() => {
    if (Object.keys(cart) > 0) setShowCart(true);
  }, [cart])

  return (
    <>
      <nav>
        <h1>Grocery Store</h1>
        <button className="checkout-button" onClick={() => setShowCart(true)}>
          <i className="fas fa-shopping-bag" />
          Checkout
        </button>
      </nav>
      <main style={showCart ? { marginRight: '300px' } : {}} >
        <ProduceList />
      </main>
      <div
        className="sidebar"
        style={showCart ? { transform: 'translateX(-100%)' } : {}}
      >
        <div className="sidebar-header">
          <button className="arrow-button" onClick={() => setShowCart(false)}>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
        <Cart />
      </div>
    </>
  );
}

export default App;
