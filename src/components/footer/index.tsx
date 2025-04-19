import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-red-700 text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center sm:text-left">
        <div>
          <h4 className="text-lg font-semibold mb-2">Mercado San Juan</h4>
          <p className="text-sm">Calidad, frescura y atención personalizada.</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Enlaces rápidos</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">Tienda</li>
            <li className="hover:underline cursor-pointer">Promociones</li>
            <li className="hover:underline cursor-pointer">Contacto</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Síguenos</h4>
          <div className="flex justify-center sm:justify-start space-x-4">
            <FaFacebookF className="hover:text-gray-300 cursor-pointer" />
            <FaInstagram className="hover:text-gray-300 cursor-pointer" />
            <FaTwitter className="hover:text-gray-300 cursor-pointer" />
            <FaEnvelope className="hover:text-gray-300 cursor-pointer" />
          </div>
        </div>
      </div>
      <p className="text-center text-sm mt-6">
        © 2025 Mercado San Juan. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
