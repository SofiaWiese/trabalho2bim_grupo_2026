import { useState, useEffect } from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { PiCreditCardLight } from "react-icons/pi";
import { GoShieldCheck } from "react-icons/go";
import { PiWhatsappLogoLight } from "react-icons/pi";
import { VscSearch } from "react-icons/vsc";

import HomeItens from "../components/HomeItens";
import ServiceCard from "./ServiceCard";
import { useAppNavigation } from "../hooks/useNavigation";
import type { IProduct } from "../interfaces/IProduct";
import { getProducts } from "../services/api";

const Home = ({ ...props }) => {
  const { goToCart, goToCheckout } = useAppNavigation();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [category, setCategory] = useState("all");
  const [mostrarDestaques, setMostrarDestaques] = useState(true);
  const [mostrarTendencias, setMostrarTendencias] = useState(true);
  const [mostrarIndicacoes, setMostrarIndicacoes] = useState(true);
  const [mostrarServicosCard, setMostrarServicosCard] = useState(true);
  const [mostrarCategorias, setMostrarCategorias] = useState(true);

  async function fetchProducts() {
    try {
      setLoading(true);
      const productsData = await getProducts();
      setProducts(productsData);
    } catch (err) {
      setError("Erro ao buscar produtos.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  function mostrarSessaoDestaques() {
    setCategory("destaques");
    setMostrarDestaques(true);
    setMostrarTendencias(false);
    setMostrarIndicacoes(false);
    setMostrarServicosCard(false);
    setMostrarCategorias(false);
  }

  function mostrarSessaoTendencias() {
    setCategory("tendencias");
    setMostrarTendencias(true);
    setMostrarDestaques(false);
    setMostrarIndicacoes(false);
    setMostrarServicosCard(false);
    setMostrarCategorias(false);
  }

  function mostrarSessaoIndicacoes() {
    setCategory("all");
    setMostrarIndicacoes(true);
    setMostrarDestaques(true);
    setMostrarTendencias(true);
    setMostrarServicosCard(true);
    setMostrarCategorias(true);
  }

  const produtosDestaque = products.filter((p) => p.category?.name === "Shoes");

  const produtosTendencias = products.filter(
    (p) => p.category?.name === "Shoes",
  );

  const produtosCategorias = products.filter(
    (p) => p.category?.name === "Shoes",
  );

  return (
    <div
      {...props}
      className="flex flex-col gap-8 p-5 bg-gray-100 min-h-screen"
    >
      <div className="flex flex-col gap-7">
        <div className="relative w-full">
          <div className="w-120 h-12 flex items-center pl-12 rounded-xl border border-gray-300 bg-white text-gray-400">
            Pesquisar
          </div>

          <VscSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
        </div>

        <div className="flex justify-start gap-3 flex-wrap">
          <button
            className={`px-5 py-2 rounded ${
              category === "all"
                ? "bg-blue-600 text-white"
                : "bg-black text-white"
            }`}
            onClick={mostrarSessaoIndicacoes}
          >
            Início
          </button>

          <button
            className={`px-3 py-2 rounded ${
              category === "destaques"
                ? "bg-blue-600 text-white"
                : "bg-black text-white"
            }`}
            onClick={mostrarSessaoDestaques}
          >
            Destaques
          </button>

          <button
            className={`px-3 py-2 rounded ${
              category === "tendencias"
                ? "bg-blue-600 text-white"
                : "bg-black text-white"
            }`}
            onClick={mostrarSessaoTendencias}
          >
            Tendências
          </button>
        </div>
      </div>

      <div>
        <img
          className="w-full h-75 object-cover rounded-lg"
          src="https://picsum.photos/1200/300"
          alt="banner"
        />
      </div>

      {mostrarIndicacoes && (
        <div>
          <HomeItens items={products.slice(0, 4)} />
        </div>
      )}

      {mostrarDestaques && (
        <section>
          <h2 className="font-bold text-xl">Destaques</h2>
          <HomeItens items={produtosDestaque.slice(4, 8)} />
        </section>
      )}

      {mostrarServicosCard && (
        <div className="flex justify-center bg-[#1b1b1b]">
          <ServiceCard
            Icon={CiDeliveryTruck}
            title="Frete Nacional"
            description="Envio rápido e seguro para todo território nacional via Correios"
          />

          <ServiceCard
            Icon={PiCreditCardLight}
            title="Frete Nacional"
            description="Envio rápido e seguro para todo território nacional via Correios"
          />

          <ServiceCard
            Icon={GoShieldCheck}
            title="Frete Nacional"
            description="Envio rápido e seguro para todo território nacional via Correios"
          />

          <ServiceCard
            Icon={PiWhatsappLogoLight}
            title="Frete Nacional"
            description="Envio rápido e seguro para todo território nacional via Correios"
          />
        </div>
      )}

      {mostrarCategorias && (
        <div>
          <HomeItens items={produtosCategorias.slice(0, 4)} />
        </div>
      )}

      {mostrarTendencias && (
        <section>
          <h2 className="font-bold text-xl">Tendências</h2>
          <HomeItens items={produtosTendencias.slice(12, 16)} />
        </section>
      )}
    </div>
  );
};

export default Home;
