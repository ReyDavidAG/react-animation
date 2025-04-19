import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";

const Home = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({});

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-red-700 text-white px-4 pt-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold"
        >
          TODO EN UN SOLO LUGAR
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-4 text-lg sm:text-xl"
        >
          Carnicería · Panadería · Frutas · Abarrotes
        </motion.p>
      </section>

      {/* Categorías */}
      <section className="py-20 px-4 bg-gray-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Carnicería",
            description: "Empaque que conserva la frescura",
            img: "https://via.placeholder.com/200x150?text=Carniceria",
          },
          {
            title: "Panadería",
            description: "Pan del día y donas decoradas",
            img: "https://via.placeholder.com/200x150?text=Panaderia",
          },
          {
            title: "Frutas y Verduras",
            description: "Surtido diario y de calidad",
            img: "https://via.placeholder.com/200x150?text=Frutas",
          },
          {
            title: "Abarrotes",
            description: "Gran variedad de productos",
            img: "https://via.placeholder.com/200x150?text=Abarrotes",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-xl overflow-hidden p-6 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img
              src={item.img}
              alt={item.title}
              className="mx-auto mb-4 rounded-lg w-full h-auto"
            />
            <h3 className="text-xl sm:text-2xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              {item.description}
            </p>
          </motion.div>
        ))}
      </section>

      {/* Galería de Productos */}
      <section className="py-20 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12 text-red-700">
          Galería de Productos
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {[...Array(8)].map((_, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={`https://via.placeholder.com/300x200?text=Producto+${
                  index + 1
                }`}
                alt={`Producto ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
