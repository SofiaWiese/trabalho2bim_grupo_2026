import { useAppNavigation } from "../hooks/useNavigation";
import { type IProduct } from "../interfaces/IProduct";

interface HomeItensProps {
  items: IProduct[];
}

const HomeItens = ({ items = [] }: HomeItensProps) => {
  const { goToProduct } = useAppNavigation();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {items.map((item) => (
        <div key={item.id} className="border p-4 rounded-lg shadow bg-white">
          <img
            onClick={() => goToProduct(item.id.toString())}
            src={item.images?.[0]}
            alt={item.title}
            className="w-full h-50 object-cover rounded"
          />

          <h2 className="font-bold mt-3 line-clamp-2">{item.title}</h2>

          <p className="text-green-600 font-bold">R$ {item.price}</p>
          <button
            onClick={() => goToProduct(item.id.toString())}
            className="mt-3 bg-black text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Ver Detalhes
          </button>
        </div>
      ))}
    </div>
  );
};

export default HomeItens;
