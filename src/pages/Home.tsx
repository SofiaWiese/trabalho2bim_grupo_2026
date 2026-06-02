import { useState } from "react";
import { useAppNavigation } from "../hooks/useNavigation";
import { useStore } from "../hooks/useStore";
import HomeItens from "../components/HomeItens";
import Layout from "../components/Layout";

const Home = ({ ...props }) => {
  const { goToCart, goToCheckout } = useAppNavigation();
  const { products, loading } = useStore();
  const [category, setCategory] = useState("all");

  if (loading) {
    return <div>Loading...</div>;
  }

  // 🔥 FUNÇÃO PARA PEGAR PRODUTOS ALEATÓRIOS
  const getRandomProducts = (array, quantity) => {
    const shuffled = [...array].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, quantity);
  };

  // 🔥 FILTRO DOS PRODUTOS
  let filteredProducts = products;

  if (category === "tendências") {
    filteredProducts = getRandomProducts(products, 25);
  }
  if (category === "casual") {
    filteredProducts = products.slice(0, 25);
  }
  if (category === "esportivo") {
    filteredProducts = products.slice(25, 50);
  }
  if (category === "social") {
    filteredProducts = products.slice(50, 75);
  }

  return (
    <Layout> {/* 🟢 O Layout agora gerencia o Header, Menu e o Footer automaticamente */}
      <div {...props} className="flex flex-col gap-8">
        
        {/* BOTÕES PRINCIPAIS */}
        <div className="flex gap-4">
          <button className="bg-black text-white px-4 py-2 rounded" onClick={goToCart}>
            Carrinho
          </button>
          <button className="bg-black text-white px-4 py-2 rounded" onClick={goToCheckout}>
            Checkout
          </button>
        </div>

        {/* MENU SUPERIOR */}
        <div className="flex items-center">
          {/* HOME ESQUERDA */}
          <div className="flex justify-start w-1/2">
            <button className="bg-black text-white px-5 py-2 rounded" onClick={() => setCategory("all")}>
              Início
            </button>
          </div>

          {/* FILTROS DIREITA */}
          <div className="flex justify-end gap-3 w-1/2">
            <button
              className={`px-3 py-2 rounded ${category === "tendências" ? "bg-blue-600 text-white" : "bg-gray-800 text-white"}`}
              onClick={() => setCategory("tendências")}
            >
              Tendências
            </button>
            <button
              className={`px-3 py-2 rounded ${category === "casual" ? "bg-blue-600 text-white" : "bg-gray-800 text-white"}`}
              onClick={() => setCategory("casual")}
            >
              Sapato Casual
            </button>
            <button
              className={`px-3 py-2 rounded ${category === "esportivo" ? "bg-blue-600 text-white" : "bg-gray-800 text-white"}`}
              onClick={() => setCategory("esportivo")}
            >
              Sapato Esportivo
            </button>
            <button
              className={`px-3 py-2 rounded ${category === "social" ? "bg-blue-600 text-white" : "bg-gray-800 text-white"}`}
              onClick={() => setCategory("social")}
            >
              Sapato Social
            </button>
          </div>
        </div>

        {/* BANNER */}
        <div>
          <img className="w-full h-[300px] object-cover rounded-lg" src="https://picsum.photos/1200/300" alt="banner" />
        </div>

        {/* PRODUTOS */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Produtos</h2>
          <HomeItens items={filteredProducts} />
        </div>

      </div>
    </Layout>
  );
};

export default Home;
