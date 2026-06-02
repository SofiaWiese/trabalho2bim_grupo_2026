import { useAppNavigation } from "../hooks/useNavigation";


const HomeItens = ({ items = [] }) => {

  const { goToProduct } = useAppNavigation();

  return (

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

      {items.map((item) => (

        <div
          key={item.id}
          className="border p-4 rounded-lg shadow bg-white"
        >

          <img
            src={item.images?.[0]}
            alt={item.title}
            className="w-full h-[200px] object-cover rounded"
          />

          <h2 className="font-bold mt-3 line-clamp-2">
            {item.title}
          </h2>

          <p className="text-green-600 font-bold">
            R$ {item.price}
          </p>

          <button
            onClick={() => goToProduct(item.id)}
            className="bg-black text-white px-4 py-2 rounded mt-3 w-full"
          >
            Ver detalhes
          </button>

        </div>

      ))}

    </div>

  );
};

export default HomeItens;
