import Navbar from './Navbar'
import Footer from './Footer'
import Cart from './Cart'
import { useStateContext } from '../context/StateContext'

export default function Layout({ children }) {
  const {showCart} = useStateContext();

  return (
    <>
      <Navbar />
      {showCart && <Cart/>}
      <main>{children}</main>
      <Footer />
    </>
  )
}