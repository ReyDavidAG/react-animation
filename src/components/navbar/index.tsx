import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="text-2xl font-bold text-red-700">Mercado San Juan</h1>
        <ul className="flex flex-wrap justify-center sm:justify-start space-x-4 text-sm font-semibold">
          <li
            className="hover:text-red-600 cursor-pointer"
            onClick={() => navigate("/")}
          >
            Home
          </li>
          <li
            className="hover:text-red-600 cursor-pointer"
            onClick={() => navigate("/store")}
          >
            Tienda
          </li>
          <li
            className="hover:text-red-600 cursor-pointer"
            onClick={() => navigate("/sales")}
          >
            Promociones
          </li>
          <li
            className="hover:text-red-600 cursor-pointer"
            onClick={() => navigate("/contact")}
          >
            Contacto
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
