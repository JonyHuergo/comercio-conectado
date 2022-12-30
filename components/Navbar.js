const Navbar = () => {
    return (
        <nav>
            <span>
                <img
                src="/logo.png"
                alt="Logo"
                width={200}
                heigth={100}
                />
            </span>
            <span>Ofertas</span>
            <span>Categorias</span>
            <span><input type="text" placeholder="Buscar" /></span>
            <span>Carrito</span>
        </nav>
    );
}
 
export default Navbar;