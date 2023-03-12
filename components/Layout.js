import Navbar from './Navbar'
import Footer from './Footer'
import Cart from './Cart'
import SideMenu from './SideMenu'
import { useStateContext } from '../context/StateContext'

export default function Layout({ children }) {
  const {showCart, showSideMenu} = useStateContext();

  return (
    <>
      <Navbar />
      {showCart && <Cart/>}
      {showSideMenu && <SideMenu/>}
      <main>{children}</main>
      <Footer />
    </>
  )
}