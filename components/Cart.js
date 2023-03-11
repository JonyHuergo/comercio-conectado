import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { useStateContext } from '../context/StateContext';
import styles from '../styles/Cart.module.css'

const Cart = () => {
  const { totalPrice, cartItems, setShowCart, toggleCartItemQuantity, removeFromCart } = useStateContext();

  return (
    <div className={styles.cartWrapper}>
      <div className={styles.cartContainer}>
        <button
        type="button"
        className={styles.cartHeading}
        onClick={() => setShowCart(false)}>
          <AiOutlineLeft />
          <span className={styles.heading}>Salir</span>
        </button>
        {cartItems.length < 1 && (
          <div className={styles.emptyCart}>
            <div className={styles.emptyCartSvg}>
              <AiOutlineShopping size={150} />
            </div>
            <span className={styles.emptyCartText}><h3>Tu carrito está vacío</h3></span>
          </div>
        )}
        <div className={styles.cartProductContainer}>
          {cartItems.length >= 1 && cartItems.map((item) => (
            <div className={styles.cartProduct} key={item.product.id}>
              <img src={item.product.mainPhoto.url} className={styles.cartProductImg} />
              <div className={styles.cartProductInfo}>
                <div className={styles.cartProductInfoTop}>
                  <h5>{item.product.name}</h5>
                  <button
                    type="button"
                    className={styles.removeItem}
                    onClick={() => removeFromCart(item)}
                  >
                    <TiDeleteOutline />
                  </button>
                </div>
                <div className={styles.cartProductInfoBottom}>
                  <span className={styles.cartProductPrice}>
                    {item.product.isOnSale ?
                      <h4>${item.product.salePrice * item.quantity}</h4> :
                      <h4>${item.product.price * item.quantity}</h4>
                    }
                  </span>
                  <div className={styles.quantity}>
                    <p className={styles.quantityDesc}>
                      <span className={styles.minus} onClick={() => toggleCartItemQuantity(item.product.name, 'dec') }>
                      <AiOutlineMinus />
                      </span>
                      <span className={styles.num}><b>{item.quantity}</b></span>
                      <span className={styles.plus} onClick={() => toggleCartItemQuantity(item.product.name, 'inc') }><AiOutlinePlus /></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length >= 1 && (
          <div className={styles.cartBottom}>
            <div className={styles.total}>
              <h3>Total:</h3>
              <h3>${totalPrice}</h3>
            </div>
          </div>
        )}
      </div>
      <div className={styles.cartBackground} onClick={() => setShowCart(false)}/>
    </div>
  )
}

export default Cart